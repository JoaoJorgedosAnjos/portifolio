import styled from "styled-components"

export const Container = styled.main`
width:100;
height:77.4vh;
display:flex;
justify-content:center;
align-items: center;
color:white;
section{
    display:flex;
}
div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    width:500px;
    height:400px;
    
    p,h2{
        font-size:40px;
        font-weight: 700;  
    }
    h1{
        font-size:46px;
        font-weight: 700;
        
    }
}
span{
  border-radius:25px;
  color:#FFBF00;
  

}

`
export const ImgPhoto =styled.img`

    width:335px;
    border-radius:50%;
    transform: rotate(-10deg);
    border:5px solid white;
    box-shadow: rgba(255, 255, 255, 0.4) 0px 5px 15px;
`
export const imgMage = styled.img`
width:100px;
` 
