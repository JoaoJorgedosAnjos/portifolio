import * as S from "./style"
import Pc from "../img/pc.gif"

export const Main = () => {
    return (
        <S.Container>
            <div>
                <img src={Pc} alt="gif de uma sala com notebook em cima da mesa com vista para uma janela" />
            </div>
            <section>
                <h1>Olá! <span>Seja bem-vindo ao meu portifólio.</span> Me chamo João Jorge, sou desenvolvedor Front-end em formação.</h1>
                <p>Sempre fui muito interessado e curioso com a área de tecnologia. Gosto muito de pesquisar e entender sobre como elas funcionam. Tenho certeza de que posso contribuir de várias formas com qualquer time por ser bastante focado, esforçado e também porque sou muito responsável com meu trabalho, ainda mais quando estou trabalhando em equipe. </p>
                <p>Estou sempre estudando e colocando novos projetos em prática, como também revisando conteúdos que vi há mais tempo. Busco me atualizar, tanto na parte dos estudos e prática, quanto na participação de comunidades de tecnologia. Ouvindo podcast, participando de comunidades em diversas redes sociais. Tento contribuir com o que sei e ficar antenado nas novidades. Atualmente estou cursando <span>análise e desenvolvimento de sistema</span>.</p>
                <p>Além de ser desenvolvedor também sou músico, guitarrista, violonista e professor. Sou apaixonado por jogos de videogames, animes e mangas, e tecnologias em geral.</p>
                <a href="https://drive.google.com/file/d/1rdqq6_ZiT2Gst1_9StNtPunWTENC0dkF/view?usp=sharing" target="_blank" rel="noreferrer">Veja meu CV</a>
            </section>
        </S.Container>
    )
}