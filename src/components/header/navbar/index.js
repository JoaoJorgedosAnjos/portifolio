import * as S from "./style"
import { GiSpellBook, GiLaptop, GiMagicPortal,GiCrystalBall, GiWizardStaff} from 'react-icons/gi';
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage} from 'react-icons/ai';
import { GrContact } from 'react-icons/gr';

export const Navbar = ({open}) => {
    return (
        <S.Ul open={open}>
            <li><AiOutlineHome/> Home</li> 
            <li><AiOutlineUser/> Sobre</li> 
            <li><GiSpellBook/> Habilidades</li>
            <li><GiLaptop/> Projetos</li>
            <li><AiOutlineMessage/> Contato</li>
        </S.Ul>
    )
}

