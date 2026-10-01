-- ================================================================
-- AI Safety Certification Platform - Database Schema
-- Version: 1.0.0
-- Phase: 1 & 2 Foundation
-- ================================================================

-- ================================================================
-- CORE ENTITIES
-- ================================================================

-- Companies that own AI systems
CREATE TABLE companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    legal_name VARCHAR(255),
    website VARCHAR(500),
    industry VARCHAR(100),
    size VARCHAR(50), -- startup, small, medium, enterprise
    country VARCHAR(2), -- ISO country code

    -- Contact info
    primary_contact_email VARCHAR(255) NOT NULL,
    primary_contact_name VARCHAR(255),

    -- Stripe integration
    stripe_customer_id VARCHAR(255) UNIQUE,

    -- Status
    status VARCHAR(50) DEFAULT 'active', -- active, suspended, deactivated

    -- Metadata
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),

    CONSTRAINT companies_email_check CHECK (primary_contact_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

CREATE INDEX idx_companies_industry ON companies(industry);
CREATE INDEX idx_companies_status ON companies(status);
CREATE INDEX idx_companies_stripe_id ON companies(stripe_customer_id);

-- AI Systems registered for certification
CREATE TABLE ai_systems (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,

    -- System info
    name VARCHAR(255) NOT NULL,
    description TEXT,
    system_type VARCHAR(100), -- foundation_model, application, agent, autonomous_system
    use_case VARCHAR(255), -- medical_diagnosis, lending, autonomous_driving, etc
    risk_level VARCHAR(50), -- low, medium, high, critical

    -- Technical details
    model_architecture TEXT,
    training_data_description TEXT,
    deployment_environment VARCHAR(100), -- cloud, on_premise, edge

    -- Certification status
    current_certification_level VARCHAR(50), -- none, basic, advanced, critical
    certification_status VARCHAR(50) DEFAULT 'unverified', -- unverified, in_progress, certified, expired, revoked
    last_certified_at TIMESTAMP,
    certification_expires_at TIMESTAMP,

    -- Public visibility
    is_public BOOLEAN DEFAULT false,

    -- Metadata
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),

    CONSTRAINT ai_systems_risk_level_check CHECK (risk_level IN ('low', 'medium', 'high', 'critical')),
    CONSTRAINT ai_systems_cert_level_check CHECK (current_certification_level IN ('none', 'basic', 'advanced', 'critical'))
);

CREATE INDEX idx_ai_systems_company ON ai_systems(company_id);
CREATE INDEX idx_ai_systems_risk_level ON ai_systems(risk_level);
CREATE INDEX idx_ai_systems_certification_status ON ai_systems(certification_status);
CREATE INDEX idx_ai_systems_public ON ai_systems(is_public);

-- ================================================================
-- AUDITOR CREDENTIALING SYSTEM
-- ================================================================

-- Certified auditors
CREATE TABLE auditors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Personal info
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,

    -- Credentials
    credentials JSONB, -- degrees, certifications, publications
    specializations TEXT[], -- healthcare_ai, autonomous_systems, nlp, computer_vision
    years_experience INTEGER,

    -- Verification
    verification_status VARCHAR(50) DEFAULT 'pending', -- pending, verified, suspended, revoked
    verified_at TIMESTAMP,
    verified_by UUID REFERENCES auditors(id),

    -- Performance metrics
    audits_completed INTEGER DEFAULT 0,
    average_audit_duration_days DECIMAL(5,2),
    quality_score DECIMAL(3,2), -- 0.00 to 5.00

    -- Availability
    is_accepting_audits BOOLEAN DEFAULT true,
    max_concurrent_audits INTEGER DEFAULT 3,

    -- Stripe integration (for payouts)
    stripe_connect_account_id VARCHAR(255) UNIQUE,

    -- Metadata
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),

    CONSTRAINT auditors_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

CREATE INDEX idx_auditors_status ON auditors(verification_status);
CREATE INDEX idx_auditors_specializations ON auditors USING gin(specializations);
CREATE INDEX idx_auditors_accepting ON auditors(is_accepting_audits);

-- ================================================================
-- STANDARDS & CERTIFICATION FRAMEWORK
-- ================================================================

-- Certification standards and levels
CREATE TABLE certification_standards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Standard info
    name VARCHAR(255) NOT NULL,
    level VARCHAR(50) NOT NULL, -- basic, advanced, critical
    version VARCHAR(50) NOT NULL,

    -- Requirements
    description TEXT,
    requirements JSONB NOT NULL, -- structured checklist
    risk_categories TEXT[], -- safety, fairness, robustness, privacy, transparency

    -- Applicability
    applicable_system_types TEXT[],
    applicable_industries TEXT[],
    min_risk_level VARCHAR(50),

    -- Status
    status VARCHAR(50) DEFAULT 'draft', -- draft, active, deprecated
    effective_date DATE,
    deprecated_date DATE,

    -- Metadata
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),

    UNIQUE(name, version)
);

