import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiGit } from 'react-icons/di';
import { SiJavascript,SiRedux,SiJest} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

export const skills =[
    {id:1, name:"HTML", icon:<AiFillHtml5/>, description:"Conhecimento avançado. Tags semânticas, formulários, botões e etc."},
    {id:2, name:"CSS", icon:<DiCss3/>, description:"Conhecimento avançado. Flexbox, Grid, design responsivo e etc."},
    {id:3, name:"Javascript", icon:<SiJavascript/>, description:"Conhecimento avançado. Funções, variáveis, operadores, consumo de API's e etc."},
    {id:4, name:"Jest", icon:<SiJest/>, description:"Conhecimento básico. Realização de teste unitários com o framework."},
    {id:5, name:"React", icon:<FaReact/>, description:"Conhecimento avançado. Componentes, props, hook de estado e efeito, rotas, context API e etc."},
    {id:6, name:"Redux", icon:<SiRedux/>, description:"Conhecimento intermediário. Store, Reducer, actions, Redux Toolkits, Redux Thunk e etc."},
    {id:7, name:"Git", icon:<DiGit/>, description:"Conhecimento intermediário. Versionamento via terminal. Prática em criar e clonar reposotórios, uso de comandos no terminal."},
    {id:8, name:"Github", icon:<AiFillGithub/>, description:"Conhecimento intermediário. Conhecimento em criação e configuração de repositórios, Github Pages e etc."},
]