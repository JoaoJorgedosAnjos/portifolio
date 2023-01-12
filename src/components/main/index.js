import * as S from "./style"
import Logo from "../img/logo-2.png"
import Photo from "../img/photo.png"

export const Main = () => {
    return (
        <S.Container>
            <section>
                <div>
                    <p>Olá!</p>
                    <S.imgMage src={Logo}/>
                    <h1>Eu sou <span>João Jorge</span></h1>
                    <h2>Desenvolvedor <span>Front-end</span></h2>
                </div>
                <div>
                    <S.ImgPhoto src={Photo} />
                </div>
            </section>

        </S.Container>
    )
}