CREATE INDEX idx_standards_level ON certification_standards(level);
CREATE INDEX idx_standards_status ON certification_standards(status);

-- Audit checklists for each standard
CREATE TABLE audit_checklist_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    standard_id UUID NOT NULL REFERENCES certification_standards(id) ON DELETE CASCADE,

    -- Item details
    category VARCHAR(100) NOT NULL, -- safety, fairness, robustness, etc
    item_number VARCHAR(20), -- e.g., "S-1.2.3"
    requirement_text TEXT NOT NULL,

    -- Verification
    verification_method VARCHAR(100), -- documentation, testing, code_review, interview
    evidence_required TEXT[],

    -- Criticality
    is_mandatory BOOLEAN DEFAULT true,
    weight DECIMAL(3,2) DEFAULT 1.00,

    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_checklist_standard ON audit_checklist_items(standard_id);
CREATE INDEX idx_checklist_category ON audit_checklist_items(category);

-- ================================================================
-- AUDIT MARKETPLACE
-- ================================================================

-- Audit requests from companies
CREATE TABLE audit_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    ai_system_id UUID NOT NULL REFERENCES ai_systems(id) ON DELETE CASCADE,

    -- Request details
    requested_certification_level VARCHAR(50) NOT NULL,
    standard_id UUID REFERENCES certification_standards(id),
    urgency VARCHAR(50), -- standard, expedited, critical
    preferred_start_date DATE,

    -- Matching criteria
    required_specializations TEXT[],
    preferred_auditor_id UUID REFERENCES auditors(id),

    -- Status
    status VARCHAR(50) DEFAULT 'pending', -- pending, matched, in_progress, completed, cancelled

    -- Pricing
    estimated_cost_usd DECIMAL(10,2),
    final_cost_usd DECIMAL(10,2),

    -- Stripe
    stripe_payment_intent_id VARCHAR(255),

    -- Metadata
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_audit_requests_company ON audit_requests(company_id);
CREATE INDEX idx_audit_requests_system ON audit_requests(ai_system_id);
CREATE INDEX idx_audit_requests_status ON audit_requests(status);

-- Auditor assignments
CREATE TABLE audit_assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    audit_request_id UUID NOT NULL REFERENCES audit_requests(id) ON DELETE CASCADE,
    auditor_id UUID NOT NULL REFERENCES auditors(id) ON DELETE CASCADE,

    -- Assignment details
    role VARCHAR(50) DEFAULT 'primary', -- primary, secondary, reviewer
    assigned_at TIMESTAMP DEFAULT NOW(),
    accepted_at TIMESTAMP,

    -- Status
    status VARCHAR(50) DEFAULT 'pending', -- pending, accepted, declined, completed

    -- Compensation
    compensation_usd DECIMAL(10,2),

    UNIQUE(audit_request_id, auditor_id)
);

CREATE INDEX idx_assignments_request ON audit_assignments(audit_request_id);
CREATE INDEX idx_assignments_auditor ON audit_assignments(auditor_id);
CREATE INDEX idx_assignments_status ON audit_assignments(status);

-- ================================================================
-- AUDIT REPORTS & FINDINGS
-- ================================================================

-- Main audit reports
CREATE TABLE audit_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    audit_request_id UUID NOT NULL REFERENCES audit_requests(id) ON DELETE CASCADE,
    ai_system_id UUID NOT NULL REFERENCES ai_systems(id) ON DELETE CASCADE,
    lead_auditor_id UUID NOT NULL REFERENCES auditors(id),

    -- Report details
    standard_id UUID NOT NULL REFERENCES certification_standards(id),
    certification_level VARCHAR(50) NOT NULL,

    -- Dates
    audit_start_date DATE NOT NULL,
    audit_end_date DATE NOT NULL,
    report_date DATE NOT NULL,

    -- Results
    overall_status VARCHAR(50) NOT NULL, -- pass, pass_with_conditions, fail
    overall_score DECIMAL(5,2), -- 0.00 to 100.00

    -- Report content
    executive_summary TEXT,
    methodology TEXT,
    findings_summary TEXT,
    recommendations TEXT,

    -- Certification decision
    certification_granted BOOLEAN DEFAULT false,
    certification_valid_until DATE,
    conditions TEXT[], -- any conditions attached to certification

    -- Visibility
    is_public BOOLEAN DEFAULT false,
    public_summary TEXT, -- sanitized version for public registry

    -- Versioning
    version INTEGER DEFAULT 1,
    supersedes_report_id UUID REFERENCES audit_reports(id),

    -- Metadata
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_reports_request ON audit_reports(audit_request_id);
CREATE INDEX idx_reports_system ON audit_reports(ai_system_id);
CREATE INDEX idx_reports_auditor ON audit_reports(lead_auditor_id);
CREATE INDEX idx_reports_status ON audit_reports(overall_status);
CREATE INDEX idx_reports_public ON audit_reports(is_public);

