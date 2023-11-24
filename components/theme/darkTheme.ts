import { colors } from './colors.ts'
import { lightTheme } from './lightTheme.ts'
import { shadeHexColor } from './utils.ts'

export const darkTheme = {
  ...lightTheme,
  base: 'dark',
  color: {
    default: colors.dark[500],
    border: colors.dark[300],
    header: colors.dark[1100],
    link: colors.violet,
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
          default: colors.dark[500],
          hover: colors.dark[500],
          disabled: colors.dark[700]
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
          default: colors.dark[500],
          hover: shadeHexColor(colors.dark[500], 0.5),
          disabled: colors.dark[900]
        },
        ghost: {
          default: shadeHexColor(colors.dark[200], 0.1),
          hover: shadeHexColor(colors.dark[300], 0.1),
          disabled: colors.dark[500]
        }
      }
    }
  },
  background: {
    body: colors.dark[100],
    primary: colors.dark[200],
    secondary: colors.dark[300]
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
          default: colors.dark[0],
          active: shadeHexColor(colors.dark[200], 0.1),
          disabled: colors.dark[500]
        }
      }
    },
    color: {
      text: {
        default: colors.dark[900]
      },
      placeholder: {
        default: colors.dark[500]
      },
      border: {
        default: shadeHexColor(colors.dark[200], 0.1),
        hover: shadeHexColor(colors.dark[300], 0.1)
      }
    }
  }
}
