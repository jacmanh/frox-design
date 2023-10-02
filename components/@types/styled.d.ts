import { Theme } from '@theme/theme.ts'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
