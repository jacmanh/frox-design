import { lightTheme } from './lightTheme.ts'

export const commonTheme = {
  font: {
    weight: {
      default: 400,
      light: 300,
      semi: 600,
      bold: 700,
      extra: 800
    },
    size: {
      header: {
        1: '2.5rem', // 40px
        2: '2rem', // 32px
        3: '1.75rem', // 28px
        4: '1.75rem', // 28px
        5: '1.5rem', // 24px
        6: '1.25rem' // 20px
      },
      mobile: '12px',
      default: '16px',
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.25rem' // 20px
    },
    lineHeight: {
      header: {
        1: '3.75rem', // 60px
        2: '2.50rem', // 40px
        3: '2.125rem', // 34px
        4: '2.125rem', // 34px
        5: '1.875rem', // 30px
        6: '1rem' // 16px
      }
    }
  },
  size: {
    borderRadius: {
      default: '0.5rem',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem'
    }
  },
  space: {
    default: '1rem',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem'
  }
}

export type Theme = typeof lightTheme
