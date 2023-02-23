import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "poppins", sans-serif;
  }

    body {
      display: flex;
      min-height: 100vh;
      overflow-x: hidden;
    }

  * {
    scrollbar-width: auto;
  }

  ul{
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }


`

export default GlobalStyles
