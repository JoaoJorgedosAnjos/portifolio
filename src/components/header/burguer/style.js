import styled from "styled-components";

export const StyledBurger = styled.div`
width:2rem;
height:2rem;
position: fixed;
top:15px;
right:20px;
display:block;
justify-content:space-around;
flex-flow:column nowrap;
z-index: 20;
display: none;

@media (max-width: 825px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

div{
    width:2rem;
    height:4px;
    background-color:${({open})=> open ? "#ccc" : "#333"};
    border-radius:10px;
    transform-origin:1px;
    transition: 0.6s ease-in-out;
    position: absolute;

    &:nth-child(1){
        transform:${({open}) => open ? "rotate(45deg)" : "rotate(0)" };
        top:${({open}) => open ? "0px" : "0px"};
    }
    &:nth-child(2){
        transform:${({open}) => open ? "rotate(45deg)": "rotate(0)"};
         top:${({open}) => open ? "0px" : "10px"};
        
    }
    &:nth-child(3){
        transform:${({open}) => open ? "rotate(-45deg)" : "rotate(0)" };
        top:${({open}) => open ? "20px" : "20px"};
    }
}
`