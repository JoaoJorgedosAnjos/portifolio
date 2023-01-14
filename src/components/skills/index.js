import * as S from "./style"
import { skills } from "./skills-list"

export const Main = () => {
    return (
        <S.Container>
            <h1>Habilidades</h1>
            <S.Skills>
                {skills.map((skill)=>{
                    return(
                        <div key={skill.id}>
                            <h3>{skill.icon}</h3>
                            <h2>{skill.name}</h2>
                            <p>{skill.description}</p>
                        </div>
                    )
                })}
            </S.Skills>
        </S.Container>
    )
}