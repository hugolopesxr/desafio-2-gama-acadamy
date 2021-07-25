import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --header-height: 4rem;
    --footer-height: 2rem;
    --navleft-width-close: 6rem;
    --navleft-width-open: 13.6rem;
  }
  a,
  button {
    &,
    &:focus,
    &:active {
      outline: none;
    }
  }
  a {
    cursor pointer;
    text-decoration: none;
    color: black;
  }
  body {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    background: white;
    color: black;
    transition: background .6s ease-in-out, color .6s  ease-in-out;
  }
`