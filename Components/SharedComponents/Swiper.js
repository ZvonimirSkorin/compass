
import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from 'next/image'
import compassV1 from '../../public/compassV1.jpg';
import compassV2 from '../../public/compassV2.jpg';
import compassV3 from '../../public/compassV3.jpg';
import compassV4 from '../../public/compassV4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import { mySwiper, swiperSlide, swiperSlideSideBoxL, swiperSlideSideBoxR, description, h1, descriptionText,SwipPic } 
from './../../styles/styles.module.scss'


// import Swiper core and required modules
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';
import { motion } from "framer-motion";


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);


export default function Carousel(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    let element = useRef(null)
    const { ref, inView, entry } = useInView();
    useEffect(()=>{
        let inter = setInterval(()=>{
            const el = document.getElementById("SwiperMain")
            if(el!=null) 
        {                 

            props.set_height(el.getBoundingClientRect().height);
            clearInterval(inter);
        }
        },100)
            window.addEventListener('resize', ()=>{
                let interV = setInterval(()=>{
                    const el = document.getElementById("SwiperMain")
                    if(el!=null) 
{                    props.set_height(el.getBoundingClientRect().height);
                    clearInterval(interV);
                }
                },100)
            })
            
       
        
    },[])
    const descriptionD = (title, text, active) => {

        return (
            <motion.div
                animate={active ? { opacity: [0, 0.3, 1], x: [-200, 0] } : { opacity: 0 }}
                ref={ref} className={description}>

                <span> <h1 className={h1}>{title}</h1></span>
                <section className={descriptionText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper
                    vehicula porttitor. Curabitur vel metus vitae eros aliquam viverra. Cras vestibulum fermentum molestie.
                    Phasellus sit amet urna et elit accumsan cursus nec a lectus. Aliquam ut turpis ut tortor sodales porttitor.
                    Donec eu elit scelerisque, varius dui at, varius mi. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed fermentum molestie sollicitudin.
                </section>

            </motion.div>)
    }
    
    return (

        <Swiper navigation={true} autoplay={{
            "delay": 3500,
            "disableOnInteraction": true,
            "stopOnLastSlide":true}}
           pagination={{
                "clickable": true
            }}
            id="SwiperMain"
            className={mySwiper}   onActiveIndexChange={(e) => { setActiveIndex(e.activeIndex) }} style={{}}>
           

            <SwiperSlide style={{ width: "100vw", maxHeight: "90vh", position: "relative" }} className={swiperSlide}>
                <div className={swiperSlideSideBoxL} />
                <div className={swiperSlideSideBoxR} />
                {descriptionD("Switzerland", "", activeIndex===0)}
                <img onLoad={()=>{
                       const el = document.getElementById("SwiperMain")
                       if(el!=null) {

                   props.set_height(el.getBoundingClientRect().height);
                }
                   
                }} className={SwipPic} src={"/compassV3.jpg"} alt="Picture of the author"  />
            </SwiperSlide>
            
            <SwiperSlide style={{ width: "100vw", maxHeight: "90vh",  position: "relative" }} className={swiperSlide}>
                <div className={swiperSlideSideBoxL} />
                <div className={swiperSlideSideBoxR} />
                {descriptionD("Austria", "", activeIndex===1)}
                <img  className={SwipPic} src={"/compassV1.jpg"} alt="Picture of the author"  />
            </SwiperSlide>
            <SwiperSlide style={{ width: "100vw", maxHeight: "90vh",  position: "relative" }} className={swiperSlide}>
                <div className={swiperSlideSideBoxL} />
                <div className={swiperSlideSideBoxR} />
                {descriptionD("Switzerland", "", activeIndex===2)}
                <img  className={SwipPic} src={"/compassV3.jpg"} alt="Picture of the author"  />
            </SwiperSlide>
            
            <SwiperSlide style={{ width: "100vw", maxHeight: "90vh",  position: "relative" }} className={swiperSlide}>
                <div className={swiperSlideSideBoxL} />
                <div className={swiperSlideSideBoxR} />
                {descriptionD("Austria", "", activeIndex===3)}
                <img  className={SwipPic} src={"/compassV1.jpg"} alt="Picture of the author"  />
            </SwiperSlide>
            
               
            </Swiper>
       
    )

    function fck(){
        
        
    }
}

