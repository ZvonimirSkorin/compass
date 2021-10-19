
import React, { useRef, useState, useEffect } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import { mySwiper2, swiperSlide, swiperSlideSideBoxL, swiperSlideSideBoxR, description, h1, descriptionText } from './../../styles/styles.module.scss'


// import Swiper core and required modules
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';
import AnimatedCard from "../SharedComponents/AnimatedCard";
import { useWindowWidth } from '@react-hook/window-size'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);


export default function SearchSwiper(props) {
    const onlyWidth = useWindowWidth()
    const [numoFslides, setNumOfSlides] = useState(4);
    useEffect(() => {
        if (onlyWidth > 1600)
            setNumOfSlides(4)
        else {
            setNumOfSlides(Math.round(onlyWidth/400))
        }
    }, [onlyWidth])
  
    if(props.Data)
    return(
        <Swiper navigation={true}
            
        autoplay={{
        "delay": 3500,
        "disableOnInteraction": true,
        "stopOnLastSlide": true
        }}
        slidesPerView={numoFslides}
        pagination={{
            "clickable": true
        }}
        style={{ maxWidth: "1400px", zIndex:0 }}
        className={mySwiper2} onActiveIndexChange={(e) => { }} >

        
        {   props.Data?.map((val,index)=>
            <SwiperSlide key={index} style={{ maxHeight: "90vh", display: "inline-block", backgroundColor: "transparent" }} className={swiperSlide}>
            <AnimatedCard ime={val.Name} link={val.Link} />
        </SwiperSlide>
        )
            }
      
         
      

        


    </Swiper>
    );

    return (

        <Swiper navigation={true}
            
            autoplay={{
            "delay": 3500,
            "disableOnInteraction": true,
            "stopOnLastSlide": true
            }}
            slidesPerView={numoFslides}
            pagination={{
                "clickable": true
            }}
            style={{ maxWidth: "1400px", zIndex:0 }}
            className={mySwiper2} onActiveIndexChange={(e) => { }} >

            
            <SwiperSlide style={{ maxHeight: "90vh", display: "inline-block", backgroundColor: "transparent" }} className={swiperSlide}>
                <AnimatedCard ime="Slovenija" link="/compassV3.jpg" />
            </SwiperSlide>
          
             <SwiperSlide style={{ maxHeight: "90vh",backgroundColor:"transparent", display: "inline-block" }} className={swiperSlide}>
                <AnimatedCard ime="Slovenija" link="/compassV3.jpg" />
            </SwiperSlide>
          
             <SwiperSlide style={{ maxHeight: "90vh",backgroundColor:"transparent", display: "inline-block" }} className={swiperSlide}>
                <AnimatedCard ime="Slovenija" link="/compassV3.jpg" />
            </SwiperSlide>
          
            <SwiperSlide style={{ maxHeight: "90vh",backgroundColor:"transparent", display: "inline" }} className={swiperSlide}>
                <AnimatedCard ime="Slovenija" link="/compassV3.jpg" />
            </SwiperSlide>
          
             <SwiperSlide style={{ maxHeight: "90vh",backgroundColor:"transparent", display: "inline" }} className={swiperSlide}>
                <AnimatedCard ime="Slovenija" link="/compassV3.jpg" />
            </SwiperSlide>
          
             <SwiperSlide style={{ maxHeight: "90vh",backgroundColor:"transparent", display: "inline" }} className={swiperSlide}>
                <AnimatedCard ime="Slovenija" link="/compassV3.jpg" />
            </SwiperSlide>
          

            


        </Swiper>

    )


}

