/**
 * Emirates Front Contracting Company Design Tokens
 * Modern Light Blue & Sky-Azure architectural palette with Safety Amber accents.
 */

export const theme = {
  colors: {
    // Primary brand palette (Light Blue #0d6efd architectural tone)
    primary: {
      DEFAULT: '#0d6efd', // Vibrant professional light blue
      50: '#edf5ff',      // Soft ice blue tint
      100: '#dbeafe',     // Crisp sky tint
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',     // Bright light blue
      500: '#3b82f6',
      600: '#0d6efd',     // Main Light Blue primary #0d6efd
      700: '#0b5ed7',     // Deep sapphire blue
      800: '#0a4ebd',     // Prestigious navy-blue
      900: '#083b8e',     // Dark royal base
      950: '#052559',     // Deepest corporate navy
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
