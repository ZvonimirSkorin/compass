
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
import { mySwiper, swiperSlide, swiperSlideSideBoxL, swiperSlideSideBoxR, description2, h1, descriptionText,SwipPic } 
from '../../styles/styles.module.scss'

// import Swiper core and required modules
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';
import { motion } from "framer-motion";


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);


export default function DestinationCarousel(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    let element = useRef(null)
    
    const { ref, inView, entry } = useInView();
    useEffect(()=>{
        let el = element.current;
        if(el!=null)
        props.set_height(element.current.getBoundingClientRect().height)
        window.addEventListener('resize',()=>{
            if(element.current!=null)
            props.set_height(element.current.getBoundingClientRect().height)

        })
    },[])



    const descriptionD = (title, text, active, index) => {
       
        return (
            <motion.div
                animate={active ? { opacity: [0, 0.3, 1], y: [200, 0] } : { opacity: 0 }}
                ref={ref} style={{}} className={description2}>

                <span> <h1 className={h1}>{title}</h1></span>
                <section className="HoverCrnjenje" style={{borderRadius:"0.4rem",maxWidth:"90%",margin:"0 auto"}} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper
                    vehicula porttitor. Curabitur vel metus vitae eros aliquam viverra. Cras vestibulum fermentum molestie.
                    Phasellus sit amet urna et elit accumsan cursus nec a lectus. Aliquam ut turpis ut tortor sodales porttitor.
                    Donec eu elit scelerisque, varius dui at, varius mi. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed fermentum molestie sollicitudin.
                </section>
                <a
                onClick={()=>{go_to(index)}}
                style={{margin:"1rem auto"}} className="GlobalButton">Learn more</a>
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
            className={mySwiper} style={{height:"720px"}}  onActiveIndexChange={(e) => { setActiveIndex(e.activeIndex) }} style={{}}>
           
           

            <SwiperSlide style={{ width: "100vw",height:"inherit", position: "relative" }} className={swiperSlide}>
            <div className={swiperSlideSideBoxL} />

                {descriptionD("Individual travels", "", activeIndex===0, activeIndex)}
                <img ref={element} style={{width:"100%",height:"720px",maxHeight:"90vh",objectFit:"cover"}}  src={"/Cro.jpg"} alt="Picture of the author"  />
            </SwiperSlide>
            <SwiperSlide style={{ width: "100vw", height:"inherit",  position: "relative" }} className={swiperSlide}>
            <div className={swiperSlideSideBoxL} />

                {descriptionD("Bus travels", "", activeIndex===1, activeIndex)}
                <img style={{width:"100%",height:"720px",maxHeight:"90vh",objectFit:"cover"}}  src={"/Waves.jpg"} alt="Picture of the author"  />
            </SwiperSlide>
            <SwiperSlide style={{ width: "100vw", height:"inherit",  position: "relative" }} className={swiperSlide}>
            <div className={swiperSlideSideBoxL} />

                {descriptionD("Group travels", "", activeIndex===2, activeIndex)}
                <img style={{width:"100%",height:"720px",maxHeight:"90vh",objectFit:"cover"}}  className={SwipPic} src={"/Team.jpg"} alt="Picture of the author"  />
            </SwiperSlide>
            
            <SwiperSlide style={{ width: "100vw", height:"inherit",  position: "relative" }} className={swiperSlide}>
            <div className={swiperSlideSideBoxL} />

                {descriptionD("Airplane travels", "", activeIndex===3, activeIndex)}
                <img style={{width:"100%",height:"720px",maxHeight:"90vh",objectFit:"cover"}}  className={SwipPic} src={"/Plane.jpg"} alt="Picture of the author"  />
            </SwiperSlide>
            
            <SwiperSlide style={{ width: "100vw", height:"inherit",  position: "relative" }} className={swiperSlide}>
            <div className={swiperSlideSideBoxL} />

                {descriptionD("Cruises", "", activeIndex===4, activeIndex)}
                <img style={{width:"100%",height:"720px",maxHeight:"90vh",objectFit:"cover"}}  className={SwipPic} src={"/Cruise.jpg"} alt="Picture of the author"  />
            </SwiperSlide>
            
               
            </Swiper>
            
       
    )

    function go_to(index){

        const el = document.getElementById(`Explore${index+1}`);
        if(el==null) return;
        const y=el.getBoundingClientRect().top
        window.scrollTo({
            top: y-100,
            left: 0,
            behavior: "smooth",
          });
        
    }
}