-- Detailed findings within reports
CREATE TABLE audit_findings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    report_id UUID NOT NULL REFERENCES audit_reports(id) ON DELETE CASCADE,
    checklist_item_id UUID REFERENCES audit_checklist_items(id),

    -- Finding details
    category VARCHAR(100) NOT NULL,
    severity VARCHAR(50) NOT NULL, -- critical, high, medium, low, info
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,

    -- Evidence
    evidence JSONB, -- links, test results, documentation references

    -- Status
    status VARCHAR(50) DEFAULT 'open', -- open, acknowledged, remediated, accepted_risk

    -- Remediation
    recommendation TEXT,
    remediation_deadline DATE,
    remediated_at TIMESTAMP,
    remediation_verification TEXT,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_findings_report ON audit_findings(report_id);
CREATE INDEX idx_findings_severity ON audit_findings(severity);
CREATE INDEX idx_findings_status ON audit_findings(status);

-- ================================================================
-- PUBLIC REGISTRY
-- ================================================================

-- Public certification records
CREATE TABLE public_certifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ai_system_id UUID NOT NULL REFERENCES ai_systems(id) ON DELETE CASCADE,
    report_id UUID NOT NULL REFERENCES audit_reports(id) ON DELETE CASCADE,

    -- Public-facing info
    company_name VARCHAR(255) NOT NULL,
    system_name VARCHAR(255) NOT NULL,
    system_type VARCHAR(100),
    use_case VARCHAR(255),

    -- Certification details
    certification_level VARCHAR(50) NOT NULL,
    standard_name VARCHAR(255) NOT NULL,
    standard_version VARCHAR(50) NOT NULL,

    -- Dates
    certified_date DATE NOT NULL,
    expires_date DATE NOT NULL,

    -- Verification
    certificate_id VARCHAR(100) UNIQUE NOT NULL, -- public verification code
    verification_url VARCHAR(500), -- URL to verify badge

    -- Status
    status VARCHAR(50) DEFAULT 'active', -- active, expired, revoked, suspended

    -- Badge display
    badge_url VARCHAR(500),
    badge_embed_code TEXT,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_public_certs_system ON public_certifications(ai_system_id);
CREATE INDEX idx_public_certs_level ON public_certifications(certification_level);
CREATE INDEX idx_public_certs_status ON public_certifications(status);
CREATE INDEX idx_public_certs_certificate ON public_certifications(certificate_id);

-- ================================================================
-- CONTINUOUS MONITORING (Phase 2)
-- ================================================================

-- Monitoring configurations
CREATE TABLE monitoring_configs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ai_system_id UUID NOT NULL REFERENCES ai_systems(id) ON DELETE CASCADE,

    -- Monitoring parameters
    monitoring_enabled BOOLEAN DEFAULT false,
    monitoring_frequency VARCHAR(50), -- realtime, hourly, daily, weekly

    -- Metrics to track
    tracked_metrics JSONB, -- {accuracy, fairness, latency, error_rate, etc}
    alert_thresholds JSONB, -- threshold values for alerts

    -- Notification settings
    notification_emails TEXT[],
    notification_webhooks TEXT[],

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_monitoring_system ON monitoring_configs(ai_system_id);
CREATE INDEX idx_monitoring_enabled ON monitoring_configs(monitoring_enabled);

-- Monitoring data points
CREATE TABLE monitoring_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ai_system_id UUID NOT NULL REFERENCES ai_systems(id) ON DELETE CASCADE,

    -- Timestamp
    recorded_at TIMESTAMP DEFAULT NOW(),

    -- Metrics
    metric_name VARCHAR(100) NOT NULL,
    metric_value DECIMAL(15,6) NOT NULL,
    metric_unit VARCHAR(50),

    -- Context
    environment VARCHAR(50), -- production, staging, test
    metadata JSONB
);

