import { Burger } from "./burguer"
import Magelogo from "../img/logo-2.png"
import Magelogo2 from "../img/logo-1.png"
import * as S from "./style"

export function Header() {
    return (
        <S.Header>
            <S.Div>
                <img src={Magelogo}/>
            </S.Div>
            <Burger />
        </S.Header>
    )

}