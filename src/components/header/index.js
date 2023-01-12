import { Burger } from "./burguer"
import * as S from "./style"

export function Header() {
    return (
        <S.Header>
            <S.Div>
                <h2>JJ.</h2>
            </S.Div>
            <Burger />
        </S.Header>
    )
}