CREATE INDEX idx_monitoring_data_system ON monitoring_data(ai_system_id);
CREATE INDEX idx_monitoring_data_recorded ON monitoring_data(recorded_at DESC);
CREATE INDEX idx_monitoring_data_metric ON monitoring_data(metric_name);

-- Safety incidents and alerts
CREATE TABLE safety_incidents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ai_system_id UUID NOT NULL REFERENCES ai_systems(id) ON DELETE CASCADE,

    -- Incident details
    incident_type VARCHAR(100) NOT NULL, -- performance_degradation, bias_detected, safety_violation
    severity VARCHAR(50) NOT NULL, -- critical, high, medium, low
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,

    -- Detection
    detected_at TIMESTAMP DEFAULT NOW(),
    detection_method VARCHAR(100), -- automated_monitoring, user_report, audit

    -- Impact
    affected_users INTEGER,
    impact_description TEXT,

    -- Response
    status VARCHAR(50) DEFAULT 'open', -- open, investigating, mitigated, resolved, closed
    assigned_to UUID REFERENCES auditors(id),
    resolution_notes TEXT,
    resolved_at TIMESTAMP,

    -- Follow-up
    requires_recertification BOOLEAN DEFAULT false,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_incidents_system ON safety_incidents(ai_system_id);
CREATE INDEX idx_incidents_severity ON safety_incidents(severity);
CREATE INDEX idx_incidents_status ON safety_incidents(status);
CREATE INDEX idx_incidents_detected ON safety_incidents(detected_at DESC);

-- ================================================================
-- BILLING & INVOICING (Stripe Integration)
-- ================================================================

-- Invoices
CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    audit_request_id UUID REFERENCES audit_requests(id),

    -- Stripe
    stripe_invoice_id VARCHAR(255) UNIQUE NOT NULL,
    stripe_payment_intent_id VARCHAR(255),

    -- Invoice details
    invoice_number VARCHAR(100) UNIQUE NOT NULL,
    amount_usd DECIMAL(10,2) NOT NULL,
    tax_amount_usd DECIMAL(10,2) DEFAULT 0,
    total_amount_usd DECIMAL(10,2) NOT NULL,

    -- Status
    status VARCHAR(50) DEFAULT 'draft', -- draft, open, paid, void, uncollectible

    -- Dates
    invoice_date DATE NOT NULL,
    due_date DATE NOT NULL,
    paid_at TIMESTAMP,

    -- Line items (JSON for flexibility)
    line_items JSONB NOT NULL,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_invoices_company ON invoices(company_id);
CREATE INDEX idx_invoices_status ON invoices(status);
CREATE INDEX idx_invoices_stripe ON invoices(stripe_invoice_id);
CREATE INDEX idx_invoices_number ON invoices(invoice_number);

-- Subscription plans
CREATE TABLE subscription_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Plan details
    name VARCHAR(255) NOT NULL,
    description TEXT,
    tier VARCHAR(50) NOT NULL, -- starter, professional, enterprise

    -- Pricing
    price_usd DECIMAL(10,2) NOT NULL,
    billing_period VARCHAR(50) NOT NULL, -- monthly, annual

    -- Limits
    max_systems INTEGER,
    max_audits_per_year INTEGER,
    monitoring_included BOOLEAN DEFAULT false,
    api_access BOOLEAN DEFAULT false,

    -- Stripe
    stripe_price_id VARCHAR(255) UNIQUE,

    -- Status
    is_active BOOLEAN DEFAULT true,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_plans_tier ON subscription_plans(tier);
CREATE INDEX idx_plans_active ON subscription_plans(is_active);

-- Company subscriptions
CREATE TABLE company_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    plan_id UUID NOT NULL REFERENCES subscription_plans(id),

    -- Stripe
    stripe_subscription_id VARCHAR(255) UNIQUE NOT NULL,

    -- Status
    status VARCHAR(50) DEFAULT 'active', -- active, cancelled, past_due, unpaid

    -- Dates
    started_at TIMESTAMP DEFAULT NOW(),
    current_period_start TIMESTAMP,
    current_period_end TIMESTAMP,
    cancelled_at TIMESTAMP,

    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_subscriptions_company ON company_subscriptions(company_id);
CREATE INDEX idx_subscriptions_status ON company_subscriptions(status);
CREATE INDEX idx_subscriptions_stripe ON company_subscriptions(stripe_subscription_id);

-- ================================================================
-- AUDIT LOG (for compliance)
-- ================================================================

