import styled from "styled-components"

export const Container = styled.main`
height:calc(100vh - 130px);
width:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:25px;
color:#FFBF00;
@media (max-width: 1029px){
    height:100%;
}

h1{
    margin-top:20px;
    font-size:35px;
}
`
export const Skills = styled.section`
color:white;
display:flex;
flex-wrap: wrap;
justify-content:center;
margin:40px 0;
width:1000px;
gap:25px;

@media (max-width: 1029px){
    width:500px;
}
@media (max-width: 485px){
    width:350px;
}

div{
    border: 1px solid blueviolet;
    width:230px;
    height:230px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px;
    background-color: rgba(25, 25, 25, 0.4);
        
}
h2{
    color:#FFBF00;
}

h3{
    font-size:70px;
}
p{
    font-weight:700;
}
`