/**
 * Public Registry of Certified AI Systems
 * Transparent, searchable registry showing certified AI systems
 */

import { z } from 'zod';

// ================================================================
// TYPES & SCHEMAS
// ================================================================

export interface PublicCertification {
  id: string;
  certificateId: string; // Public verification code (e.g., CERT-2024-A7B3C9D1)

  // Company & System
  companyName: string;
  systemName: string;
  systemType: string;
  useCase: string;

  // Certification details
  certificationLevel: 'basic' | 'advanced' | 'critical';
  standardName: string;
  standardVersion: string;

  // Dates
  certifiedDate: Date;
  expiresDate: Date;

  // Status
  status: 'active' | 'expired' | 'revoked' | 'suspended';

  // Verification
  verificationUrl: string;
  badgeUrl: string;
  badgeEmbedCode: string;

  // Additional info
  publicSummary?: string;

  createdAt: Date;
  updatedAt: Date;
}

export const RegistrySearchSchema = z.object({
  query: z.string().optional(),
  certificationLevel: z.enum(['basic', 'advanced', 'critical']).optional(),
  systemType: z.string().optional(),
  industry: z.string().optional(),
  status: z.enum(['active', 'expired', 'revoked', 'suspended']).optional(),
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(20),
});

export interface RegistrySearchResult {
  certifications: PublicCertification[];
  total: number;
  page: number;
  totalPages: number;
}

export interface CertificateVerificationResult {
  valid: boolean;
  certification?: PublicCertification;
  message: string;
}

// ================================================================
// PUBLIC REGISTRY SERVICE
// ================================================================

export class PublicRegistryService {
  /**
   * Search the public registry
   */
  async search(params: z.infer<typeof RegistrySearchSchema>): Promise<RegistrySearchResult> {
    const validated = RegistrySearchSchema.parse(params);

    const { certifications, total } = await this.queryCertifications({
      query: validated.query,
      certificationLevel: validated.certificationLevel,
      systemType: validated.systemType,
      status: validated.status,
      limit: validated.limit,
      offset: (validated.page - 1) * validated.limit,
    });

    return {
      certifications,
      total,
      page: validated.page,
      totalPages: Math.ceil(total / validated.limit),
    };
  }

  /**
   * Get certification by certificate ID
   */
  async getCertificationByCertificateId(certificateId: string): Promise<PublicCertification | null> {
    return await this.findByCertificateId(certificateId);
  }

  /**
   * Verify a certificate
   */
  async verifyCertificate(certificateId: string): Promise<CertificateVerificationResult> {
    const cert = await this.getCertificationByCertificateId(certificateId);

    if (!cert) {
      return {
        valid: false,
        message: 'Certificate not found',
      };
    }

    // Check if expired
    if (cert.expiresDate < new Date()) {
      return {
        valid: false,
        certification: cert,
        message: 'Certificate has expired',
      };
    }

    // Check status
    if (cert.status !== 'active') {
      return {
        valid: false,
        certification: cert,
        message: `Certificate status: ${cert.status}`,
      };
    }

    return {
      valid: true,
      certification: cert,
      message: 'Certificate is valid',
    };
  }

  /**
   * Publish certification to public registry
   */
  async publishCertification(data: {
    aiSystemId: string;
    reportId: string;
    companyName: string;
    systemName: string;
    systemType: string;
    useCase: string;
    certificationLevel: 'basic' | 'advanced' | 'critical';
    standardName: string;
    standardVersion: string;
    certifiedDate: Date;
    validityPeriodMonths: number;
    publicSummary?: string;
  }): Promise<PublicCertification> {
    // Generate certificate ID
    const certificateId = this.generateCertificateId();

    // Calculate expiry date
    const expiresDate = new Date(data.certifiedDate);
    expiresDate.setMonth(expiresDate.getMonth() + data.validityPeriodMonths);

    // Generate badge and verification URLs
    const verificationUrl = this.generateVerificationUrl(certificateId);
    const badgeUrl = this.generateBadgeUrl(certificateId, data.certificationLevel);
    const badgeEmbedCode = this.generateBadgeEmbedCode(certificateId, badgeUrl);

    // Create public certification record
    const certification = await this.insertPublicCertification({
      aiSystemId: data.aiSystemId,
      reportId: data.reportId,
      companyName: data.companyName,
      systemName: data.systemName,
      systemType: data.systemType,
      useCase: data.useCase,
      certificationLevel: data.certificationLevel,
      standardName: data.standardName,
      standardVersion: data.standardVersion,
      certifiedDate: data.certifiedDate,
      expiresDate,
      certificateId,
      verificationUrl,
      badgeUrl,
      badgeEmbedCode,
      status: 'active',
      publicSummary: data.publicSummary,
    });

    // Notify company of publication
    await this.notifyCertificationPublished(certification);

    return certification;
  }

