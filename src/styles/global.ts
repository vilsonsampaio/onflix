import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    outline: 0;
  }

  html {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  body, #root {
    position: relative;
    min-height: 100vh;
  }
  
  body, input, button {
    font-family: "Poppins";
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  
  a {
    display: inline-block;
    background: none;
    
    border: 0;
    
    cursor: pointer;
    
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul {
    padding: 0;
    text-align: left;
    
    list-style: none;
  }

  .container {
    width: 100%;
    height: 100%;
    
    max-width: 1170px;

    margin: 0 auto;
  }
`