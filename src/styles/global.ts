import { createGlobalStyle, css } from 'styled-components';

import backgroundImage from '@assets/images/background.png';

import { convertToRem } from '@utils/convertToRem';

export default createGlobalStyle`
  ${({ theme }) => css`
    ::-webkit-scrollbar {
      width: ${convertToRem(8)};
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors.neutrals.grey.Grey900};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.neutrals.grey.Grey800};

      border-radius: ${convertToRem(8)};
    }

    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    html {
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    html, body, #root {
      min-height: 100vh;
    }

    body {
      background-color: ${theme.colors.neutrals.grey.Grey900};
      background-image: url(${backgroundImage});
      background-position: center -160px;
      background-size: cover;
      background-repeat: repeat;
    }

    body, input, button, a {
      color: ${theme.colors.neutrals.grey.Grey50};

      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: ${convertToRem(16)};
      line-height: ${convertToRem(24)};

      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }
    
    button, a {
      display: inline-block;
      text-decoration: none;
      cursor: pointer;
    }

    ul {
      list-style-type: none;
    }

    .container {
      width: 100%;
      height: 100%;
      
      max-width: 1440px;

      margin: 0 auto;
      padding-left: ${convertToRem(120)};
      padding-right: ${convertToRem(120)};

      @media (max-width: 1024px) {
        padding-left: ${convertToRem(80)};
        padding-right: ${convertToRem(80)};
      }

      @media (max-width: 768px) {
        padding-left: ${convertToRem(40)};
        padding-right: ${convertToRem(40)};
      }

      @media (max-width: 560px) {
        padding-left: ${convertToRem(24)};
        padding-right: ${convertToRem(24)};
      }

      @media (max-width: 360px) {
        padding-left: ${convertToRem(16)};
        padding-right: ${convertToRem(16)};
      }
    }
  `};
`