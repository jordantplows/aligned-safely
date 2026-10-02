import { theme } from './theme';
import { styles, css } from './styles';
// Type-safe HTML component builders
export const components = {
    banner: (text, ctaText, ctaHref) => {
        return `
      <div style="${css(styles.banner())}">
        <span style="${css(styles.bannerText())}">${text}</span>
        <a href="${ctaHref}" style="${css(styles.bannerCta())}">${ctaText}</a>
      </div>
    `;
    },
    nav: (logoText, links) => {
        const linkElements = links.map(link => `
      <a href="${link.href}" style="${css({
            ...styles.navLink(),
            ...(link.emphasized ? { color: 'var(--accent)', fontWeight: '600' } : {})
        })}">${link.text}</a>
    `).join('');
        return `
      <nav style="${css(styles.nav())}">
        <span style="${css(styles.navLogo())}">${logoText}</span>
        <div style="${css(styles.navLinks())}">${linkElements}</div>
      </nav>
    `;
    },
    hero: (options) => {
        const badge = options.badge ? `
      <div style="${css({
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: theme.radius.sm,
            marginBottom: theme.spacing.lg,
        })}">
        <span style="${css({
            color: 'white',
            fontSize: theme.fontSize.sm,
            fontWeight: theme.fontWeight.semibold,
            letterSpacing: theme.letterSpacing.wide,
        })}">${options.badge}</span>
      </div>
    ` : '';
        const cta = options.cta ? `
      <a href="${options.cta.href}" style="${css({
            display: 'inline-block',
            padding: `${theme.spacing.lg} ${theme.spacing['3xl']}`,
            background: 'white',
            color: options.gradient ? '#0F172A' : 'var(--fg)',
            textDecoration: 'none',
            fontSize: theme.fontSize.xl,
            fontWeight: theme.fontWeight.bold,
            borderRadius: theme.radius.md,
            border: '2px solid white',
            transition: theme.transition.base,
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            marginTop: theme.spacing['2xl'],
        })}">${options.cta.text}</a>
    ` : '';
        const note = options.note ? `
      <p style="${css({
            fontSize: theme.fontSize.sm,
            color: 'rgba(255,255,255,0.75)',
            marginTop: theme.spacing.lg,
        })}">${options.note}</p>
    ` : '';
        return `
      <section style="${css(styles.hero(options.gradient))}">
        <div style="${css(styles.container('1000px'))}">
          ${badge}
          <h1 style="${css(styles.heroTitle(theme.fontSize['8xl']))}">${options.title}</h1>
          <p style="${css(styles.heroSubtitle())}">${options.subtitle}</p>
          ${cta}
          ${note}
        </div>
      </section>
    `;
    },
    featureGrid: (features) => {
        const featureCards = features.map(f => `
      <div style="${css(styles.featureCard())}">
        <div style="${css(styles.featureIcon())}">${f.icon}</div>
        <h3 style="${css(styles.featureTitle())}">${f.title}</h3>
        <p style="${css(styles.featureDescription())}">${f.description}</p>
      </div>
    `).join('');
        return `<div style="${css(styles.grid(3, theme.spacing['2xl']))}">${featureCards}</div>`;
    },
    section: (options) => {
        return `
      <section style="${css(styles.section(options.background))}">
        <div style="${css(styles.container('1000px'))}">
          <h2 style="${css(styles.sectionTitle())}">${options.title}</h2>
          ${options.children}
        </div>
      </section>
    `;
    },
    footer: (options) => {
        const linkElements = options.links.map(link => `
      <a href="${link.href}" style="${css(styles.footerLink(link.emphasized || false))}">${link.text}</a>
    `).join('');
        return `
      <footer style="${css(styles.footer())}">
        <div style="${css(styles.container('800px'))}">
          <div style="${css(styles.footerLogo())}">${options.logo}</div>
          <p style="${css(styles.footerText())}">${options.tagline}</p>
          <div style="${css(styles.footerLinks())}">${linkElements}</div>
          <div style="${css({
            color: 'rgba(255,255,255,0.4)',
            fontSize: theme.fontSize.sm,
            textAlign: 'center'
        })}">© 2026 Aligned. All rights reserved.</div>
        </div>
      </footer>
    `;
    },
    card: (options) => {
        const cardStyle = options.gradient ? {
            ...styles.card(options.hover),
            background: options.gradient,
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'white',
        } : styles.card(options.hover);
        const titleEl = options.title ? `
      <h3 style="${css({
            fontSize: theme.fontSize.xl,
            fontWeight: theme.fontWeight.semibold,
            marginBottom: theme.spacing.md,
            color: 'inherit',
        })}">${options.title}</h3>
    ` : '';
        return `
      <div style="${css(cardStyle)}">
        ${titleEl}
        ${options.content}
      </div>
    `;
    },
    button: (text, href, variant = 'primary') => {
        return `<a href="${href}" style="${css(styles.button(variant))}">${text}</a>`;
    },
};
