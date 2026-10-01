/**
 * Certification API
 * Public API for verifying certifications and displaying badges
 */

import { z } from 'zod';

// ================================================================
// API ROUTES & HANDLERS
// ================================================================

export class CertificationAPI {
  /**
   * GET /api/v1/certifications/:certificateId
   * Get certification details by certificate ID
   */
  async getCertification(certificateId: string): Promise<CertificationResponse> {
    const cert = await this.registryService.getCertificationByCertificateId(certificateId);

    if (!cert) {
      throw new APIError(404, 'Certification not found');
    }

    return {
      certification: {
        id: cert.certificateId,
        companyName: cert.companyName,
        systemName: cert.systemName,
        systemType: cert.systemType,
        useCase: cert.useCase,
        certificationLevel: cert.certificationLevel,
        standard: {
          name: cert.standardName,
          version: cert.standardVersion,
        },
        certifiedDate: cert.certifiedDate.toISOString(),
        expiresDate: cert.expiresDate.toISOString(),
        status: cert.status,
      },
      verification: {
        url: cert.verificationUrl,
        isValid: cert.status === 'active' && cert.expiresDate > new Date(),
        verifiedAt: new Date().toISOString(),
      },
    };
  }

  /**
   * POST /api/v1/certifications/verify
   * Verify a certificate and get its status
   */
  async verifyCertificate(body: { certificateId: string }): Promise<VerificationResponse> {
    const result = await this.registryService.verifyCertificate(body.certificateId);

    return {
      valid: result.valid,
      message: result.message,
      certification: result.certification ? {
        id: result.certification.certificateId,
        companyName: result.certification.companyName,
        systemName: result.certification.systemName,
        certificationLevel: result.certification.certificationLevel,
        certifiedDate: result.certification.certifiedDate.toISOString(),
        expiresDate: result.certification.expiresDate.toISOString(),
        status: result.certification.status,
      } : undefined,
    };
  }

  /**
   * GET /api/v1/badges/:certificateId.svg
   * Get certification badge as SVG
   */
  async getBadge(certificateId: string, query?: {
    theme?: 'light' | 'dark';
    size?: 'small' | 'medium' | 'large';
  }): Promise<string> {
    const cert = await this.registryService.getCertificationByCertificateId(certificateId);

    if (!cert) {
      return this.generateNotFoundBadge();
    }

    if (cert.status !== 'active') {
      return this.generateInvalidBadge(cert.status);
    }

    return this.generateBadgeSVG(cert, query);
  }

  /**
   * GET /api/v1/badges/:certificateId/embed
   * Get embeddable badge HTML/JS
   */
  async getBadgeEmbed(certificateId: string, query?: {
    theme?: 'light' | 'dark';
    size?: 'small' | 'medium' | 'large';
    showDetails?: boolean;
  }): Promise<{ html: string; script: string }> {
    const cert = await this.registryService.getCertificationByCertificateId(certificateId);

    if (!cert) {
      throw new APIError(404, 'Certification not found');
    }

    return {
      html: this.generateBadgeHTML(cert, query),
      script: this.generateBadgeScript(),
    };
  }

  /**
   * GET /api/v1/certifications/search
   * Search public registry
   */
  async searchCertifications(query: {
    q?: string;
    level?: string;
    systemType?: string;
    page?: number;
    limit?: number;
  }): Promise<SearchResponse> {
    const result = await this.registryService.search({
      query: query.q,
      certificationLevel: query.level as any,
      systemType: query.systemType,
      page: query.page || 1,
      limit: Math.min(query.limit || 20, 100),
    });

    return {
      results: result.certifications.map(cert => ({
        id: cert.certificateId,
        companyName: cert.companyName,
        systemName: cert.systemName,
        certificationLevel: cert.certificationLevel,
        certifiedDate: cert.certifiedDate.toISOString(),
        expiresDate: cert.expiresDate.toISOString(),
        status: cert.status,
        verificationUrl: cert.verificationUrl,
      })),
      pagination: {
        page: result.page,
        limit: query.limit || 20,
        total: result.total,
        totalPages: result.totalPages,
      },
    };
  }

  /**
   * GET /api/v1/stats
   * Get registry statistics
   */
  async getStatistics(): Promise<StatsResponse> {
    const stats = await this.registryService.getRegistryStatistics();

    return {
      totalCertifications: stats.totalCertifications,
      activeCertifications: stats.activeCertifications,
      byLevel: stats.certificationsByLevel,
      byIndustry: stats.certificationsByIndustry,
      recentCertifications: stats.recentCertifications.map(cert => ({
        id: cert.certificateId,
        companyName: cert.companyName,
        systemName: cert.systemName,
        certificationLevel: cert.certificationLevel,
        certifiedDate: cert.certifiedDate.toISOString(),
      })),
    };
  }

  // ================================================================
  // BADGE GENERATION
  // ================================================================

