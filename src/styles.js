import { theme, getCurrentColors } from './theme';
export const css = (styles) => {
    return Object.entries(styles)
        .map(([key, value]) => {
        const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        return `${cssKey}: ${value}`;
    })
        .join('; ');
};
// Component Style Builders
export const styles = {
    // Layout
    page: () => ({
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: '1',
    }),
    container: (maxWidth = '1400px') => ({
        maxWidth,
        margin: '0 auto',
        padding: `0 ${theme.spacing['3xl']}`,
    }),
    // Banner
    banner: () => {
        const colors = getCurrentColors();
        return {
            background: colors.brand,
            padding: `${theme.spacing.md} ${theme.spacing['3xl']}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: theme.spacing.xl,
            borderBottom: `1px solid ${colors.line}`,
        };
    },
    bannerText: () => ({
        fontSize: theme.fontSize.sm,
        fontWeight: theme.fontWeight.medium,
        color: 'rgba(255, 255, 255, 0.9)',
        letterSpacing: '0.005em',
    }),
    bannerCta: () => {
        const colors = getCurrentColors();
        return {
            fontSize: '0.8125rem',
            fontWeight: theme.fontWeight.semibold,
            color: colors.brand,
            background: colors.surface,
            textDecoration: 'none',
            padding: '0.5rem 1.5rem',
            borderRadius: theme.radius.md,
            transition: theme.transition.fast,
            letterSpacing: '0.01em',
            whiteSpace: 'nowrap',
            boxShadow: theme.shadows.sm,
        };
    },
    // Navigation
    nav: () => {
        const colors = getCurrentColors();
        return {
            padding: `${theme.spacing.lg} ${theme.spacing['3xl']}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `2px solid ${colors.line}`,
            background: colors.surface,
            backdropFilter: 'blur(12px)',
            position: 'sticky',
            top: '0',
            zIndex: '100',
            boxShadow: `0 1px 0 0 ${colors.accentSubtle}`,
        };
    },
    navLogo: () => {
        const colors = getCurrentColors();
        return {
            fontSize: '0.6875rem',
            fontWeight: theme.fontWeight.bold,
            letterSpacing: theme.letterSpacing.widest,
            textTransform: 'uppercase',
            color: colors.fgEmphasis,
        };
    },
    navLinks: () => ({
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing['2xl'],
    }),
    navLink: () => {
        const colors = getCurrentColors();
        return {
            fontSize: theme.fontSize.sm,
            color: colors.fg,
            textDecoration: 'none',
            letterSpacing: '0.005em',
            transition: theme.transition.fast,
            fontWeight: theme.fontWeight.medium,
            position: 'relative',
        };
    },
    // Hero Section
    hero: (backgroundGradient) => {
        const colors = getCurrentColors();
        return {
            padding: `${theme.spacing['5xl']} ${theme.spacing['3xl']}`,
            textAlign: 'center',
            background: backgroundGradient || colors.surface,
            color: backgroundGradient ? '#FFFFFF' : colors.fg,
            borderBottom: backgroundGradient ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
        };
    },
    heroTitle: (fontSize = theme.fontSize['7xl']) => ({
        fontSize,
        fontWeight: theme.fontWeight.black,
        marginBottom: theme.spacing.lg,
        lineHeight: theme.lineHeight.tight,
        fontFamily: theme.fonts.serif,
        letterSpacing: theme.letterSpacing.tighter,
        color: 'inherit',
    }),
    heroSubtitle: () => ({
        fontSize: theme.fontSize['2xl'],
        lineHeight: theme.lineHeight.relaxed,
        marginBottom: theme.spacing['3xl'],
        fontWeight: theme.fontWeight.normal,
        color: 'inherit',
        opacity: '0.9',
    }),
    // Cards
    card: (hover = true) => {
        const colors = getCurrentColors();
        const base = {
            background: colors.surface,
            border: `2px solid ${colors.line}`,
            borderRadius: theme.radius.xl,
            padding: theme.spacing['2xl'],
            boxShadow: theme.shadows.sm,
            transition: theme.transition.base,
        };
        if (hover) {
            return {
                ...base,
                cursor: 'pointer',
            };
        }
        return base;
    },
    // Grid Layouts
    grid: (columns = 3, gap = theme.spacing['2xl']) => ({
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
    }),
    // Buttons
    button: (variant = 'primary') => {
        const colors = getCurrentColors();
        if (variant === 'primary') {
            return {
                display: 'inline-block',
                padding: `${theme.spacing.md} ${theme.spacing['2xl']}`,
                background: colors.accent,
                color: colors.bg,
                textDecoration: 'none',
                fontSize: theme.fontSize.base,
                fontWeight: theme.fontWeight.semibold,
                borderRadius: theme.radius.md,
                border: `2px solid ${colors.accent}`,
                transition: theme.transition.base,
                letterSpacing: '0.005em',
                boxShadow: theme.shadows.md,
                cursor: 'pointer',
                fontFamily: 'inherit',
            };
        }
        else {
            return {
                display: 'inline-block',
                padding: `${theme.spacing.md} ${theme.spacing['2xl']}`,
                background: 'transparent',
                color: colors.fg,
                textDecoration: 'none',
                fontSize: theme.fontSize.base,
                fontWeight: theme.fontWeight.semibold,
                border: `2px solid ${colors.line}`,
                borderRadius: theme.radius.md,
                transition: theme.transition.base,
                letterSpacing: '0.005em',
                cursor: 'pointer',
                fontFamily: 'inherit',
            };
        }
    },
    // Feature Cards
    featureCard: () => {
        const colors = getCurrentColors();
        return {
            padding: theme.spacing['2xl'],
            background: colors.surface,
            border: `2px solid ${colors.line}`,
            borderRadius: theme.radius.lg,
            textAlign: 'center',
        };
    },
    featureIcon: () => ({
        fontSize: theme.fontSize['5xl'],
        marginBottom: theme.spacing.md,
    }),
    featureTitle: () => {
        const colors = getCurrentColors();
        return {
            fontSize: theme.fontSize.xl,
            fontWeight: theme.fontWeight.semibold,
            marginBottom: theme.spacing.md,
            color: colors.fgEmphasis,
        };
    },
    featureDescription: () => {
        const colors = getCurrentColors();
        return {
            fontSize: theme.fontSize.sm,
            color: colors.muted,
            lineHeight: theme.lineHeight.relaxed,
            margin: '0',
        };
    },
    // Section
    section: (background) => {
        const colors = getCurrentColors();
        return {
            padding: `${theme.spacing['5xl']} ${theme.spacing['3xl']}`,
            background: background === 'alt' ? colors.surface : colors.bg,
        };
    },
    sectionTitle: () => {
        const colors = getCurrentColors();
        return {
            fontSize: theme.fontSize['5xl'],
            fontWeight: theme.fontWeight.black,
            color: colors.fgEmphasis,
            marginBottom: theme.spacing['2xl'],
            letterSpacing: theme.letterSpacing.tight,
            textAlign: 'center',
            fontFamily: theme.fonts.serif,
        };
    },
    // Footer
    footer: () => {
        const colors = getCurrentColors();
        return {
            background: colors.brand,
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: `${theme.spacing['5xl']} ${theme.spacing['3xl']} ${theme.spacing['2xl']}`,
            color: 'rgba(255, 255, 255, 0.9)',
            marginTop: 'auto',
        };
    },
    footerLogo: () => ({
        fontSize: theme.fontSize['2xl'],
        fontWeight: theme.fontWeight.bold,
        marginBottom: theme.spacing.md,
        fontFamily: theme.fonts.serif,
        color: 'inherit',
    }),
    footerText: () => ({
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: theme.spacing['2xl'],
        lineHeight: theme.lineHeight.relaxed,
    }),
    footerLinks: () => ({
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing['2xl'],
        marginBottom: theme.spacing['2xl'],
        flexWrap: 'wrap',
    }),
    footerLink: (emphasized = false) => ({
        color: emphasized ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)',
        textDecoration: 'none',
        fontWeight: emphasized ? theme.fontWeight.semibold : theme.fontWeight.normal,
        transition: theme.transition.fast,
    }),
    // Typography
    heading: (level) => {
        const colors = getCurrentColors();
        const sizes = {
            1: theme.fontSize['7xl'],
            2: theme.fontSize['5xl'],
            3: theme.fontSize['3xl'],
            4: theme.fontSize.xl,
        };
        return {
            fontSize: sizes[level],
            fontWeight: theme.fontWeight.bold,
            color: colors.fgEmphasis,
            fontFamily: theme.fonts.serif,
            lineHeight: theme.lineHeight.tight,
            letterSpacing: level <= 2 ? theme.letterSpacing.tight : theme.letterSpacing.normal,
        };
    },
    text: (variant = 'body') => {
        const colors = getCurrentColors();
        const colorMap = {
            body: colors.fg,
            muted: colors.muted,
            emphasis: colors.fgEmphasis,
        };
        return {
            fontSize: theme.fontSize.base,
            lineHeight: theme.lineHeight.relaxed,
            color: colorMap[variant],
        };
    },
};
// Element builders
export const el = {
    div: (content, styleObj) => {
        const styleStr = styleObj ? ` style="${css(styleObj)}"` : '';
        return `<div${styleStr}>${content}</div>`;
    },
    section: (content, className, styleObj) => {
        const classStr = className ? ` class="${className}"` : '';
        const styleStr = styleObj ? ` style="${css(styleObj)}"` : '';
        return `<section${classStr}${styleStr}>${content}</section>`;
    },
    h1: (text, styleObj) => {
        const styleStr = styleObj ? ` style="${css(styleObj)}"` : '';
        return `<h1${styleStr}>${text}</h1>`;
    },
    h2: (text, styleObj) => {
        const styleStr = styleObj ? ` style="${css(styleObj)}"` : '';
        return `<h2${styleStr}>${text}</h2>`;
    },
    h3: (text, styleObj) => {
        const styleStr = styleObj ? ` style="${css(styleObj)}"` : '';
        return `<h3${styleStr}>${text}</h3>`;
    },
    p: (text, styleObj) => {
        const styleStr = styleObj ? ` style="${css(styleObj)}"` : '';
        return `<p${styleStr}>${text}</p>`;
    },
    a: (text, href, styleObj, target) => {
        const styleStr = styleObj ? ` style="${css(styleObj)}"` : '';
        const targetStr = target ? ` target="${target}"` : '';
        return `<a href="${href}"${targetStr}${styleStr}>${text}</a>`;
    },
    button: (text, styleObj) => {
        const styleStr = styleObj ? ` style="${css(styleObj)}"` : '';
        return `<button${styleStr}>${text}</button>`;
    },
};
