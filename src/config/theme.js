/**
 * Emirates Front Contracting Company Design Tokens
 * Modern Light Blue & Sky-Azure architectural palette with Safety Amber accents.
 */

export const theme = {
  colors: {
    // Primary brand palette (Light Blue #60a5fa architectural tone as requested)
    primary: {
      DEFAULT: '#60a5fa', // Bright, precise architectural sky blue (#60a5fa)
      50: '#f0f7ff',      // Soft ice blue tint
      100: '#e0effe',     // Crisp sky tint
      200: '#bae0fd',
      300: '#93c5fd',
      400: '#60a5fa',     // Primary accent color
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',     // Deep sapphire blue
      800: '#1e40af',     // Prestigious navy-blue
      900: '#0f172a',     // Deep slate-black base
      950: '#020617',     // Deepest obsidian black
    },
    // Slate text tones for crisp contrast on light backgrounds
    slate: {
      DEFAULT: '#0f172a',
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
    // Primary CTA mapped to primary-400 (#60a5fa) — yellow completely removed
    cta: {
      DEFAULT: '#60a5fa', // Primary-400 accent
      hover: '#3b82f6',   // Primary-500
      light: '#eff6ff',   // Subdued background tint
      dark: '#2563eb',
      glow: 'rgba(96, 165, 250, 0.4)',
    },
    // Neutrals & Surface tones (black, white, and shades)
    black: '#020617',
    white: '#ffffff',
    alabaster: {
      DEFAULT: '#f8fafc', // Clean light architectural background
      light: '#ffffff',
      dark: '#f1f5f9',
    },
    muted: {
      DEFAULT: '#64748b',
      light: '#94a3b8',
      dark: '#475569',
    },
  },
  fonts: {
    display: ['Outfit', 'system-ui', 'sans-serif'],
    body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
    mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
  },
  borderRadius: {
    none: '0px',
    sm: '4px',
    DEFAULT: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
};

export default theme;
