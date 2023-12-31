import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '../components'
import { baseCss } from '../components/theme/style'

const GlobalStyles = createGlobalStyle`
 ${baseCss}
 
 h1, h2, h3, h4, h5, h6 {
   color: black;
 }

 #storybook-root {
   padding: 20px;
   border-radius: 10px;
   background-color: ${({ theme }) => theme.background.primary};
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
