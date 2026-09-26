/**
 * Emirates Front Contracting Company Design Tokens
 * Modern Light Blue & Sky-Azure architectural palette with Safety Amber accents.
 */

export const theme = {
  colors: {
    // Primary brand palette (Matching official flyer corporate cerulean blue & blueprint)
    primary: {
      DEFAULT: '#0066b2', // Core corporate blue from official flyer
      50: '#f0f7ff',      // Soft ice blue tint
      100: '#e0f2fe',     // Crisp sky blueprint tint
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',     // Electric blueprint cyan accent
      500: '#0284c7',     // Vibrant cerulean
      600: '#0066b2',     // Primary flyer blue
      700: '#005596',     // Deep corporate blue
      800: '#004377',     // Dark navy blue
      900: '#1e293b',     // Deep slate-navy base
      950: '#091e36',     // Deepest navy-slate
    },
    // Industrial Charcoal & Steel Slate from flyer
    charcoal: {
      DEFAULT: '#262d35',
      light: '#3a434c',
      dark: '#1c2228',
    },
    // Crane & Construction Safety Yellow (original color of cranes and safety helmets)
    crane: {
      DEFAULT: '#f59e0b', // Iconic Liebherr/CAT yellow
      light: '#fbbf24',
      dark: '#d97706',
      accent: '#eab308',
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
    // Primary Call-To-Action: Construction Safety Yellow with dark typography
    cta: {
      DEFAULT: '#f59e0b', // Safety yellow from flyer helmet & crane
      hover: '#d97706',   // Rich industrial amber on hover
      light: '#fef3c7',   // Amber tint
      dark: '#b45309',
      glow: 'rgba(245, 158, 11, 0.45)',
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
