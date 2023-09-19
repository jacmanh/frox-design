import { colors } from './colors.ts'
import { lightTheme } from './lightTheme.ts'
import { shadeHexColor } from './utils.ts'

export const darkTheme = {
  ...lightTheme,
  color: {
    interaction: {
      text: {
        primary: {
          default: colors.dark[1100],
          hover: colors.dark[1100],
          disabled: colors.dark[800]
        },
        dim: {
          default: colors.dark[0],
          hover: colors.dark[100],
          disabled: colors.dark[800]
        },
        ghost: {
          default: colors.dark[0],
          hover: colors.dark[0],
          disabled: colors.dark[500]
        }
      },
      background: {
        primary: {
          default: colors.violet,
          hover: colors.violet,
          disabled: colors.violet
        },
        dim: {
          default: colors.dark[500],
          hover: colors.dark[1100],
          disabled: colors.dark[900]
        },
        ghost: {
          default: colors.dark[1100],
          hover: colors.dark[1100],
          disabled: colors.dark[1100]
        }
      },
      border: {
        primary: {
          default: colors.violet,
          hover: shadeHexColor(colors.violet, 0.5),
          disabled: colors.violet
        },
        dim: {
          default: colors.dark[500],
          hover: shadeHexColor(colors.dark[500], 0.5),
          disabled: colors.dark[900]
        },
        ghost: {
          default: colors.dark[500],
          hover: shadeHexColor(colors.dark[500], 0.5),
          disabled: colors.dark[500]
        }
      }
    }
  }
}
