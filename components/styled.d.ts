import 'styled-components'

import { Theme } from './theme/theme.ts'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
