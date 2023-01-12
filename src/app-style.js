import { createGlobalStyle } from 'styled-components';
import Pc from "./components/img/pc.gif"

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
      background-image:url(${Pc});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-repeat: repeat;
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

