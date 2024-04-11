import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaStar,FaRegStar } from "react-icons/fa";
import img from '../../../img/ImageQua.png'

import {Swiper, SwiperSlide} from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';


import style from './Rate.module.css';
import './Rate.css';
import { useEffect, useState } from 'react';


export default function Rate() {

    const [autoWidth, setAutoWidth] = useState(2);
    useEffect(() => {
        if (window.innerWidth < 910) {
            setAutoWidth(1)
        } else{
            setAutoWidth(2)
        }
    }, [])
  return (
    <div className={style.rate_content}>

        <div className={style.rate_title}>
            <h1>Avaliação de clientes</h1>
            <span>Texto falando sobre a avalição dos clientes</span>
        </div>

       <div className={style.rate_width}>

        <Swiper 

            modules={[Navigation, Pagination]}
            slidesPerView={autoWidth}
            spaceBetween={50}
            navigation={true }
            pagination={{clickable: true}}

            className={style.swiper}
        >
            <SwiperSlide>
                <RateContent/>
            </SwiperSlide>
            
            <SwiperSlide>
                <RateContent/>
            </SwiperSlide>

            <SwiperSlide>
                <RateContent/>
            </SwiperSlide>

            <SwiperSlide>
                <RateContent/>
            </SwiperSlide>
            
        </Swiper>
       </div>

        {/* <div className={style.rate}>

            <div className={style.star}>
                <FaStar className={style.star_rate} />
                <FaStar className={style.star_rate}/>
                <FaStar className={style.star_rate}/>
                <FaStar className={style.star_rate}/>
                <FaRegStar />
            </div>

            <span className={style.comment}>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos animi labore ratione, explicabo porro accusamus voluptatem laudantium reiciendis fuga dolorem officiis? Quas itaque modi debitis laborum odio eligendi natus provident.""
            </span>

            <div className={style.profile}>
                <img src={img} alt="" />
                <div className={style.profile_data}>
                    <span>Nome do cliente</span>
                    <span>Posiçaõ, nome da empresa</span>
                </div>
            </div>
        </div> */}
    </div>
  )
}

const RateContent = () => {
    return(
        <div className={style.rate}>

            <div className={style.star}>
                <FaStar className={style.star_rate} />
                <FaStar className={style.star_rate}/>
                <FaStar className={style.star_rate}/>
                <FaStar className={style.star_rate}/>
                <FaRegStar />
            </div>

            <span className={style.comment}>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos animi labore ratione, explicabo porro accusamus voluptatem laudantium reiciendis fuga dolorem officiis? Quas itaque modi debitis laborum odio eligendi natus provident.""
            </span>

            <div className={style.profile}>
                <img src={img} alt="" />
                <div className={style.profile_data}>
                    <span>Nome do cliente</span>
                    <span>Posiçaõ, nome da empresa</span>
                </div>
            </div>
        </div>
    )
}
