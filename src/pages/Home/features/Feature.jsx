import style from './Feature.module.css'

import img from '../../../img/ImageQua.png'

export function Feature() {
  return (
    <div className={style.feature_content}>
        <div className={style.feature_display_1}>
            <FeatureText 
                title='Descreva funcionalidade 1' 
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quod repellendus suscipit velit similique illo corrupti '
            />
            <FeatureImg/>
        </div>
        <div className={style.feature_display_2}>
            <FeatureImg/>
            <FeatureText 
                title='Descreva funcionalidade 2' 
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quod repellendus suscipit velit similique illo corrupti '
            />
        </div>
        <div className={style.feature_display_1}>
            <FeatureText 
                title='Descreva funcionalidade 3' 
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quod repellendus suscipit velit similique illo corrupti '
            />
            <FeatureImg/>
        </div>
    
    </div>
  )
}

const FeatureText = ({title, content, benefit}) => {
    return(
        <div className={style.feature_text}>
            <h1>{title}</h1>
            <span>{content}</span>
            <div className={style.benefit}>
                <div></div> <span>Beneficio 1 dessa funcionalidade</span>
                <div></div> <span>Beneficio 1 dessa funcionalidade</span>
                <div></div> <span>Beneficio 1 dessa funcionalidade</span>
            </div>
        </div>
    )
}


const FeatureImg = () => {
    return(
        <div >
            <img src={img} alt="" className={style.feature_img} />
        </div>
    )
}