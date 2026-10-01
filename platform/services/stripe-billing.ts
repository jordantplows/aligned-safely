/**
 * Stripe Billing Integration
 * Handles invoicing, subscriptions, and tax for the AI safety certification platform
 */

import Stripe from 'stripe';
import { z } from 'zod';

// ================================================================
// TYPES & SCHEMAS
// ================================================================

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  tier: 'starter' | 'professional' | 'enterprise';
  priceUsd: number;
  billingPeriod: 'monthly' | 'annual';
  maxSystems: number;
  maxAuditsPerYear: number;
  monitoringIncluded: boolean;
  apiAccess: boolean;
  stripePriceId?: string;
  isActive: boolean;
}

export interface Invoice {
  id: string;
  companyId: string;
  auditRequestId?: string;
  stripeInvoiceId: string;
  stripePaymentIntentId?: string;
  invoiceNumber: string;
  amountUsd: number;
  taxAmountUsd: number;
  totalAmountUsd: number;
  status: 'draft' | 'open' | 'paid' | 'void' | 'uncollectible';
  invoiceDate: Date;
  dueDate: Date;
  paidAt?: Date;
  lineItems: InvoiceLineItem[];
}

export interface InvoiceLineItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  taxable: boolean;
}

// ================================================================
// STRIPE BILLING SERVICE
// ================================================================

export class StripeBillingService {
  private stripe: Stripe;

  constructor(secretKey: string) {
    this.stripe = new Stripe(secretKey, {
      apiVersion: '2024-11-20.acacia',
    });
  }

  // ================================================================
  // CUSTOMER MANAGEMENT
  // ================================================================

  /**
   * Create or update Stripe customer for a company
   */
  async ensureCustomer(company: {
    id: string;
    name: string;
    email: string;
    country?: string;
    taxId?: string;
  }): Promise<string> {
    // Check if customer already exists
    const existingCustomerId = await this.getStripeCustomerId(company.id);

    if (existingCustomerId) {
      // Update existing customer
      await this.stripe.customers.update(existingCustomerId, {
        name: company.name,
        email: company.email,
        metadata: {
          companyId: company.id,
        },
      });
      return existingCustomerId;
    }

    // Create new customer
    const customer = await this.stripe.customers.create({
      name: company.name,
      email: company.email,
      metadata: {
        companyId: company.id,
      },
      tax_id_data: company.taxId ? [{
        type: 'eu_vat', // TODO: Detect type based on country
        value: company.taxId,
      }] : undefined,
    });

    // Save Stripe customer ID
    await this.saveStripeCustomerId(company.id, customer.id);

    return customer.id;
  }

  // ================================================================
  // INVOICING
  // ================================================================

  /**
   * Create invoice for audit service
   */
  async createAuditInvoice(data: {
    companyId: string;
    auditRequestId: string;
    description: string;
    amount: number;
    dueInDays?: number;
  }): Promise<Invoice> {
    const customerId = await this.ensureCustomer(
      await this.getCompanyById(data.companyId)
    );

    // Create invoice in Stripe
    const invoice = await this.stripe.invoices.create({
      customer: customerId,
      collection_method: 'send_invoice',
      days_until_due: data.dueInDays || 30,
      auto_advance: true,
      metadata: {
        companyId: data.companyId,
        auditRequestId: data.auditRequestId,
      },
      automatic_tax: {
        enabled: true, // Stripe Tax handles calculations
      },
    });

    // Add line item
    await this.stripe.invoiceItems.create({
      customer: customerId,
      invoice: invoice.id,
      description: data.description,
      amount: Math.round(data.amount * 100), // Convert to cents
      currency: 'usd',
      tax_behavior: 'exclusive', // Tax calculated separately
    });

    // Finalize invoice
    const finalizedInvoice = await this.stripe.invoices.finalizeInvoice(invoice.id);

    // Save to database
    const savedInvoice = await this.saveInvoice({
      companyId: data.companyId,
      auditRequestId: data.auditRequestId,
      stripeInvoiceId: finalizedInvoice.id,
      invoiceNumber: this.generateInvoiceNumber(),
      amountUsd: data.amount,
      taxAmountUsd: (finalizedInvoice.tax || 0) / 100,
      totalAmountUsd: finalizedInvoice.total / 100,
      status: 'open',
      invoiceDate: new Date(),
      dueDate: new Date(finalizedInvoice.due_date! * 1000),
      lineItems: [{
        description: data.description,
        quantity: 1,
        unitPrice: data.amount,
        amount: data.amount,
        taxable: true,
      }],
    });

    // Send invoice
    await this.stripe.invoices.sendInvoice(finalizedInvoice.id);

    return savedInvoice;
  }

