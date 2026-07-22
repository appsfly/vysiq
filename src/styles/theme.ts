// Palette per HLD.md section 20 (final light-first direction, 70% light / 30% dark pockets).
// Dark "pockets" (ProductPreview, CTA) reuse the vision-system dark tones from section 3.
export const theme = {
  colors: {
    // Light surfaces (Navbar, Hero, Problem, HowItWorks, UseCases, CTA copy)
    bg: '#F7F9FC',
    bgAlt: '#EFF3F9',
    surface: '#FFFFFF',
    border: '#E4EAF2',
    textPrimary: '#0B1220',
    textSecondary: '#5F6B7A',

    // Brand
    brand: '#1463FF',
    brandGlow: '#2F8FFF',
    visionAccent: '#00A7C4',

    // Dark pockets (ProductPreview, CTA band)
    darkBg: '#03070D',
    darkBgAlt: '#07111F',
    darkBorder: '#16233A',
    darkTextPrimary: '#F5F7FA',
    darkTextSecondary: '#8C98A8',
    cyan: '#3DE4FF',

    // Operational status (used only in operational contexts, never as brand color)
    success: '#2DD4A7',
    warning: '#F6B94A',
    danger: '#FF5C6C',
  },
  font: {
    family: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  maxWidth: '1240px',
  radius: {
    sm: '8px',
    md: '14px',
    lg: '20px',
  },
  shadow: {
    card: '0 1px 2px rgba(11, 18, 32, 0.04), 0 8px 24px rgba(11, 18, 32, 0.06)',
    darkGlow: '0 0 60px rgba(47, 143, 255, 0.25)',
  },
} as const

export type Theme = typeof theme
