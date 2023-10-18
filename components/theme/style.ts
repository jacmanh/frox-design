import { createGlobalStyle, css } from 'styled-components'

export const baseCss = css`
  * {
    box-sizing: border-box;
  }

  html {
    color: ${({ theme }) => theme.color.default};
    background-color: ${({ theme }) => theme.background.primary};
    font-family: 'Poppins', sans-serif;
    font-size: ${({ theme }) => theme.font.size.mobile};
    font-weight: ${({ theme }) => theme.font.weight.default};

    @media (min-width: 1024px) {
      font-size: ${({ theme }) => theme.font.size.default};
    }
  }

  h1 {
    color: ${({ theme }) => theme.color.header};
    font-size: ${({ theme }) => theme.font.size.header[1]};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: ${({ theme }) => theme.font.lineHeight.header[1]};
    margin: 0;
  }

  h2 {
    color: ${({ theme }) => theme.color.header};
    font-size: ${({ theme }) => theme.font.size.header[2]};
    font-weight: ${({ theme }) => theme.font.weight.extra};
    line-height: ${({ theme }) => theme.font.lineHeight.header[2]};
    margin: 0;
  }

  h3 {
    color: ${({ theme }) => theme.color.header};
    font-size: ${({ theme }) => theme.font.size.header[3]};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: ${({ theme }) => theme.font.lineHeight.header[3]};
    margin: 0;
  }

  h4 {
    color: ${({ theme }) => theme.color.header};
    font-size: ${({ theme }) => theme.font.size.header[4]};
    font-weight: ${({ theme }) => theme.font.weight.semi};
    line-height: ${({ theme }) => theme.font.lineHeight.header[4]};
    margin: 0;
  }

  h5 {
    color: ${({ theme }) => theme.color.header};
    font-size: ${({ theme }) => theme.font.size.header[5]};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: ${({ theme }) => theme.font.lineHeight.header[5]};
    margin: 0;
  }

  h6 {
    color: ${({ theme }) => theme.color.header};
    font-size: ${({ theme }) => theme.font.size.header[6]};
    font-weight: ${({ theme }) => theme.font.weight.semi};
    line-height: ${({ theme }) => theme.font.lineHeight.header[6]};
    margin: 0;
  }
`

export const GlobalStyles = createGlobalStyle`
  ${baseCss}
`