  /**
   * Handle webhook for paid invoice
   */
  async handleInvoicePaid(stripeInvoiceId: string): Promise<void> {
    const invoice = await this.getInvoiceByStripeId(stripeInvoiceId);
    if (!invoice) {
      throw new Error('Invoice not found');
    }

    // Update invoice status
    await this.updateInvoiceStatus(invoice.id, 'paid', new Date());

    // If this was for an audit, mark audit as paid
    if (invoice.auditRequestId) {
      await this.markAuditPaid(invoice.auditRequestId);
    }

    // Send payment confirmation
    await this.sendPaymentConfirmation(invoice.companyId, invoice.id);
  }

  // ================================================================
  // SUBSCRIPTIONS
  // ================================================================

  /**
   * Create subscription for a company
   */
  async createSubscription(data: {
    companyId: string;
    planId: string;
  }): Promise<{ subscriptionId: string; clientSecret: string }> {
    const company = await this.getCompanyById(data.companyId);
    const plan = await this.getPlanById(data.planId);

    if (!plan.stripePriceId) {
      throw new Error('Plan does not have a Stripe price ID');
    }

    const customerId = await this.ensureCustomer(company);

    // Create subscription
    const subscription = await this.stripe.subscriptions.create({
      customer: customerId,
      items: [{
        price: plan.stripePriceId,
      }],
      payment_behavior: 'default_incomplete',
      payment_settings: {
        save_default_payment_method: 'on_subscription',
      },
      expand: ['latest_invoice.payment_intent'],
      metadata: {
        companyId: data.companyId,
        planId: data.planId,
      },
      automatic_tax: {
        enabled: true,
      },
    });

    // Save subscription to database
    await this.saveSubscription({
      companyId: data.companyId,
      planId: data.planId,
      stripeSubscriptionId: subscription.id,
      status: 'active',
      startedAt: new Date(),
      currentPeriodStart: new Date(subscription.current_period_start * 1000),
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
    });

    // Get client secret for payment
    const invoice = subscription.latest_invoice as Stripe.Invoice;
    const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent;

    return {
      subscriptionId: subscription.id,
      clientSecret: paymentIntent.client_secret!,
    };
  }

  /**
   * Cancel subscription
   */
  async cancelSubscription(companyId: string, reason?: string): Promise<void> {
    const subscription = await this.getActiveSubscription(companyId);
    if (!subscription) {
      throw new Error('No active subscription found');
    }

    // Cancel at period end (don't refund)
    await this.stripe.subscriptions.update(subscription.stripeSubscriptionId, {
      cancel_at_period_end: true,
      metadata: {
        cancellationReason: reason || 'User requested',
      },
    });

    // Update database
    await this.updateSubscriptionStatus(subscription.id, 'cancelled', new Date());
  }

  // ================================================================
  // PAYMENT METHODS
  // ================================================================

  /**
   * Setup payment method for a customer
   */
  async setupPaymentMethod(companyId: string): Promise<{ clientSecret: string }> {
    const company = await this.getCompanyById(companyId);
    const customerId = await this.ensureCustomer(company);

    // Create setup intent
    const setupIntent = await this.stripe.setupIntents.create({
      customer: customerId,
      payment_method_types: ['card'],
      usage: 'off_session', // Can charge without customer present
    });

    return {
      clientSecret: setupIntent.client_secret!,
    };
  }

