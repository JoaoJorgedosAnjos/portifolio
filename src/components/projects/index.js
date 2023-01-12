import { Projects } from "./projects"
import * as S from "./style"

export const Main = ()=>{
    return(
        <S.Container>
            <h1>Meus projetos</h1>
            <Projects/>
        </S.Container>
    )
}