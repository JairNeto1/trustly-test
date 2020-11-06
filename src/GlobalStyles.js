import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  :root{
    --primary-color: #6B8067;
    --secondary-color: #F7F7F7;
  }


  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Open Sans', sans-serif;
    background-color: #FFF;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style-type: none;
  }
`;
