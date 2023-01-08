import { createGlobalStyle } from 'styled-components';
import  Bc  from "./components/img/bc.png"

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }


  body{
      background-image:url(${Bc});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100vh;
      width: 100%;
      font-family: 'Roboto', sans-serif;
      
  }
  a{
    text-decoration: none;
  }
  li{
    list-style:none;
  }
  `

