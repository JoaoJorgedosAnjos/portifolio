import * as S from "./style"
import { GiSpellBook, GiLaptop} from 'react-icons/gi';
import { AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import { Link } from "react-router-dom";

export const Navbar = ({open}) => {
    return (
        <S.Nav open={open}>
            <Link to="/"><AiOutlineHome/> Início</Link> 
            <Link to='/sobre'><AiOutlineUser/> Sobre</Link>
            <Link to="/habilidades"><GiSpellBook/> Habilidades</Link>
            <Link to='/projetos'><GiLaptop/> Projetos</Link>
        </S.Nav>
    )
}

