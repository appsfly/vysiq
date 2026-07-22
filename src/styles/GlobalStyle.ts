import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.font.family};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html[lang='he'] body {
    font-family: 'Rubik', ${({ theme }) => theme.font.family};
  }

  /* Directional icons (arrows) should point toward reading-flow, so mirror them in RTL */
  html[dir='rtl'] .flip-rtl {
    transform: scaleX(-1);
  }

  h1, h2, h3, h4, p, figure {
    margin: 0;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img, video {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.brand};
    color: #fff;
  }
`
