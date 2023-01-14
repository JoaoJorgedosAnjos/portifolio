import { projects } from "./projects"
import * as S from "./style"

export const Main = () => {
    return (
        <>
            <S.Container>
                <h1>Meus projetos</h1>
                <S.Section>
                    {projects.map((project)=>{
                        return(
                            <div key={project.id}>
                                <img src={project.img} alt="gif mostrando a interface do projeto"/>
                                <h2>{project.name}</h2>
                                <p>{project.description} <span>{project.technologies}</span>.</p>
                                <nav>
                                    <ul>
                                        <li><a href={project.link.github}target="_blank" rel="noreferrer">{project.icon.github}</a></li>
                                        <li><a href={project.link.page}target="_blank" rel="noreferrer">{project.icon.page}</a></li>
                                    </ul>
                                </nav>
                            </div>
                        )
                    })}
                </S.Section>
            </S.Container>
    
        </>
    )
}