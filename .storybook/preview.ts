import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '../components'
import { baseCss } from '../components/theme/style'

const GlobalStyles = createGlobalStyle`
 ${baseCss}

 #storybook-root {
   padding: 20px;
   border-radius: 10px;
   max-width: 300px;
   background-color: ${({ theme }) => theme.background.secondary};
 }
`

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles
  })
]

const preview: Preview = {
  parameters: {
    layout: 'padded',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
