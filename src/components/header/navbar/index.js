import * as S from "./style"
import { GiSpellBook, GiLaptop} from 'react-icons/gi';
import { AiOutlineHome, AiOutlineUser} from 'react-icons/ai';

export const Navbar = ({open}) => {
    return (
        <S.Ul open={open}>
            <li><AiOutlineHome/> Home</li> 
            <li><AiOutlineUser/> Sobre</li> 
            <li><GiSpellBook/> Habilidades</li>
            <li><GiLaptop/> Projetos</li>
        </S.Ul>
    )
}

