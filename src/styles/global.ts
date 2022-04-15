import { createGlobalStyle } from 'styled-components';

import { convertToRem } from '@utils/convertToRem';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.neutrals.grey.Grey900};
  }

  body, input, button, a {
    color: ${({ theme }) => theme.colors.neutrals.grey.Grey50};

    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: ${convertToRem(16)};
    line-height: ${convertToRem(24)};

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    min-height: 100vh;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  
  input, button, a {
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
  }

  .container {
    width: 100%;
    height: 100%;
    
    max-width: 1170px;

    margin: 0 auto;
  }
`