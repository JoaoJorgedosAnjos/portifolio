import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiGit } from 'react-icons/di';
import { SiJavascript,SiRedux,SiJest} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import * as S from "./style"

export const Skill =()=>{
    return(
        <S.Skills>
            <div>
                <h3><AiFillHtml5/></h3>
                <h2>HTML</h2>
                <p>Conhecimento avançado. Tags semânticas, formulários, botões e etc.</p>
            </div>
            <div>
                <h3><DiCss3/></h3>
                <h2>CSS</h2>
                <p>Conhecimento avançado. Flexbox, Grid, design responsivo e etc.</p>
            </div>
            <div>
                <h3><SiJavascript/></h3>
                <h2>Javascript</h2>
                <p>Conhecimento avançado. Funções, variáveis, operadores, consumo de API's e etc.</p>
            </div>
            <div>
                <h3><SiJest/></h3>
                <h2>Jest</h2>
                <p>Conhecimento básico. Realização de teste unitários com o framework.</p>
            </div>
            <div>
                <h3><FaReact/></h3>
                <h2>React</h2>
                <p>Conhecimento avançado. Componentes, props, hook de estado e efeito, rotas, context API e etc.</p>
            </div>
            <div>
                <h3><SiRedux/></h3>
                <h2>Redux</h2>
                <p>Conhecimento intermediário. Store, Reducer, actions, Redux Toolkits, Redux Thunk e etc.</p>
            </div>
            <div>
                <h3><DiGit/></h3>
                <h2>Git</h2>
                <p>Conhecimento intermediário. Versionamento via terminal. Prática em criar e clonar reposotórios, uso de comandos no terminal.</p>
            </div>
            <div>
                <h3><AiFillGithub/></h3>
                <h2>Github</h2>
                <p>Conhecimento intermediário. Conhecimento em criação e configuração de repositórios, Github Pages e etc.</p>
            </div>
        </S.Skills>
    )
}