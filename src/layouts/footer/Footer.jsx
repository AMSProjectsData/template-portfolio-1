import style from './Footer.module.css'
import { SocialOnly } from './SocialOnly'

import { FaFacebook,FaInstagram, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export function Footer() {
  return (
    <div  className={style.footer_extern}>
        <div className={style.footer_content}>
            <div className={style.contat_wpp}>
                <h1>Logo</h1>
                <p>Entre em contato consco atraves do nosso WhatsApp</p>

                <a href="">
                    Nos chame no WhatsApp <FaWhatsapp />

                </a>
            </div>

            <div className={style.footer_links}>
                <h4>Mais Conteúdos</h4>

                <a href="">Shop</a>
                <a href="">Planos</a>
                <a href="">Blog</a>
            </div>
            
            <div className={style.socials}>
                <h4>Nos siga nas redes sociais</h4>
                <SocialOnly icon={<FaFacebook />} name="Facebook" link=""/>
                <SocialOnly icon={<FaInstagram />} name="Instagram" link=""/>
                <SocialOnly icon={<FaXTwitter />} name="X" link=""/>
                <SocialOnly icon={<FaLinkedin />} name="Linkedin" link=""/>
                <SocialOnly icon={<FaYoutube />} name="Youtube" link=""/>
            </div>
        </div>

        <p>&#169; 2024 Akaz. Todos os direitos reservados</p>
    </div>
  )
}
