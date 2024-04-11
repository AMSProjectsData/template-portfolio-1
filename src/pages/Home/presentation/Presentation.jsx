import style from './Presentation.module.css'

import banner from '../../../img/Image.png'

export function Presentation() {
  return (
    <div className={style.presentation_content}>
        <div className={style.presentation_title}>
            <h1>Título que destaca a Proposta de Valor</h1>
            <span>Descreva exatamente o que seu produto ou serviço faz e como ele melhora a vida do cliente. Evite usar palavras ou frases prolixas.</span>
        </div>
        <img src={banner} alt="" className={style.presentation_img} />
    </div>
  )
}
