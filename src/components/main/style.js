import styled from "styled-components"

export const Container = styled.main`
width:100;
height:82vh;
display:flex;
justify-content:center;
align-items: center;
color:white;


section{
    display:flex;
    @media (max-width: 975px){
        display:block;   
    }
}
div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    width:500px;
    height:400px;
    @media (max-width: 975px){
        height:300px;
        width:300px;
    }
    
    p,h2{
        font-size:40px;
        font-weight: 700;  
        @media (max-width: 975px){
            font-size:25px;
        }
    }
    h1{
        font-size:46px;
        font-weight: 700;
        @media (max-width: 975px){
            font-size:30px;
        }  
    }
}
span{
  border-radius:25px;
  color:#FFBF00;
}


`
export const ImgPhoto = styled.img`
    width:335px;
    border-radius:50%;
    //transform: rotate(-10deg);
    //border:5px solid white;
    box-shadow: rgba(255, 255, 255, 0.4) 0px 5px 15px;
    @media (max-width: 975px){
        width:300px;
    }
`
export const imgMage = styled.img`
width:100px;
` 
