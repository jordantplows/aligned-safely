/**
 * Audit Marketplace
 * Matches AI companies with qualified auditors based on specialization and availability
 */

import { z } from 'zod';

// ================================================================
// TYPES & SCHEMAS
// ================================================================

export const CreateAuditRequestSchema = z.object({
  companyId: z.string().uuid(),
  aiSystemId: z.string().uuid(),
  requestedCertificationLevel: z.enum(['basic', 'advanced', 'critical']),
  urgency: z.enum(['standard', 'expedited', 'critical']).default('standard'),
  preferredStartDate: z.string().optional(),
  requiredSpecializations: z.array(z.string()).min(1),
  preferredAuditorId: z.string().uuid().optional(),
  additionalRequirements: z.string().optional(),
});

export interface AuditRequest {
  id: string;
  companyId: string;
  aiSystemId: string;
  requestedCertificationLevel: 'basic' | 'advanced' | 'critical';
  standardId?: string;
  urgency: 'standard' | 'expedited' | 'critical';
  preferredStartDate?: Date;
  requiredSpecializations: string[];
  preferredAuditorId?: string;
  status: 'pending' | 'matched' | 'in_progress' | 'completed' | 'cancelled';
  estimatedCostUsd?: number;
  finalCostUsd?: number;
  stripePaymentIntentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuditAssignment {
  id: string;
  auditRequestId: string;
  auditorId: string;
  role: 'primary' | 'secondary' | 'reviewer';
  status: 'pending' | 'accepted' | 'declined' | 'completed';
  assignedAt: Date;
  acceptedAt?: Date;
  compensationUsd?: number;
}

export interface MatchRecommendation {
  auditor: {
    id: string;
    name: string;
    specializations: string[];
    yearsExperience: number;
    qualityScore: number;
    auditsCompleted: number;
  };
  matchScore: number;
  reasoning: string[];
  availability: {
    canStartBy: Date;
    currentWorkload: number;
  };
  estimatedCost: {
    min: number;
    max: number;
  };
}

// ================================================================
// AUDIT MARKETPLACE SERVICE
// ================================================================

export class AuditMarketplaceService {
  /**
   * Submit new audit request
   */
  async submitAuditRequest(data: z.infer<typeof CreateAuditRequestSchema>): Promise<{
    requestId: string;
    recommendations: MatchRecommendation[];
    estimatedCost: { min: number; max: number };
    estimatedDuration: number;
  }> {
    const validated = CreateAuditRequestSchema.parse(data);

    // Validate AI system exists and belongs to company
    await this.validateSystemOwnership(validated.aiSystemId, validated.companyId);

    // Get appropriate standard
    const standard = await this.determineStandard(
      validated.aiSystemId,
      validated.requestedCertificationLevel
    );

    // Estimate cost and duration
    const estimate = await this.estimateAuditCost(standard, validated.urgency);

    // Create audit request
    const request = await this.createAuditRequest({
      ...validated,
      standardId: standard.id,
      estimatedCostUsd: (estimate.min + estimate.max) / 2,
      status: 'pending',
    });

    // Find matching auditors
    const recommendations = await this.findMatchingAuditors({
      requestId: request.id,
      requiredSpecializations: validated.requiredSpecializations,
      certificationLevel: validated.requestedCertificationLevel,
      preferredAuditorId: validated.preferredAuditorId,
      urgency: validated.urgency,
    });

    // Send notifications to top matches
    await this.notifyAuditorsOfOpportunity(request.id, recommendations.slice(0, 3));

    return {
      requestId: request.id,
      recommendations,
      estimatedCost: estimate,
      estimatedDuration: this.estimateDuration(validated.requestedCertificationLevel),
    };
  }

