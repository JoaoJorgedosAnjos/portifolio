import * as S from "./style"
import { AiFillLinkedin, AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export const Footer = () => {
    return (
        <S.Container>
            <h2>me envie uma mensagem!</h2>
            <ul>
               <li><AiFillLinkedin/></li>
               <li><AiFillGithub/></li>
               <li><SiGmail/></li>   
               <li><AiOutlineWhatsApp/></li>
               <li><BsTelegram/></li>
            </ul>

        </S.Container>
    )
}