import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
    
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.primary_font};
  }

  ul, li {
    list-style: none;
  }

  body {
    background: radial-gradient(${({ theme }) =>
      theme.colors.radial_gradient}) no-repeat;
    min-height: 100vh;
    position: relative;
  }

  img {
    display: block;
  }

  button {
    display: block;
    border: none;
    background: none;
  }

`;