  /**
   * Get customer's payment methods
   */
  async getPaymentMethods(companyId: string): Promise<Array<{
    id: string;
    type: string;
    last4: string;
    brand: string;
    expiryMonth: number;
    expiryYear: number;
    isDefault: boolean;
  }>> {
    const customerId = await this.getStripeCustomerId(companyId);
    if (!customerId) {
      return [];
    }

    const paymentMethods = await this.stripe.paymentMethods.list({
      customer: customerId,
      type: 'card',
    });

    const customer = await this.stripe.customers.retrieve(customerId);
    const defaultPaymentMethod = (customer as Stripe.Customer).invoice_settings.default_payment_method;

    return paymentMethods.data.map(pm => ({
      id: pm.id,
      type: pm.type,
      last4: pm.card!.last4,
      brand: pm.card!.brand,
      expiryMonth: pm.card!.exp_month,
      expiryYear: pm.card!.exp_year,
      isDefault: pm.id === defaultPaymentMethod,
    }));
  }

  // ================================================================
  // TAX HANDLING
  // ================================================================

  /**
   * Calculate tax for an amount
   */
  async calculateTax(data: {
    amount: number;
    country: string;
    state?: string;
    taxId?: string;
  }): Promise<{
    amount: number;
    taxAmount: number;
    total: number;
    taxRate: number;
  }> {
    // Use Stripe Tax API for accurate calculation
    const taxCalculation = await this.stripe.tax.calculations.create({
      currency: 'usd',
      line_items: [{
        amount: Math.round(data.amount * 100),
        reference: 'audit-service',
      }],
      customer_details: {
        address: {
          country: data.country,
          state: data.state,
        },
        address_source: 'shipping',
        tax_ids: data.taxId ? [{
          type: 'eu_vat', // TODO: Detect based on country
          value: data.taxId,
        }] : undefined,
      },
    });

    return {
      amount: data.amount,
      taxAmount: taxCalculation.tax_amount_exclusive / 100,
      total: taxCalculation.amount_total / 100,
      taxRate: taxCalculation.tax_amount_exclusive / Math.round(data.amount * 100) * 100,
    };
  }

  // ================================================================
  // WEBHOOK HANDLING
  // ================================================================

