import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
  *, *::after, *::before {
    padding: 0px;
    margin: 0px;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.primaryText};
    min-height: 100vh;
  }

  p {
    font-family: 'Work Sans', sans-serif;
  }
`;
export default GlobalStyle;
