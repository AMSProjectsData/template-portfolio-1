import style from './Enterprise_carrossel.module.css'

import relume from './img/relume.png'
import webflow from './img/webflow.png'

export function EnterpriseCarrossel() {
  return(
    <div className={style.carrossel_content}>
        <span>Com a confiança das melhores empresas do mundo [prova social para construir credibilidade]</span>

        <div className={style.carrossel_infinty}>
          <div className={style.carrossel_infinty_track}>
            <img className={style.track} src={relume} alt="" />
            <img  className={style.track}src={webflow} alt="" />
            <img className={style.track} src={relume} alt="" />
            <img  className={style.track}src={webflow} alt="" />
            <img className={style.track} src={relume} alt="" />
            <img  className={style.track}src={webflow} alt="" />
            <img className={style.track} src={relume} alt="" />
            <img  className={style.track}src={webflow} alt="" />
            <img className={style.track} src={relume} alt="" />
            <img  className={style.track}src={webflow} alt="" />
            <img className={style.track} src={relume} alt="" />
            <img  className={style.track}src={webflow} alt="" />
            <img className={style.track} src={relume} alt="" />
            <img  className={style.track}src={webflow} alt="" />
            <img className={style.track} src={relume} alt="" />
            <img  className={style.track}src={webflow} alt="" />
            <img className={style.track} src={relume} alt="" />
            
          </div>

        </div>
    </div>
  )
}