  private generateBadgeSVG(cert: any, options?: {
    theme?: 'light' | 'dark';
    size?: 'small' | 'medium' | 'large';
  }): string {
    const theme = options?.theme || 'light';
    const size = options?.size || 'medium';

    const dimensions = {
      small: { width: 120, height: 60, fontSize: 10 },
      medium: { width: 200, height: 80, fontSize: 14 },
      large: { width: 280, height: 100, fontSize: 18 },
    }[size];

    const colors = {
      basic: {
        light: { bg: '#4CAF50', text: '#FFFFFF', border: '#388E3C' },
        dark: { bg: '#2E7D32', text: '#FFFFFF', border: '#1B5E20' },
      },
      advanced: {
        light: { bg: '#2196F3', text: '#FFFFFF', border: '#1976D2' },
        dark: { bg: '#1565C0', text: '#FFFFFF', border: '#0D47A1' },
      },
      critical: {
        light: { bg: '#FF9800', text: '#FFFFFF', border: '#F57C00' },
        dark: { bg: '#E65100', text: '#FFFFFF', border: '#BF360C' },
      },
    };

    const color = colors[cert.certificationLevel as keyof typeof colors][theme];

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${dimensions.width}" height="${dimensions.height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${color.bg};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color.border};stop-opacity:1" />
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect width="${dimensions.width}" height="${dimensions.height}"
        fill="url(#bg-gradient)" rx="8" filter="url(#shadow)"/>

  <rect x="4" y="4" width="${dimensions.width - 8}" height="${dimensions.height - 8}"
        fill="none" stroke="${color.border}" stroke-width="2" rx="6"/>

  <!-- Shield icon -->
  <path d="M ${dimensions.width / 2 - 8} ${dimensions.height * 0.25}
           L ${dimensions.width / 2} ${dimensions.height * 0.2}
           L ${dimensions.width / 2 + 8} ${dimensions.height * 0.25}
           L ${dimensions.width / 2 + 8} ${dimensions.height * 0.35}
           Q ${dimensions.width / 2 + 8} ${dimensions.height * 0.4} ${dimensions.width / 2} ${dimensions.height * 0.42}
           Q ${dimensions.width / 2 - 8} ${dimensions.height * 0.4} ${dimensions.width / 2 - 8} ${dimensions.height * 0.35} Z"
        fill="${color.text}" opacity="0.9"/>

  <text x="${dimensions.width / 2}" y="${dimensions.height * 0.58}"
        font-family="Arial, sans-serif" font-size="${dimensions.fontSize}"
        font-weight="bold" fill="${color.text}" text-anchor="middle">
    AI Safety Certified
  </text>

  <text x="${dimensions.width / 2}" y="${dimensions.height * 0.75}"
        font-family="Arial, sans-serif" font-size="${dimensions.fontSize * 0.85}"
        fill="${color.text}" text-anchor="middle" opacity="0.95">
    ${cert.certificationLevel.toUpperCase()}
  </text>

  <text x="${dimensions.width / 2}" y="${dimensions.height * 0.9}"
        font-family="Arial, sans-serif" font-size="${dimensions.fontSize * 0.6}"
        fill="${color.text}" text-anchor="middle" opacity="0.8">
    ${cert.certificateId}
  </text>
</svg>`;
  }

  private generateNotFoundBadge(): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="80" fill="#757575" rx="5"/>
  <text x="100" y="40" font-family="Arial" font-size="14"
        fill="#FFFFFF" text-anchor="middle">
    Certificate Not Found
  </text>
</svg>`;
  }

