import { ReactElement } from 'react'

import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { lightTheme } from '@theme/lightTheme'
import { ThemeProvider } from 'styled-components'

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

export { customRender as render }
