import style from './CallToAction.module.css'

import { FaWhatsapp } from "react-icons/fa";

export default function CallToAction() {
  return (
    <div className={style.call_to_action_content}>
        <div className={style.call_to_action_text}>
            <h1>Call to action que estimula o visitante a experimentar seu produto</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo nostrum, officiis molestias natus odio. Veritatis cupiditate eum minima quam unde pariatur adipisci commodi </span>

            <div className={style.call_to_action_buttons}>
                <label>Entre em contato atrves do WhatsApp</label>
                <a href="https://wa.me/5591991545655" className={style.call_to_action_buttons}>
                  <button className={style.call_to_action_buttons_display}>
                    <span>WahtsApp</span>  
                    <FaWhatsapp />
                  </button>
                </a>
            </div>
        </div>
        
    </div>
  )
}
