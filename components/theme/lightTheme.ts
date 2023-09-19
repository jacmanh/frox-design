import { colors } from './colors.ts'
import { commonTheme } from './theme.ts'
import { shadeHexColor } from './utils.ts'

export const lightTheme = {
  ...commonTheme,
  color: {
    interaction: {
      text: {
        primary: {
          default: colors.light[0],
          hover: colors.light[0],
          disabled: colors.light[300]
        },
        dim: {
          default: colors.light[0],
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
          default: colors.light[500],
          hover: colors.light[0],
          disabled: colors.light[200]
        },
        ghost: {
          default: colors.light[0],
          hover: colors.light[0],
          disabled: colors.light[0]
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
  }
}
