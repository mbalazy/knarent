import { createGlobalStyle, css } from 'styled-components'

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

  a {
    text-decoration: none
  }

  li {
    list-style: none; 
  }
`
export default GlobalStyle

export const cardBasicStyle = css`
  box-shadow: 0px 34px 53px -7px rgba(0, 0, 0, 0.11);
  border-radius: ${({ theme }) => theme.border.standard};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.1s ease-in-out;
`
export const cardHoverEffect = css`
  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 0px 36px 56px -8px rgba(0, 0, 0, 0.14);
  }
`
export const centerInsideMe = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
