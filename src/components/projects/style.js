import styled from "styled-components"

export const Container = styled.main`
width:100%;
height:100%;
color:white;
display:flex;
flex-direction:column;
align-items: center;
gap:25px;

h1{
    text-align:center;
    color:#FFBF00;
    font-size:35px;
    margin-top:20px;
}
`

export const Section = styled.section`
display:flex;
flex-wrap:wrap;
height:100%;
width:1200px;
gap:45px;
justify-content: center;
margin:40px 0;


@media (max-width: 1200px){
    width:100%;
}
div{
    display:flex;
    flex-direction:column;
    align-items: center;
    border:1px solid blueviolet;
    height:520px;
    width:320px;
    padding:10px;
    background-color: rgba(25, 25, 25, 0.4);
    gap:10px;
}
nav{
    display:flex;
    align-items:end;
    height:100%;
}
ul{
    display:flex;
    gap:85px;

}
a{
    color:white;
    font-size:22px;
    &:hover{
        color:#FFBF00;
        transition:0.5s ease-in-out;
    }
}
img{
    width:300px;
}
h2,span{
    color:#FFBF00;
}
p{
    font-weight:700;
}
`