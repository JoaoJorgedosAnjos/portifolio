import styled from "styled-components"

export const Ul = styled.ul`
    display:flex;
    flex-flow: row nowrap;
    gap:20px;
    color: #fff;
    font-size:22px;
    font-weight:700;
    

    li{
      padding:10px;
      border-radius:15px;
      position:relative;

      &&:after{
        content:"",
        position:absolute;
        top:0;
        left:0;
        height:10px;
        width:100%;
        background-color:red;
      }
    

      }

    
    @media (max-width: 825px) {
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
        
        li {
          margin-left:15px;
        }
    
    `