import * as S from "./style"

export const Navbar = ({open}) => {
    return (
        <S.Ul open={open}>
            <li>Home</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
        </S.Ul>
    )
}

