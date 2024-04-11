import { useState } from 'react';
import style from './FAQ.module.css'

import { IoMdClose } from "react-icons/io";


export default function FAQ() {
  return (
    <div className={style.FAQ_content}>

      <div className={style.FAQ_title}>
        <h1>PERGUNTAS FREQUENTES</h1>
        <span>
          Perguntas frequentes ordenadas por popularidade. Lembre-se que caso o visitante não tenha se comprometido com o call to action, 
          ele ainda poderá ter dúvidas (dúvidas) que poderão ser respondidas.
        </span>

      </div>


      <div className={style.aks_content}>
        <Ask ask='"O texto da pergunta vai aqui"?' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere porro pariatur nostrum, a veniam exercitationem consequuntur numquam fuga' />
        <Ask ask='"O texto da pergunta vai aqui"?' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere porro pariatur nostrum, a veniam exercitationem consequuntur numquam fuga' />
        <Ask ask='"O texto da pergunta vai aqui"?' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere porro pariatur nostrum, a veniam exercitationem consequuntur numquam fuga' />
        <Ask ask='"O texto da pergunta vai aqui"?' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere porro pariatur nostrum, a veniam exercitationem consequuntur numquam fuga' />
      </div>
    </div>
  )
}


const Ask = ({ask, content}) => {
  const [arrow, setArrow] = useState(false);

  const handlerAskMore = () => {
      setArrow(!arrow);
  }
  return (
      <div className={style.FAQ_ask} onClick={handlerAskMore}>
          <span>{ask}</span>
          <IoMdClose className={arrow ? style.rotateSvg : style.defaltuRotate}/>
      
          <div className={style.FAQ_response}>
              {arrow ? 
                  <span>{content}</span> 
                  : ''    
              }
          </div>
          
      </div>

  )
}