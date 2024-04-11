import style from './Costumers.module.css'

import img from '../../../img/Image.png'

export function Costumers() {
  return (
    <div className={style.costumers_content}>
        <div className={style.costumers_title}>
            <span>Clientes</span>
            <h1>Título curto sobre a quem se destina o produto ou serviço</h1>
        </div>

        <div className={style.costumers_group}>
            <GroupCostumers 
                title='Grupo 1' 
                content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro illum eaque magni animi eum hic quod quaerat fugit quas, obcaecati'
                img={img}
            />
            <GroupCostumers 
                title='Grupo 2' 
                content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro illum eaque magni animi eum hic quod quaerat fugit quas, obcaecati'
                img={img}
            />
            <GroupCostumers 
                title='Grupo 3' 
                content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro illum eaque magni animi eum hic quod quaerat fugit quas, obcaecati'
                img={img}
            />
        </div>
    </div>
  )
}


const GroupCostumers = ({title, content, img}) => {
    return(
        <div className={style.group}>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <span>{content}</span>
        </div>
    )
}