  /**
   * Find and rank matching auditors
   */
  private async findMatchingAuditors(criteria: {
    requestId: string;
    requiredSpecializations: string[];
    certificationLevel: string;
    preferredAuditorId?: string;
    urgency: string;
  }): Promise<MatchRecommendation[]> {
    // Get available auditors
    const availableAuditors = await this.queryAvailableAuditors({
      specializations: criteria.requiredSpecializations,
      minQualityScore: this.getMinQualityScore(criteria.certificationLevel),
    });

    // Score and rank
    const scored = availableAuditors.map(auditor => ({
      auditor,
      score: this.calculateMatchScore(auditor, criteria),
      reasoning: this.explainMatchScore(auditor, criteria),
    }));

    // Sort by score
    scored.sort((a, b) => b.score - a.score);

    // Boost preferred auditor if specified and available
    if (criteria.preferredAuditorId) {
      const preferredIndex = scored.findIndex(s => s.auditor.id === criteria.preferredAuditorId);
      if (preferredIndex > 0) {
        const preferred = scored.splice(preferredIndex, 1)[0];
        preferred.score *= 1.5; // Boost score
        scored.unshift(preferred);
      }
    }

    // Format recommendations
    return scored.slice(0, 5).map(({ auditor, score, reasoning }) => ({
      auditor: {
        id: auditor.id,
        name: `${auditor.firstName} ${auditor.lastName}`,
        specializations: auditor.specializations,
        yearsExperience: auditor.yearsExperience,
        qualityScore: auditor.qualityScore || 0,
        auditsCompleted: auditor.auditsCompleted,
      },
      matchScore: Math.round(score),
      reasoning,
      availability: {
        canStartBy: this.estimateStartDate(auditor, criteria.urgency),
        currentWorkload: 0, // TODO: Calculate from assignments
      },
      estimatedCost: this.estimateAuditorCost(auditor, criteria.certificationLevel),
    }));
  }

  private calculateMatchScore(auditor: any, criteria: any): number {
    let score = 0;

    // Specialization match (40 points)
    const matchingSpecs = auditor.specializations.filter((s: string) =>
      criteria.requiredSpecializations.includes(s)
    );
    score += (matchingSpecs.length / criteria.requiredSpecializations.length) * 40;

    // Experience (20 points)
    score += Math.min(auditor.yearsExperience * 2, 20);

    // Quality score (30 points)
    score += (auditor.qualityScore || 3.5) * 6;

    // Track record (10 points)
    score += Math.min(auditor.auditsCompleted / 10, 10);

    return score;
  }

  private explainMatchScore(auditor: any, criteria: any): string[] {
    const reasons: string[] = [];

    const matchingSpecs = auditor.specializations.filter((s: string) =>
      criteria.requiredSpecializations.includes(s)
    );

    if (matchingSpecs.length === criteria.requiredSpecializations.length) {
      reasons.push('Perfect specialization match');
    } else if (matchingSpecs.length > 0) {
      reasons.push(`${matchingSpecs.length}/${criteria.requiredSpecializations.length} specializations match`);
    }

    if (auditor.yearsExperience >= 10) {
      reasons.push('Highly experienced (10+ years)');
    } else if (auditor.yearsExperience >= 5) {
      reasons.push('Experienced (5+ years)');
    }

    if (auditor.qualityScore >= 4.5) {
      reasons.push('Exceptional quality score');
    } else if (auditor.qualityScore >= 4.0) {
      reasons.push('High quality score');
    }

    if (auditor.auditsCompleted >= 50) {
      reasons.push('Proven track record (50+ audits)');
    } else if (auditor.auditsCompleted >= 20) {
      reasons.push('Strong track record (20+ audits)');
    }

    return reasons;
  }

  /**
   * Assign auditor to request
   */
  async assignAuditor(requestId: string, auditorId: string, options?: {
    role?: 'primary' | 'secondary' | 'reviewer';
    compensationUsd?: number;
  }): Promise<AuditAssignment> {
    const request = await this.getRequestById(requestId);
    if (!request) {
      throw new Error('Audit request not found');
    }

    if (request.status !== 'pending') {
      throw new Error('Audit request is not in pending status');
    }

    // Check auditor availability
    const auditor = await this.getAuditorById(auditorId);
    if (!auditor) {
      throw new Error('Auditor not found');
    }

    if (!auditor.isAcceptingAudits) {
      throw new Error('Auditor is not accepting new audits');
    }

    // Create assignment
    const assignment = await this.createAssignment({
      auditRequestId: requestId,
      auditorId,
      role: options?.role || 'primary',
      status: 'pending',
      compensationUsd: options?.compensationUsd,
    });

    // Notify auditor
    await this.notifyAuditorOfAssignment(auditorId, requestId);

    return assignment;
  }