CREATE TABLE audit_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Who
    user_id UUID, -- can be auditor_id or company user
    user_type VARCHAR(50), -- auditor, company_user, system

    -- What
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(100) NOT NULL,
    entity_id UUID NOT NULL,

    -- Details
    changes JSONB,
    ip_address INET,
    user_agent TEXT,

    -- When
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_audit_log_entity ON audit_log(entity_type, entity_id);
CREATE INDEX idx_audit_log_user ON audit_log(user_id);
CREATE INDEX idx_audit_log_created ON audit_log(created_at DESC);

-- ================================================================
-- VIEWS FOR COMMON QUERIES
-- ================================================================

-- Active certifications view
CREATE VIEW active_certifications AS
SELECT
    pc.id,
    pc.company_name,
    pc.system_name,
    pc.certification_level,
    pc.certified_date,
    pc.expires_date,
    pc.certificate_id,
    ais.risk_level,
    ais.use_case,
    c.industry
FROM public_certifications pc
JOIN ai_systems ais ON pc.ai_system_id = ais.id
JOIN companies c ON ais.company_id = c.id
WHERE pc.status = 'active' AND pc.expires_date > CURRENT_DATE;

-- Available auditors view
CREATE VIEW available_auditors AS
SELECT
    a.id,
    a.first_name,
    a.last_name,
    a.specializations,
    a.years_experience,
    a.quality_score,
    a.audits_completed,
    COUNT(aa.id) as current_assignments
FROM auditors a
LEFT JOIN audit_assignments aa ON a.id = aa.auditor_id
    AND aa.status IN ('pending', 'accepted')
WHERE a.verification_status = 'verified'
    AND a.is_accepting_audits = true
GROUP BY a.id
HAVING COUNT(aa.id) < a.max_concurrent_audits;

-- ================================================================
-- FUNCTIONS & TRIGGERS
-- ================================================================

-- Update timestamp trigger function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to all tables with updated_at
CREATE TRIGGER update_companies_updated_at BEFORE UPDATE ON companies
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_ai_systems_updated_at BEFORE UPDATE ON ai_systems
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_auditors_updated_at BEFORE UPDATE ON auditors
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_audit_requests_updated_at BEFORE UPDATE ON audit_requests
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_audit_reports_updated_at BEFORE UPDATE ON audit_reports
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_audit_findings_updated_at BEFORE UPDATE ON audit_findings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Generate certificate ID function
CREATE OR REPLACE FUNCTION generate_certificate_id()
RETURNS TEXT AS $$
DECLARE
    cert_id TEXT;
BEGIN
    cert_id := 'CERT-' || to_char(NOW(), 'YYYY') || '-' ||
               upper(substring(md5(random()::text) from 1 for 8));
    RETURN cert_id;
END;
$$ LANGUAGE plpgsql;

-- ================================================================
-- SEED DATA (Standards Framework)
-- ================================================================

-- Insert basic certification standards
INSERT INTO certification_standards (name, level, version, description, requirements, risk_categories, status, effective_date) VALUES
(
    'AI Safety Standard - Basic',
    'basic',
    '1.0',
    'Entry-level certification for low-to-medium risk AI systems',
    '{"documentation": ["system_description", "data_sources", "deployment_environment"],
      "testing": ["basic_functionality", "error_handling"],
      "governance": ["responsible_owner", "incident_response_plan"]}'::jsonb,
    ARRAY['safety', 'transparency', 'accountability'],
    'active',
    CURRENT_DATE
),
(
    'AI Safety Standard - Advanced',
    'advanced',
    '1.0',
    'Comprehensive certification for medium-to-high risk AI systems',
    '{"documentation": ["detailed_architecture", "training_methodology", "bias_mitigation", "monitoring_plan"],
      "testing": ["robustness_testing", "fairness_analysis", "adversarial_testing", "stress_testing"],
      "governance": ["ethics_review", "stakeholder_engagement", "continuous_monitoring"]}'::jsonb,
    ARRAY['safety', 'fairness', 'robustness', 'transparency', 'accountability', 'privacy'],
    'active',
    CURRENT_DATE
),
(
    'AI Safety Standard - Critical',
    'critical',
    '1.0',
    'Highest level certification for critical infrastructure and life-safety AI systems',
    '{"documentation": ["complete_technical_specification", "formal_verification_evidence", "safety_cases", "regulatory_compliance"],
      "testing": ["formal_verification", "comprehensive_adversarial_testing", "real_world_validation", "third_party_review"],
      "governance": ["safety_board", "external_oversight", "real_time_monitoring", "incident_investigation_protocol"],
      "compliance": ["regulatory_approval", "insurance_coverage", "emergency_shutdown_mechanism"]}'::jsonb,
    ARRAY['safety', 'fairness', 'robustness', 'transparency', 'accountability', 'privacy', 'reliability'],
    'active',
    CURRENT_DATE
);
