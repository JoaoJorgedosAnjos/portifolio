import styled from "styled-components"

export const Container = styled.main`
height:82vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;
color:#F5F5F5;
gap:50px;
@media (max-width: 975px){
    height:100%;
    flex-direction: column-reverse;
}

div{
    img{
        width:450px;
        border-radius:15px;
        @media (max-width: 975px){
            width:350px;
        }    
    }
}
section{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:15px;
    width:450px;
    height:630px;
    padding:10px;
    background-color: rgba(25, 25, 25, 0.7);
    border-radius:20px;
      
    @media (max-width: 975px){
        width:350px;
        height:820px;   
    }

    span{
        color:#8A2BE2;
    }

    h1{
        font-size:20px;
    }

    p{
        font-size:18px;
        font-weight:600;
    }

    a{
        display:flex;
        align-items:center;
        justify-content:center;
        width:135px;
        height: 40px;
        border-radius:20px;
        background-color:#F5F5F5;
        color:#8A2BE2;
        font-size:20px;
        font-weight:700;
        &:hover{
            background-color:#FFBF00;
            background-color:#8A2BE2;
            transition:0.5s ease-in-out;
            color:black;
            color:#FFBF00;
            color:white;   
        }
    }
}
`