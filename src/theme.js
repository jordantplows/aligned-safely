// Design Tokens - TypeScript
export const theme = {
    // Fonts
    fonts: {
        serif: "'Source Serif 4', Georgia, serif",
        sans: "'IBM Plex Sans', system-ui, -apple-system, sans-serif",
        mono: "'IBM Plex Mono', ui-monospace, monospace",
    },
    // Colors - Light Theme
    colors: {
        light: {
            brand: '#000000',
            brandMuted: '#1A1A1A',
            bg: '#FFFFFF',
            surface: '#FFFFFF',
            surfaceElevated: '#FFFFFF',
            fg: '#000000',
            fgEmphasis: '#000000',
            muted: '#666666',
            mutedStrong: '#4A4A4A',
            line: '#E5E5E5',
            lineStrong: '#D1D1D1',
            accent: '#000000',
            accentStrong: '#333333',
            accentSubtle: '#F5F5F5',
            pass: '#22C55E',
            passBg: '#F0FDF4',
            warn: '#EAB308',
            warnBg: '#FEF9C3',
            critical: '#EF4444',
            criticalBg: '#FEE2E2',
        },
        dark: {
            brand: '#000000',
            brandMuted: '#1A1A1A',
            bg: '#000000',
            surface: '#0A0A0A',
            surfaceElevated: '#1A1A1A',
            fg: '#FFFFFF',
            fgEmphasis: '#FFFFFF',
            muted: '#999999',
            mutedStrong: '#B3B3B3',
            line: '#2A2A2A',
            lineStrong: '#404040',
            accent: '#FFFFFF',
            accentStrong: '#E5E5E5',
            accentSubtle: '#1A1A1A',
            pass: '#22C55E',
            passBg: '#0F2818',
            warn: '#EAB308',
            warnBg: '#2B2200',
            critical: '#EF4444',
            criticalBg: '#2B0A0A',
        },
    },
    // Spacing Scale
    spacing: {
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
    },
    // Border Radius
    radius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
    },
    // Shadows
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.08)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.10)',
    },
    // Typography Scale
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
    // Font Weights
    fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
    },
    // Line Heights
    lineHeight: {
        tight: '1.15',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.75',
        loose: '2',
    },
    // Letter Spacing
    letterSpacing: {
        tighter: '-0.06em',
        tight: '-0.04em',
        normal: '0',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.15em',
    },
    // Transitions
    transition: {
        fast: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        base: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
};
// Utility: Check for dark mode
export const isDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};
// Utility: Get current theme colors
export const getCurrentColors = () => {
    return isDarkMode() ? theme.colors.dark : theme.colors.light;
};
