import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.base};
    color: ${({ theme }) => theme.color.ink};
    background: ${({ theme }) => theme.color.white};
    -webkit-font-smoothing: antialiased;
    word-break: keep-all;
  }

  a {
    color: ${({ theme }) => theme.color.primary};
  }

  a:hover {
    color: ${({ theme }) => theme.color.primaryDark};
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  p,
  ul,
  ol {
    margin: 0;
  }
`
