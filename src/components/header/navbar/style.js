import styled from "styled-components"

export const Nav = styled.nav`
    display:flex;
    flex-flow: row nowrap;
    gap:30px;
    color: #fff;
    font-size:22px;
    font-weight:700;

    a{
      color:white;
      &:hover{
        transition:0.4s ease-in-out;
        color:#FFBF00; 
      }
    }
    
      
    @media (max-width: 975px) {
        flex-flow: column nowrap;
        background-color: rgba(25,25,25, 0.3);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100%;
        width: 200px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        gap:20px;

        @media (max-width: 680px){
          background-color: rgba(25,25,25, 0.9);
        }
        
        li {
          margin-left:15px;
        }
    
    `