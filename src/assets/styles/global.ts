import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --red: #f54e4e;
    --green: #4aec8c;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    font-size: 16px;
    background: #30384b;
  color: #eee;
  }

  main {
  padding-top: 50px;
  max-width: 340px;
  margin: 0 auto;
  text-align: center;
}


  h1,h2,h3,h4,h5,h6 {
    color: #eee;
  }

  svg {
    * {
      transition: all .2s ease-in-out;
    }
  }

  a {
    text-decoration: none;
  }


`;
