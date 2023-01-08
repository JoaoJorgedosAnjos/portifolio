import styled from "styled-components"

export const Container = styled.footer`
width:100%;
height:118px;
color:white;
display:flex;
justify-content:center;
align-items: center;
flex-direction:column;
//background-color:red;
gap:10px;
//margin-top:-10px;

h2{
    margin-top: -10px;
}

ul{
    display:flex;
    gap:20px;
    
    
    
}
li{
    display:flex;
    justify-content:center;
    align-items: center;
    width:45px;
    height:45px;
    font-size:25px;
    border-radius:50%;
    
    &:hover{
        border: 1px solid;
        cursor:pointer;
        transition:0.4s ease-in-out;
        color:#FFBF00;

    }
}

`