  /**
   * Handle Stripe webhooks
   */
  async handleWebhook(
    payload: string,
    signature: string,
    webhookSecret: string
  ): Promise<void> {
    let event: Stripe.Event;

    try {
      event = this.stripe.webhooks.constructEvent(payload, signature, webhookSecret);
    } catch (err) {
      throw new Error('Invalid webhook signature');
    }

    switch (event.type) {
      case 'invoice.paid':
        await this.handleInvoicePaid(event.data.object.id);
        break;

      case 'invoice.payment_failed':
        await this.handlePaymentFailed(event.data.object);
        break;

      case 'customer.subscription.updated':
        await this.handleSubscriptionUpdated(event.data.object);
        break;

      case 'customer.subscription.deleted':
        await this.handleSubscriptionDeleted(event.data.object);
        break;

      case 'payment_intent.succeeded':
        await this.handlePaymentSucceeded(event.data.object);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  }

  private async handlePaymentFailed(invoice: any): Promise<void> {
    // Update invoice status
    const dbInvoice = await this.getInvoiceByStripeId(invoice.id);
    if (dbInvoice) {
      await this.updateInvoiceStatus(dbInvoice.id, 'uncollectible');

      // Notify company
      await this.sendPaymentFailedNotification(dbInvoice.companyId, dbInvoice.id);
    }
  }

  private async handleSubscriptionUpdated(subscription: any): Promise<void> {
    const dbSub = await this.getSubscriptionByStripeId(subscription.id);
    if (dbSub) {
      await this.updateSubscription(dbSub.id, {
        status: subscription.status,
        currentPeriodStart: new Date(subscription.current_period_start * 1000),
        currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      });
    }
  }

  private async handleSubscriptionDeleted(subscription: any): Promise<void> {
    const dbSub = await this.getSubscriptionByStripeId(subscription.id);
    if (dbSub) {
      await this.updateSubscriptionStatus(dbSub.id, 'cancelled');
    }
  }

  private async handlePaymentSucceeded(paymentIntent: any): Promise<void> {
    // Log successful payment
    console.log('Payment succeeded:', paymentIntent.id);
  }

  // ================================================================
  // REPORTING
  // ================================================================

  /**
   * Get billing dashboard for a company
   */
  async getBillingDashboard(companyId: string): Promise<{
    subscription?: {
      plan: string;
      status: string;
      currentPeriodEnd: Date;
      nextBillingAmount: number;
    };
    unpaidInvoices: Invoice[];
    recentPayments: Array<{
      id: string;
      amount: number;
      date: Date;
      description: string;
    }>;
    totalSpend: {
      thisMonth: number;
      thisYear: number;
      allTime: number;
    };
  }> {
    const [subscription, unpaidInvoices, payments, spend] = await Promise.all([
      this.getActiveSubscription(companyId),
      this.getUnpaidInvoices(companyId),
      this.getRecentPayments(companyId, 10),
      this.calculateTotalSpend(companyId),
    ]);

    return {
      subscription: subscription ? {
        plan: (await this.getPlanById(subscription.planId)).name,
        status: subscription.status,
        currentPeriodEnd: subscription.currentPeriodEnd,
        nextBillingAmount: (await this.getPlanById(subscription.planId)).priceUsd,
      } : undefined,
      unpaidInvoices,
      recentPayments: payments,
      totalSpend: spend,
    };
  }

  // ================================================================
  // HELPER METHODS
  // ================================================================

  private generateInvoiceNumber(): string {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `INV-${year}-${random}`;
  }

  // ================================================================
  // DATABASE OPERATIONS (to be implemented)
  // ================================================================

  private async getCompanyById(id: string): Promise<any> {
    // TODO: Query companies table
    throw new Error('Not implemented');
  }

  private async getStripeCustomerId(companyId: string): Promise<string | null> {
    // TODO: Query companies.stripe_customer_id
    throw new Error('Not implemented');
  }

  private async saveStripeCustomerId(companyId: string, stripeCustomerId: string): Promise<void> {
    // TODO: Update companies.stripe_customer_id
  }

  private async saveInvoice(data: any): Promise<Invoice> {
    // TODO: Insert into invoices table
    throw new Error('Not implemented');
  }

  private async getInvoiceByStripeId(stripeInvoiceId: string): Promise<Invoice | null> {
    // TODO: Query invoices
    throw new Error('Not implemented');
  }

  private async updateInvoiceStatus(invoiceId: string, status: string, paidAt?: Date): Promise<void> {
    // TODO: Update invoices
  }

  private async markAuditPaid(auditRequestId: string): Promise<void> {
    // TODO: Update audit_requests
  }

  private async getPlanById(planId: string): Promise<SubscriptionPlan> {
    // TODO: Query subscription_plans
    throw new Error('Not implemented');
  }

  private async saveSubscription(data: any): Promise<void> {
    // TODO: Insert into company_subscriptions
  }

  private async getActiveSubscription(companyId: string): Promise<any> {
    // TODO: Query company_subscriptions
    throw new Error('Not implemented');
  }

  private async getSubscriptionByStripeId(stripeSubscriptionId: string): Promise<any> {
    // TODO: Query company_subscriptions
    throw new Error('Not implemented');
  }

  private async updateSubscription(id: string, data: any): Promise<void> {
    // TODO: Update company_subscriptions
  }

  private async updateSubscriptionStatus(id: string, status: string, cancelledAt?: Date): Promise<void> {
    // TODO: Update company_subscriptions
  }

  private async getUnpaidInvoices(companyId: string): Promise<Invoice[]> {
    // TODO: Query invoices where status != 'paid'
    throw new Error('Not implemented');
  }

  private async getRecentPayments(companyId: string, limit: number): Promise<any[]> {
    // TODO: Query invoices where status = 'paid'
    throw new Error('Not implemented');
  }

  private async calculateTotalSpend(companyId: string): Promise<any> {
    // TODO: Aggregate from invoices
    return { thisMonth: 0, thisYear: 0, allTime: 0 };
  }

  private async sendPaymentConfirmation(companyId: string, invoiceId: string): Promise<void> {
    // TODO: Send email notification
  }

  private async sendPaymentFailedNotification(companyId: string, invoiceId: string): Promise<void> {
    // TODO: Send email notification
  }
}
