import * as S from "./style"
import { GiSpellBook, GiMagicSwirl, GiMagicPortal,GiCrystalBall, GiWizardStaff} from 'react-icons/gi';

export const Navbar = ({open}) => {
    return (
        <S.Ul open={open}>
            <li><GiMagicPortal/> Home</li> 
            <li><GiSpellBook/> Sobre</li> 
            <li><GiMagicSwirl/> Habilidades</li>
            <li><GiWizardStaff/> Projetos</li>
            <li><GiCrystalBall/> Contato</li>
        </S.Ul>
    )
}

