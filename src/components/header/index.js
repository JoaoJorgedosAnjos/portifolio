import { Burger } from "./burguer"
import { FaHatWizard} from 'react-icons/fa';
import * as S from "./style"

export function Header() {
    return (
        <S.Header>
            <S.Div>
                <FaHatWizard/>
            </S.Div>
            <Burger />
        </S.Header>
    )

}