  /**
   * Revoke certification (e.g., due to safety incident)
   */
  async revokeCertification(certificateId: string, reason: string, revokedBy: string): Promise<void> {
    const cert = await this.getCertificationByCertificateId(certificateId);
    if (!cert) {
      throw new Error('Certification not found');
    }

    await this.updateCertificationStatus(cert.id, 'revoked');

    // Log revocation
    await this.logRevocation({
      certificationId: cert.id,
      certificateId,
      reason,
      revokedBy,
      revokedAt: new Date(),
    });

    // Notify company
    await this.notifyCertificationRevoked(cert, reason);
  }

  /**
   * Suspend certification temporarily
   */
  async suspendCertification(certificateId: string, reason: string): Promise<void> {
    const cert = await this.getCertificationByCertificateId(certificateId);
    if (!cert) {
      throw new Error('Certification not found');
    }

    await this.updateCertificationStatus(cert.id, 'suspended');

    await this.logSuspension({
      certificationId: cert.id,
      certificateId,
      reason,
      suspendedAt: new Date(),
    });

    await this.notifyCertificationSuspended(cert, reason);
  }

  /**
   * Reinstate suspended certification
   */
  async reinstateCertification(certificateId: string): Promise<void> {
    const cert = await this.getCertificationByCertificateId(certificateId);
    if (!cert) {
      throw new Error('Certification not found');
    }

    if (cert.status !== 'suspended') {
      throw new Error('Only suspended certifications can be reinstated');
    }

    await this.updateCertificationStatus(cert.id, 'active');

    await this.notifyCertificationReinstated(cert);
  }

  /**
   * Get registry statistics
   */
  async getRegistryStatistics(): Promise<{
    totalCertifications: number;
    activeCertifications: number;
    certificationsByLevel: Record<string, number>;
    certificationsByIndustry: Record<string, number>;
    recentCertifications: PublicCertification[];
  }> {
    const [
      total,
      active,
      byLevel,
      byIndustry,
      recent,
    ] = await Promise.all([
      this.countCertifications({}),
      this.countCertifications({ status: 'active' }),
      this.getCertificationCountByLevel(),
      this.getCertificationCountByIndustry(),
      this.getRecentCertifications(10),
    ]);

    return {
      totalCertifications: total,
      activeCertifications: active,
      certificationsByLevel: byLevel,
      certificationsByIndustry: byIndustry,
      recentCertifications: recent,
    };
  }

  /**
   * Generate embeddable badge widget
   */
  generateBadgeWidget(certificateId: string, options?: {
    theme?: 'light' | 'dark';
    size?: 'small' | 'medium' | 'large';
    showDetails?: boolean;
  }): string {
    const theme = options?.theme || 'light';
    const size = options?.size || 'medium';
    const showDetails = options?.showDetails ?? true;

    return `
<!-- AlignedSafely.com AI Safety Certification Badge -->
<div class="aligned-safety-badge"
     data-certificate-id="${certificateId}"
     data-theme="${theme}"
     data-size="${size}"
     data-show-details="${showDetails}">
  <script src="https://cdn.alignedsafely.com/badge-widget.js" async></script>
</div>
`;
  }

