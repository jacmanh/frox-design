import { lightTheme } from './lightTheme.ts'

export const commonTheme = {
  border: {
    radius: {
      default: '1rem',
      sm: '0.25rem',
      md: '0.5rem'
    }
  },
  font: {
    weight: {
      default: 400,
      light: 300,
      semi: 600,
      bold: 700,
      extra: 800
    },
    size: {
      mobile: '12px',
      default: '16px',
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.25rem' // 20px
    }
  },
  header: {
    h1: {
      size: '2.5rem', // 40px
      lineHeight: '3.75rem' // 60px
    },
    h2: {
      size: '2rem', // 32px
      lineHeight: '2.50rem' // 40px
    },
    h3: {
      size: '1.75rem', // 28px
      lineHeight: '2.125rem' // 34px
    },
    h4: {
      size: '1.75rem', // 28px
      lineHeight: '2.125rem' // 34px
    },
    h5: {
      size: '1.5rem', // 24px
      lineHeight: '1.875rem' // 30px
    },
    h6: {
      size: '1.25rem', // 20px
      lineHeight: '1rem' // 16px
    }
  },
  spacing: {
    default: '1rem',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem'
  }
}

export type Theme = typeof lightTheme
