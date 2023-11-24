import { colors } from './colors.ts'
import { commonTheme } from './theme.ts'
import { shadeHexColor } from './utils.ts'

export const lightTheme = {
  base: 'light',
  ...commonTheme,
  color: {
    default: colors.light[500],
    border: colors.light[200],
    header: colors.light[1100],
    link: colors.violet,
    interaction: {
      text: {
        primary: {
          default: colors.light[0],
          hover: colors.light[0],
          disabled: colors.light[300]
        },
        dim: {
          default: colors.light[500],
          hover: colors.light[1000],
          disabled: colors.light[400]
        },
        ghost: {
          default: colors.light[1100],
          hover: colors.light[1100],
          disabled: colors.light[700]
        }
      },
      background: {
        primary: {
          default: colors.violet,
          hover: colors.violet,
          disabled: colors.violet
        },
        dim: {
          default: colors.light[200],
          hover: colors.light[0],
          disabled: colors.light[200]
        },
        ghost: {
          default: 'transparent',
          hover: 'transparent',
          disabled: 'transparent'
        }
      },
      border: {
        primary: {
          default: colors.violet,
          hover: shadeHexColor(colors.violet, 0.5),
          disabled: colors.violet
        },
        dim: {
          default: colors.light[500],
          hover: shadeHexColor(colors.light[500], 0.5),
          disabled: colors.light[200]
        },
        ghost: {
          default: colors.light[500],
          hover: shadeHexColor(colors.light[500], 0.5),
          disabled: colors.light[500]
        }
      }
    }
  },
  background: {
    body: colors.light[100],
    primary: colors.light[0],
    secondary: colors.light[100]
  },
  forms: {
    error: {
      text: colors.red,
      border: colors.red
    },
    choices: {
      color: {
        default: colors.light[0],
        active: colors.violet,
        background: {
          default: colors.light[100],
          active: colors.light[200],
          disabled: colors.light[200]
        }
      }
    },
    color: {
      text: {
        default: colors.light[1000]
      },
      placeholder: {
        default: colors.light[500]
      },
      border: {
        default: colors.light[200],
        hover: shadeHexColor(colors.violet, 0.5)
      }
    }
  }
}