  /**
   * Get certification badge as SVG
   */
  async generateBadgeSVG(certificateId: string, level: 'basic' | 'advanced' | 'critical'): Promise<string> {
    const colors = {
      basic: { bg: '#4CAF50', text: '#FFFFFF' },
      advanced: { bg: '#2196F3', text: '#FFFFFF' },
      critical: { bg: '#FF9800', text: '#FFFFFF' },
    };

    const color = colors[level];

    return `
<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="80" fill="${color.bg}" rx="5"/>
  <text x="100" y="25" font-family="Arial" font-size="14" font-weight="bold"
        fill="${color.text}" text-anchor="middle">
    AI Safety Certified
  </text>
  <text x="100" y="45" font-family="Arial" font-size="12"
        fill="${color.text}" text-anchor="middle">
    ${level.toUpperCase()}
  </text>
  <text x="100" y="65" font-family="Arial" font-size="10"
        fill="${color.text}" text-anchor="middle">
    ${certificateId}
  </text>
</svg>
`;
  }

  // ================================================================
  // HELPER METHODS
  // ================================================================

  private generateCertificateId(): string {
    const year = new Date().getFullYear();
    const random = Math.random().toString(36).substring(2, 10).toUpperCase();
    return `CERT-${year}-${random}`;
  }

  private generateVerificationUrl(certificateId: string): string {
    return `https://alignedsafely.com/verify/${certificateId}`;
  }

  private generateBadgeUrl(certificateId: string, level: string): string {
    return `https://cdn.alignedsafely.com/badges/${certificateId}.svg`;
  }

  private generateBadgeEmbedCode(certificateId: string, badgeUrl: string): string {
    return `<a href="https://alignedsafely.com/verify/${certificateId}" target="_blank">
  <img src="${badgeUrl}" alt="AI Safety Certified" />
</a>`;
  }

  // ================================================================
  // DATABASE OPERATIONS
  // ================================================================

  private async queryCertifications(params: {
    query?: string;
    certificationLevel?: string;
    systemType?: string;
    status?: string;
    limit: number;
    offset: number;
  }): Promise<{ certifications: PublicCertification[]; total: number }> {
    // TODO: Implement database query with filters
    throw new Error('Not implemented');
  }

  private async findByCertificateId(certificateId: string): Promise<PublicCertification | null> {
    // TODO: Implement database query
    throw new Error('Not implemented');
  }

  private async insertPublicCertification(data: any): Promise<PublicCertification> {
    // TODO: Implement database insert
    throw new Error('Not implemented');
  }

  private async updateCertificationStatus(id: string, status: string): Promise<void> {
    // TODO: Implement database update
    throw new Error('Not implemented');
  }

  private async countCertifications(filters: any): Promise<number> {
    // TODO: Implement count query
    throw new Error('Not implemented');
  }

  private async getCertificationCountByLevel(): Promise<Record<string, number>> {
    // TODO: Implement aggregation query
    throw new Error('Not implemented');
  }

  private async getCertificationCountByIndustry(): Promise<Record<string, number>> {
    // TODO: Implement aggregation query
    throw new Error('Not implemented');
  }

  private async getRecentCertifications(limit: number): Promise<PublicCertification[]> {
    // TODO: Implement query
    throw new Error('Not implemented');
  }

  private async logRevocation(data: any): Promise<void> {
    // TODO: Log to audit_log
  }

  private async logSuspension(data: any): Promise<void> {
    // TODO: Log to audit_log
  }

  private async notifyCertificationPublished(cert: PublicCertification): Promise<void> {
    // TODO: Send notification email
  }

  private async notifyCertificationRevoked(cert: PublicCertification, reason: string): Promise<void> {
    // TODO: Send notification email
  }

  private async notifyCertificationSuspended(cert: PublicCertification, reason: string): Promise<void> {
    // TODO: Send notification email
  }

  private async notifyCertificationReinstated(cert: PublicCertification): Promise<void> {
    // TODO: Send notification email
  }
}

// ================================================================
// PUBLIC API RESPONSES
// ================================================================

export interface PublicAPIResponse {
  certification: {
    id: string;
    companyName: string;
    systemName: string;
    certificationLevel: string;
    certifiedDate: string;
    expiresDate: string;
    status: string;
    verificationUrl: string;
  };
  badge: {
    url: string;
    embedCode: string;
    widget: string;
  };
  standard: {
    name: string;
    version: string;
  };
}
