import * as S from "./style"
import { AiFillLinkedin, AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export const Footer = () => {
    return (
        <S.Container>
            <h2>me envie uma mensagem!</h2>
            <ul>
               <li><a href="https://www.linkedin.com/in/joaojorgedosanjos/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a></li>
               <li><a href="https://github.com/JoaoJorgedosAnjos" target="_blank" rel="noreferrer"><AiFillGithub/></a></li>
               <li><a href="mailto:joaojorgedosanjos@gmail.com" target="_blank" rel="noreferrer"><SiGmail/></a>
               </li>   
               <li><a href="https://wa.me/61998268612" target="_blank" rel="noreferrer"><AiOutlineWhatsApp/></a></li>
               <li><a href="https://telegram.me/joaojorgedosanjos" target="_blank" rel="noreferrer"><BsTelegram/></a></li>
            </ul>

        </S.Container>
    )
}