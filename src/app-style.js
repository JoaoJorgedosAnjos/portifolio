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
      height: 100vh;
      width: 100%;
      font-family: 'Roboto', sans-serif;  
      @media (max-width: 1025px){
       background-repeat: repeat;
    }   
      
  }
  a{
    text-decoration: none;
  }
  li{
    list-style:none;
  }
  `