  /**
   * Auditor accepts assignment
   */
  async acceptAssignment(assignmentId: string, auditorId: string): Promise<void> {
    const assignment = await this.getAssignmentById(assignmentId);
    if (!assignment) {
      throw new Error('Assignment not found');
    }

    if (assignment.auditorId !== auditorId) {
      throw new Error('Assignment does not belong to this auditor');
    }

    if (assignment.status !== 'pending') {
      throw new Error('Assignment is not pending');
    }

    // Update assignment
    await this.updateAssignment(assignmentId, {
      status: 'accepted',
      acceptedAt: new Date(),
    });

    // Update request status
    await this.updateRequestStatus(assignment.auditRequestId, 'matched');

    // Notify company
    await this.notifyCompanyOfMatch(assignment.auditRequestId, auditorId);

    // Start onboarding process
    await this.initiateAuditOnboarding(assignment.auditRequestId);
  }

  /**
   * Auditor declines assignment
   */
  async declineAssignment(assignmentId: string, auditorId: string, reason?: string): Promise<void> {
    const assignment = await this.getAssignmentById(assignmentId);
    if (!assignment) {
      throw new Error('Assignment not found');
    }

    if (assignment.auditorId !== auditorId) {
      throw new Error('Assignment does not belong to this auditor');
    }

    await this.updateAssignment(assignmentId, {
      status: 'declined',
    });

    // Log decline
    await this.logAssignmentDecline(assignmentId, reason);

    // Find replacement auditor
    await this.findReplacementAuditor(assignment.auditRequestId);
  }

  /**
   * Start audit after match
   */
  async startAudit(requestId: string): Promise<{
    auditId: string;
    kickoffMeetingScheduled: Date;
    checklistUrl: string;
  }> {
    const request = await this.getRequestById(requestId);
    if (!request) {
      throw new Error('Request not found');
    }

    if (request.status !== 'matched') {
      throw new Error('Request must be matched before starting audit');
    }

    // Get assignments
    const assignments = await this.getAssignmentsByRequest(requestId);
    const primaryAuditor = assignments.find(a => a.role === 'primary' && a.status === 'accepted');

    if (!primaryAuditor) {
      throw new Error('No primary auditor assigned');
    }

    // Create audit report record
    const report = await this.createAuditReport({
      auditRequestId: requestId,
      aiSystemId: request.aiSystemId,
      leadAuditorId: primaryAuditor.auditorId,
      standardId: request.standardId!,
      certificationLevel: request.requestedCertificationLevel,
      auditStartDate: new Date(),
    });

    // Update request status
    await this.updateRequestStatus(requestId, 'in_progress');

    // Schedule kickoff meeting
    const kickoffDate = new Date();
    kickoffDate.setDate(kickoffDate.getDate() + 3);

    // Generate audit checklist
    const checklistUrl = await this.generateAuditChecklist(report.id);

    // Notify stakeholders
    await this.notifyAuditStart(requestId, report.id);

    return {
      auditId: report.id,
      kickoffMeetingScheduled: kickoffDate,
      checklistUrl,
    };
  }

  /**
   * Get audit marketplace statistics
   */
  async getMarketplaceStats(): Promise<{
    activeRequests: number;
    completedAudits: number;
    averageMatchTime: number;
    averageAuditDuration: number;
    auditorUtilization: number;
    topSpecializations: Array<{ name: string; demand: number }>;
  }> {
    const [
      active,
      completed,
      matchTime,
      duration,
      utilization,
      specs,
    ] = await Promise.all([
      this.countRequests({ status: 'pending' }),
      this.countRequests({ status: 'completed' }),
      this.calculateAverageMatchTime(),
      this.calculateAverageAuditDuration(),
      this.calculateAuditorUtilization(),
      this.getTopSpecializations(),
    ]);

    return {
      activeRequests: active,
      completedAudits: completed,
      averageMatchTime: matchTime,
      averageAuditDuration: duration,
      auditorUtilization: utilization,
      topSpecializations: specs,
    };
  }

  // ================================================================
  // HELPER METHODS
  // ================================================================

  private getMinQualityScore(level: string): number {
    switch (level) {
      case 'critical': return 4.5;
      case 'advanced': return 4.0;
      case 'basic': return 3.5;
      default: return 3.5;
    }
  }

  private estimateDuration(level: string): number {
    switch (level) {
      case 'critical': return 30;
      case 'advanced': return 15;
      case 'basic': return 5;
      default: return 10;
    }
  }

  private async estimateAuditCost(standard: any, urgency: string): Promise<{ min: number; max: number }> {
    const baseCost = {
      basic: { min: 25000, max: 50000 },
      advanced: { min: 75000, max: 150000 },
      critical: { min: 150000, max: 300000 },
    };

    const cost = baseCost[standard.level as keyof typeof baseCost] || baseCost.basic;

    // Urgency multiplier
    const multiplier = {
      standard: 1.0,
      expedited: 1.5,
      critical: 2.0,
    }[urgency] || 1.0;

    return {
      min: Math.round(cost.min * multiplier),
      max: Math.round(cost.max * multiplier),
    };
  }

