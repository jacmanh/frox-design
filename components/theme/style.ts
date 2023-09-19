import { createGlobalStyle } from 'styled-components'

/** Insert css variables */
export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

  * {
    box-sizing: border-box;
  }
  
  html {
    font-family: 'Poppins', sans-serif;
    font-size: ${({ theme }) => theme.font.size.mobile};
    font-weight: ${({ theme }) => theme.font.weight.default};
  
    @media (min-width: 1024px) {
      font-size: ${({ theme }) => theme.font.size.default};
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size.header[1]};
    line-height: ${({ theme }) => theme.font.lineHeight.header[1]};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.header[2]};
    line-height: ${({ theme }) => theme.font.lineHeight.header[2]};
  }

  h3 {
    font-size: ${({ theme }) => theme.font.size.header[3]};
    line-height: ${({ theme }) => theme.font.lineHeight.header[3]};
  }

  h4 {
    font-size: ${({ theme }) => theme.font.size.header[4]};
    line-height: ${({ theme }) => theme.font.lineHeight.header[4]};
  }

  h5 {
    font-size: ${({ theme }) => theme.font.size.header[5]};
    line-height: ${({ theme }) => theme.font.lineHeight.header[5]};
  }

  h6 {
    font-size: ${({ theme }) => theme.font.size.header[6]};
    line-height: ${({ theme }) => theme.font.lineHeight.header[6]};
  }
  `
