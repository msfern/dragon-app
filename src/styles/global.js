import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #F6F7F8;
    color: #343434;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }
  
  button {
    cursor: pointer;
  }

    ul {
      list-style-type: none;
    }

`;
