# TypeScript Styling System - Complete Guide

## What Was Created

✅ **`src/theme.ts`** - Design tokens (colors, spacing, typography, etc.)
✅ **`src/styles.ts`** - Style builders and CSS generation utilities  
✅ **`src/components.ts`** - Pre-built reusable components

## How It Works

### 1. Design Tokens (theme.ts)

All design values in one place:

```typescript
import { theme } from './theme';

// Use anywhere
const spacing = theme.spacing.xl; // '2rem'
const color = theme.colors.light.accent; // '#000000'
const font = theme.fonts.serif; // "'Source Serif 4', Georgia, serif"
```

### 2. Style Builders (styles.ts)

Type-safe style generation:

```typescript
import { styles, css } from './styles';

// Generate CSS string from style object
const buttonStyle = css(styles.button('primary'));
// Returns: "display: inline-block; padding: 1rem 2rem; ..."

// Use in HTML
`<button style="${buttonStyle}">Click Me</button>`
```

### 3. Pre-built Components (components.ts)

Ready-to-use HTML generators:

```typescript
import { components } from './components';

// Generate entire sections
const nav = components.nav('My Site', [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about', emphasized: true }
]);

const hero = components.hero({
  badge: 'NEW',
  title: 'Welcome',
  subtitle: 'This is my site',
  gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  cta: { text: 'Get Started', href: '/start' },
  note: 'No credit card required'
});
```

## Example: Rebuild a Page

### Before (inline styles):

```typescript
app.innerHTML = `
  <div style="padding: 2rem; background: #000;">
    <h1 style="font-size: 3rem; color: white;">Hello</h1>
    <button style="padding: 1rem 2rem; background: #6366F1;">Click</button>
  </div>
`;
```

### After (TypeScript system):

```typescript
import { theme } from './theme';
import { styles, css } from './styles';
import { components } from './components';

app.innerHTML = `
  <div style="${css({
    padding: theme.spacing['2xl'],
    background: theme.colors.light.brand
  })}">
    <h1 style="${css(styles.heading(1))}" style="color: white;">Hello</h1>
    ${components.button('Click', '#', 'primary')}
  </div>
`;
```

## Quick Start: Update main.ts

```typescript
import "./style.css";
import { theme } from './theme';
import { components } from './components';

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div style="min-height: 100vh; display: flex; flex-direction: column;">
    ${components.nav('Aligned Super Intelligence', [
      { text: 'Book Audit', href: '/audit.html', emphasized: true },
      { text: 'Certification', href: '/certification.html' }
    ])}

    ${components.hero({
      badge: 'ENTERPRISE SECURITY AUDIT',
      title: 'Close Enterprise Deals<br/>With AI Security',
      subtitle: 'Comprehensive security audit + certification. $10K fixed price, 2-week delivery.',
      gradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      cta: { text: 'View Full Details →', href: '/audit.html' },
      note: '✓ Prompt injection testing • ✓ Data leakage analysis • ✓ Compliance-ready reports'
    })}

    ${components.section({
      title: 'Why Companies Choose Us',
      children: components.featureGrid([
        { icon: '🏢', title: 'Win Enterprise Deals', description: 'Security questionnaires blocking pipeline. Get certified, close deals.' },
        { icon: '💰', title: 'Raise Capital', description: 'VCs ask about AI security. Show proof of audit.' },
        { icon: '⚖️', title: 'Pass Compliance', description: 'SOC 2, ISO 27001. Our reports satisfy auditors.' }
      ])
    })}

    ${components.footer({
      logo: 'Aligned Super Intelligence',
      tagline: 'Protect Your AI From ASI Threats',
      links: [
        { text: 'Book Audit', href: '/audit.html', emphasized: true },
        { text: 'Certification', href: '/certification.html', emphasized: true },
        { text: 'Email', href: 'mailto:contribute@alignedsafely.com', emphasized: true },
        { text: 'Terms', href: '/terms.html' },
        { text: 'Privacy', href: '/privacy.html' }
      ]
    })}
  </div>
`;
```

## Custom Styles

### Build your own style objects:

```typescript
import { theme } from './theme';
import { css } from './styles';

const myCustomStyle = css({
  display: 'flex',
  gap: theme.spacing.lg,
  padding: theme.spacing['2xl'],
  background: theme.colors.light.surface,
  borderRadius: theme.radius.lg,
  boxShadow: theme.shadows.md
});

const element = `<div style="${myCustomStyle}">Content</div>`;
```

### Extend existing styles:

```typescript
import { styles, css } from './styles';

const customButton = css({
  ...styles.button('primary'),
  fontSize: '2rem',
  padding: '2rem 4rem'
});
```

## Benefits

✅ **Type safety** - Autocomplete for all design tokens  
✅ **Consistency** - All pages use same design system  
✅ **Maintainability** - Change theme in one place  
✅ **Reusability** - Components work across pages  
✅ **No CSS conflicts** - Inline styles with TypeScript  

## Migration Path

### Option 1: Gradual (Recommended)
1. Keep existing pages working
2. Update one page at a time
3. Use components where they fit
4. Mix old and new styles during transition

### Option 2: Full Rewrite
1. Update all pages to use components
2. Remove inline style strings
3. Pure TypeScript styling everywhere

### Option 3: Hybrid
1. Keep CSS file for base styles
2. Use TypeScript for dynamic/component styles
3. Best of both worlds

## Examples

### Simple Card

```typescript
import { components } from './components';

const card = components.card({
  title: 'Feature',
  content: '<p>This is a feature description</p>',
  hover: true
});
```

### Grid Layout

```typescript
import { styles, css } from './styles';

const grid = `
  <div style="${css(styles.grid(3, theme.spacing['2xl']))}">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
`;
```

### Gradient Hero

```typescript
const hero = components.hero({
  title: 'Your Title Here',
  subtitle: 'Your subtitle',
  gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  cta: { text: 'Get Started', href: '/start' }
});
```

## Dark Mode

The theme automatically detects dark mode:

```typescript
import { getCurrentColors, isDarkMode } from './theme';

const colors = getCurrentColors(); // Returns light or dark based on system
const isDark = isDarkMode(); // Boolean

// Colors automatically adjust
const style = css({
  background: colors.surface, // Automatically light or dark
  color: colors.fg
});
```

## Next Steps

1. **Test the system**: Copy examples above into a test file
2. **Update one page**: Start with simplest page (like audit.html)
3. **Build components**: Add new components as needed
4. **Refactor gradually**: Migrate pages one at a time

## Files to Edit

- **`src/main.ts`** - Homepage
- **`src/audit.ts`** - Audit page  
- **`src/certification.ts`** - Certification page
- Add more as needed

All use the same theme/styles/components system.

---

**The entire design system is now in TypeScript with full type safety and autocomplete.**
