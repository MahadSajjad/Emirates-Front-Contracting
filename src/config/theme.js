/**
 * Emirates Front Contracting Company Design Tokens
 * Modern Light Blue & Sky-Azure architectural palette with Safety Amber accents.
 */

export const theme = {
  colors: {
    // Primary brand palette (Light Blue / Azure architectural tone)
    primary: {
      DEFAULT: '#0284c7', // Vibrant architectural light blue
      50: '#f0f9ff',      // Clean cloud white-blue
      100: '#e0f2fe',     // Light sky tint
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',     // Bright sky blue
      500: '#0ea5e9',     // Vivid light blue
      600: '#0284c7',     // Main Light Blue primary
      700: '#0369a1',     // Deep azure
      800: '#075985',     // Navy-azure
      900: '#0c4a6e',     // Dark slate-azure
      950: '#082f49',     // Deepest slate-navy base
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
    // Primary CTA (Safety Amber-Orange)
    cta: {
      DEFAULT: '#f59e0b', // Vibrant Safety Amber
      hover: '#d97706',   // Deepened amber for hover
      light: '#fffbeb',   // Subdued background tint
      dark: '#b45309',
      glow: 'rgba(245, 158, 11, 0.45)',
    },
    // Neutrals & Surface tones
    black: '#0b1329',
    white: '#ffffff',
    alabaster: {
      DEFAULT: '#f0f4f8', // Clean light architectural background
      light: '#f8fafc',
      dark: '#e1e7ee',
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
