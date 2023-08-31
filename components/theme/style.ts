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
    font-size: ${({ theme }) => theme.header.h1.size};
    line-height: ${({ theme }) => theme.header.h1.lineHeight};
  }

  h2 {
    font-size: ${({ theme }) => theme.header.h2.size};
    line-height: ${({ theme }) => theme.header.h2.lineHeight};
  }

  h3 {
    font-size: ${({ theme }) => theme.header.h3.size};
    line-height: ${({ theme }) => theme.header.h3.lineHeight};
  }

  h4 {
    font-size: ${({ theme }) => theme.header.h4.size};
    line-height: ${({ theme }) => theme.header.h4.lineHeight};
  }

  h5 {
    font-size: ${({ theme }) => theme.header.h5.size};
    line-height: ${({ theme }) => theme.header.h5.lineHeight};
  }

  h6 {
    font-size: ${({ theme }) => theme.header.h6.size};
    line-height: ${({ theme }) => theme.header.h6.lineHeight};
  }
  `
