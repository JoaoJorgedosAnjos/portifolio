import styled from "styled-components"

export const Ul = styled.ul`

    display:flex;
    flex-flow: row nowrap;
    gap:10px;
    color: #fff;
    
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #191919;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 200px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
          margin-left:15px;
        }
    
    `