  private estimateAuditorCost(auditor: any, level: string): { min: number; max: number } {
    // Base on experience and quality
    const baseRate = 5000 + (auditor.yearsExperience * 500) + ((auditor.qualityScore || 3.5) * 1000);
    const duration = this.estimateDuration(level);

    return {
      min: Math.round(baseRate * duration * 0.8),
      max: Math.round(baseRate * duration * 1.2),
    };
  }

  private estimateStartDate(auditor: any, urgency: string): Date {
    const date = new Date();
    const daysToAdd = {
      critical: 1,
      expedited: 7,
      standard: 14,
    }[urgency] || 14;

    date.setDate(date.getDate() + daysToAdd);
    return date;
  }

  // ================================================================
  // DATABASE OPERATIONS
  // ================================================================

  private async validateSystemOwnership(systemId: string, companyId: string): Promise<void> {
    // TODO: Verify system belongs to company
  }

  private async determineStandard(systemId: string, level: string): Promise<any> {
    // TODO: Get appropriate standard
    throw new Error('Not implemented');
  }

  private async createAuditRequest(data: any): Promise<AuditRequest> {
    // TODO: Insert into audit_requests
    throw new Error('Not implemented');
  }

  private async queryAvailableAuditors(criteria: any): Promise<any[]> {
    // TODO: Query available_auditors view
    throw new Error('Not implemented');
  }

  private async getRequestById(id: string): Promise<AuditRequest | null> {
    // TODO: Query audit_requests
    throw new Error('Not implemented');
  }

  private async getAuditorById(id: string): Promise<any> {
    // TODO: Query auditors
    throw new Error('Not implemented');
  }

  private async createAssignment(data: any): Promise<AuditAssignment> {
    // TODO: Insert into audit_assignments
    throw new Error('Not implemented');
  }

  private async getAssignmentById(id: string): Promise<AuditAssignment | null> {
    // TODO: Query audit_assignments
    throw new Error('Not implemented');
  }

  private async updateAssignment(id: string, data: any): Promise<void> {
    // TODO: Update audit_assignments
  }

  private async updateRequestStatus(id: string, status: string): Promise<void> {
    // TODO: Update audit_requests
  }

  private async getAssignmentsByRequest(requestId: string): Promise<AuditAssignment[]> {
    // TODO: Query audit_assignments
    throw new Error('Not implemented');
  }

  private async createAuditReport(data: any): Promise<any> {
    // TODO: Insert into audit_reports
    throw new Error('Not implemented');
  }

  private async countRequests(filters: any): Promise<number> {
    // TODO: Count requests
    throw new Error('Not implemented');
  }

  private async calculateAverageMatchTime(): Promise<number> {
    // TODO: Calculate from audit_requests
    return 0;
  }

  private async calculateAverageAuditDuration(): Promise<number> {
    // TODO: Calculate from audit_reports
    return 0;
  }

  private async calculateAuditorUtilization(): Promise<number> {
    // TODO: Calculate from assignments
    return 0;
  }

  private async getTopSpecializations(): Promise<Array<{ name: string; demand: number }>> {
    // TODO: Aggregate from requests
    return [];
  }

  private async notifyAuditorsOfOpportunity(requestId: string, auditors: any[]): Promise<void> {
    // TODO: Send notification emails
  }

  private async notifyAuditorOfAssignment(auditorId: string, requestId: string): Promise<void> {
    // TODO: Send notification
  }

  private async notifyCompanyOfMatch(requestId: string, auditorId: string): Promise<void> {
    // TODO: Send notification
  }

  private async initiateAuditOnboarding(requestId: string): Promise<void> {
    // TODO: Start onboarding workflow
  }

  private async logAssignmentDecline(assignmentId: string, reason?: string): Promise<void> {
    // TODO: Log to audit_log
  }

  private async findReplacementAuditor(requestId: string): Promise<void> {
    // TODO: Find and notify replacement
  }

  private async generateAuditChecklist(reportId: string): Promise<string> {
    // TODO: Generate and return URL
    return `https://alignedsafely.com/audits/${reportId}/checklist`;
  }

  private async notifyAuditStart(requestId: string, reportId: string): Promise<void> {
    // TODO: Notify all stakeholders
  }
}
