import { useEffect, useState } from 'react';
import style from './Header.module.css'

import { FaBars } from "react-icons/fa6";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";

export function Header() {

    const [sandToogle, setSandToogle] = useState(null);
    const [optionToogle, setOptionToogle] = useState(false);
    const [sty, setSty] = useState(`${style.aux} ${style.header_nav}`);

    const toogleSideBar = () => {
        setSandToogle(!sandToogle);
    }

    const handleOptions = () => {
        setOptionToogle(!optionToogle);
    }

    useEffect(()=>{
        console.log(sandToogle);
        if(sandToogle === true){
            setSty( `${style.side_bar_out} ${style.header_nav}`);
        }
    }, [sandToogle]);

  return (
    <div className={style.header_content}>
        <div className={style.header_title}>
            <h1>Logo</h1>
        </div>
        
        <div  className={ sandToogle ? `${style.side_bar_in} ${style.header_nav}` :  sty }>
            <IoMdClose  className={sandToogle ? style.header_sandw_svg_close : style.display_none  } onClick={toogleSideBar} />  

            <div className={sandToogle ? '' : style.display_none}>
                <h1>Logo</h1>
            </div>
            <a href="" className={style.links}> <span>Opção 1</span></a>
            <a href="" className={style.links}><span>Opção 1</span></a>
            <nav onClick={() => setOptionToogle(!optionToogle)} className={ optionToogle ? `${style.aux_option} ${style.links}` : style.links }>
                <div>
                    <span>Opções</span> 
                    <IoIosArrowDown className={optionToogle ?  style.rotate: ''} /> 

                </div>
                {/* className={optionToogle ?  style.rotate: ''}  */}

                <nav className={optionToogle ?  style.options : style.display_none}>
                    <a href="">link 1</a>
                    <a href="">link 2</a>
                    <a href="">link 3</a>

                </nav>
            </nav>
        </div>

        <div className={style.header_sandw}>
            <FaBars className={ style.header_sandw_svg } onClick={toogleSideBar} />
        </div>

        <div className={ sandToogle ? style.header_totaly : style.display_none} onClick={() => toogleSideBar(false)}>

        </div>
    </div>
  )
}
