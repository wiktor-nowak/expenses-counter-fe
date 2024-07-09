import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    font-family: "Quicksand", sans-serif;
  }

  div, button {
    font-family: "Quicksand", sans-serif;
  }

  #root, #__next {
    isolation: isolate;
  }

  html {
    // colors
    --color-primary: #14a375;
    --color-secondary: #97df96;
    --color-error: #933544;
    --color-accent: #b9dea8;
    --color-background: #242328;
    --color-menu: #2a292e;
    --color-font: #dfdfe1;
    --color-font-shaded: #a2a5ac;

    // sizes
    --font-huge: 48px;
    --font-large: 32px;
    --font-big: 24px;
    --font-medium: 18px;
    --font-accent: 16px;
    --font-small: 12px;
    --font-tiny: 10px;
  }
`;