  private generateInvalidBadge(status: string): string {
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="80" fill="#F44336" rx="5"/>
  <text x="100" y="35" font-family="Arial" font-size="14" font-weight="bold"
        fill="#FFFFFF" text-anchor="middle">
    Invalid Certificate
  </text>
  <text x="100" y="55" font-family="Arial" font-size="12"
        fill="#FFFFFF" text-anchor="middle">
    Status: ${status}
  </text>
</svg>`;
  }

  private generateBadgeHTML(cert: any, options?: any): string {
    const theme = options?.theme || 'light';
    const size = options?.size || 'medium';
    const showDetails = options?.showDetails ?? true;

    return `<div class="aligned-safety-badge aligned-badge-${size} aligned-badge-${theme}"
     data-certificate-id="${cert.certificateId}"
     data-level="${cert.certificationLevel}">
  <a href="${cert.verificationUrl}" target="_blank" rel="noopener noreferrer"
     class="aligned-badge-link">
    <img src="${cert.badgeUrl}"
         alt="AI Safety Certified - ${cert.certificationLevel}"
         class="aligned-badge-image" />
  </a>
  ${showDetails ? `
  <div class="aligned-badge-details">
    <p class="aligned-badge-company">${cert.companyName}</p>
    <p class="aligned-badge-system">${cert.systemName}</p>
    <p class="aligned-badge-expiry">Valid until ${new Date(cert.expiresDate).toLocaleDateString()}</p>
  </div>
  ` : ''}
</div>`;
  }

  private generateBadgeScript(): string {
    return `
(function() {
  'use strict';

  // AlignedSafely Badge Widget v1.0
  const REGISTRY_API = 'https://api.alignedsafely.com/v1';

  function initBadge(element) {
    const certId = element.getAttribute('data-certificate-id');
    const theme = element.getAttribute('data-theme') || 'light';
    const size = element.getAttribute('data-size') || 'medium';
    const showDetails = element.getAttribute('data-show-details') !== 'false';

    // Fetch certification data
    fetch(\`\${REGISTRY_API}/certifications/\${certId}\`)
      .then(res => res.json())
      .then(data => {
        renderBadge(element, data, { theme, size, showDetails });
      })
      .catch(err => {
        console.error('Failed to load certification badge:', err);
        element.innerHTML = '<p style="color: #999;">Badge unavailable</p>';
      });
  }

  function renderBadge(element, data, options) {
    const cert = data.certification;
    const isValid = data.verification.isValid;

    element.innerHTML = \`
      <div class="aligned-badge aligned-\${options.theme} aligned-\${options.size} \${isValid ? '' : 'aligned-invalid'}">
        <a href="\${data.verification.url}" target="_blank" class="aligned-badge-link">
          <img src="\${REGISTRY_API}/badges/\${cert.id}.svg?theme=\${options.theme}&size=\${options.size}"
               alt="AI Safety Certified" />
        </a>
        \${options.showDetails ? \`
        <div class="aligned-badge-info">
          <div class="aligned-badge-company">\${cert.companyName}</div>
          <div class="aligned-badge-system">\${cert.systemName}</div>
          <div class="aligned-badge-level">\${cert.certificationLevel.toUpperCase()} Level</div>
          <div class="aligned-badge-expiry">
            \${isValid ? 'Valid' : 'Expired'} • Exp: \${new Date(cert.expiresDate).toLocaleDateString()}
          </div>
        </div>
        \` : ''}
      </div>
    \`;

    // Add click tracking
    const link = element.querySelector('.aligned-badge-link');
    if (link) {
      link.addEventListener('click', () => {
        // Track badge click
        fetch(\`\${REGISTRY_API}/analytics/badge-click\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ certificateId: cert.id })
        }).catch(() => {});
      });
    }
  }

  // Initialize all badges on page
  document.querySelectorAll('.aligned-safety-badge').forEach(initBadge);
})();
`;
  }

  // ================================================================
  // DEPENDENCY INJECTION
  // ================================================================

  constructor(private registryService: any) {}
}

// ================================================================
// TYPE DEFINITIONS
// ================================================================

interface CertificationResponse {
  certification: {
    id: string;
    companyName: string;
    systemName: string;
    systemType: string;
    useCase: string;
    certificationLevel: string;
    standard: {
      name: string;
      version: string;
    };
    certifiedDate: string;
    expiresDate: string;
    status: string;
  };
  verification: {
    url: string;
    isValid: boolean;
    verifiedAt: string;
  };
}

interface VerificationResponse {
  valid: boolean;
  message: string;
  certification?: {
    id: string;
    companyName: string;
    systemName: string;
    certificationLevel: string;
    certifiedDate: string;
    expiresDate: string;
    status: string;
  };
}

interface SearchResponse {
  results: Array<{
    id: string;
    companyName: string;
    systemName: string;
    certificationLevel: string;
    certifiedDate: string;
    expiresDate: string;
    status: string;
    verificationUrl: string;
  }>;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

interface StatsResponse {
  totalCertifications: number;
  activeCertifications: number;
  byLevel: Record<string, number>;
  byIndustry: Record<string, number>;
  recentCertifications: Array<{
    id: string;
    companyName: string;
    systemName: string;
    certificationLevel: string;
    certifiedDate: string;
  }>;
}

class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

// ================================================================
// API RATE LIMITING
// ================================================================

export class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  check(ip: string, limit: number, windowMs: number): boolean {
    const now = Date.now();
    const requests = this.requests.get(ip) || [];

    // Remove old requests outside window
    const validRequests = requests.filter(time => now - time < windowMs);

    if (validRequests.length >= limit) {
      return false;
    }

    validRequests.push(now);
    this.requests.set(ip, validRequests);
    return true;
  }
}

// ================================================================
// WEBHOOK SUPPORT
// ================================================================

export interface WebhookPayload {
  event: string;
  timestamp: string;
  data: any;
}

export class WebhookService {
  async sendCertificationEvent(
    webhookUrl: string,
    event: 'certification.created' | 'certification.revoked' | 'certification.expired',
    certification: any
  ): Promise<void> {
    const payload: WebhookPayload = {
      event,
      timestamp: new Date().toISOString(),
      data: { certification },
    };

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-AlignedSafely-Signature': this.generateSignature(payload),
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Webhook delivery failed:', error);
      // TODO: Implement retry logic
    }
  }

  private generateSignature(payload: WebhookPayload): string {
    // TODO: HMAC signature for webhook verification
    return 'signature';
  }
}
