import styled from "styled-components"

export const Container = styled.footer`
width:100%;
height:100%;
color:#F8F8FF;
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
gap:10px;

h2{
    margin-top: -10px;
}

ul{
    display:flex;
    gap:25px;  
}
li{
    display:flex;
    justify-content:center;
    align-items: center;
    font-size:30px;
    
a{
    text-decoration: none;
    color: #FFF;
    &:hover{
        transition:0.4s ease-in-out;
        color:#FFBF00;    
        }
      }
}

`