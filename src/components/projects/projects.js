import * as S from "./style"
import Project1 from "../img/projeto-1.gif"
import Project2 from "../img/projeto-2.gif"
import Project3 from "../img/projeto-3.gif"
import Project4 from "../img/projeto-4.gif"
import Project5 from "../img/projeto-5.gif"
import { AiFillGithub } from 'react-icons/ai';
import { BsGlobe2 } from 'react-icons/bs';

export const Projects = () => {
    return (
        <S.Section>
            <div>
                <img src={Project2} alt="gif mostrando a interface do projeto SPA IBGE API" />
                <h2>SPA IBGE API</h2>
                <p>Aplicação em SPA que consume a API do IBGE. Tem a finalidade de fazer busca
                    de estados e municípios através de um select, e após selecionar ou digitar os
                    dois campos vai exibir na tela as informações dos distritos, da mesorregião, microrregião, UF e Região. Aplicação utiliza <span>Redux, React, Javascript, Styled
                        Components, Redux toolkit, Redux thunk, Fetch API</span>.</p>
                <nav>
                    <ul>
                        <li><a href="https://github.com/JoaoJorgedosAnjos/spa-ibge-api" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
                        <li><a href="https://spa-ibge-api.vercel.app/" target="_blank" rel="noreferrer"><BsGlobe2 /></a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <img src={Project1} alt="gif mostrando a interface do projeto Poke API" />
                <h2>Poke API</h2>
                <p>A aplicação em SPA que tem a finalidade de exibir uma lista de 10 Pokémon
                    por página, com sua imagem, número e nome, com um total de 1124 Pokémon.
                    Ao clicar em algum Pokémon da lista, o usuário será redirecionado para uma
                    página com a arte oficial do Pokémon, e outras informações como o tipo,
                    habilidades e movimentos.Aplicação utiliza <span>React, Fetch API, Context
                        API, Styled Components</span>.</p>
                <nav>
                    <ul>
                        <li><a href="https://github.com/JoaoJorgedosAnjos/pokedex-api" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
                        <li><a href="https://pokedex-api-rho.vercel.app/" target="_blank" rel="noreferrer"><BsGlobe2 /></a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <img src={Project3} alt="gif mostrando a interface do projeto GitHub API" />
                <h2>GitHub API</h2>
                <p>Simulação de novas funções implantadas no projetos. A aplicação retorna nome
                    do usuário, foto do peril, número de seguidores e de pessoas que está seguindo, eventos,
                    quantidades de forks e várias outras informações da Github API. Tecnologias
                    utlizadas no projeto <span>HTML, CSS, Javascript, Fetch API</span>.</p>
                <nav>
                    <ul>
                        <li><a href="https://github.com/JoaoJorgedosAnjos/fetch-github-api" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
                        <li><a href="https://joaojorgedosanjos.github.io/fetch-github-api/" target="_blank" rel="noreferrer"><BsGlobe2 /></a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <img src={Project4} alt="gif mostrando a interface do projeto Mini Portifólio" />
                <h2>Mini Portifólio</h2>
                <p>O mini portifólio foi um projeto criado para mostrar algumas informações do usuário como redes sociais e uma breve apresentação sobre o mesmo, descrevendo curiosidades e informações pessoais. O projeto foi criado durante a Dev Week, projeto do canal Dev em Dobro. Tecnologias utlizadas no projeto <span>HTML, CSS, Javascript</span>.</p>
                <nav>
                    <ul>
                        <li><a href="https://github.com/JoaoJorgedosAnjos/mini-portifolio" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
                        <li><a href="https://joaojorgedosanjos.github.io/mini-portifolio/" target="_blank" rel="noreferrer"><BsGlobe2 /></a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <img src={Project5} alt="" />
                <h2>News Homepage</h2>
                <p>Projeto do Frontend Mentor. O desafio consiste em construir um website homepage que seja o mais parecido possível com o design proposto.Tecnologias utlizadas no projeto <span>HTML, CSS</span>.</p>
                <nav>
                    <ul>
                        <li><a href="https://github.com/JoaoJorgedosAnjos/news-homepage" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
                        <li><a href="https://joaojorgedosanjos.github.io/news-homepage/" target="_blank" rel="noreferrer"><BsGlobe2 /></a></li>
                    </ul>
                </nav>
            </div>
        </S.Section>
    )
}