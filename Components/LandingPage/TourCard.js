import { TourCardMain, TourCardWrapper, Picture, NameHolder, hoverDiv } from './../../styles/FeaturedTures.module.scss';
import { motion } from 'framer-motion';
import  Flip  from 'react-reveal/Flip'
import { useState } from 'react';


const TourCard = (props) => {

    const [hover, setHover] = useState(false)

    return (
        <Flip left>
            <div onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false)} } className={TourCardWrapper}>
            <div className={TourCardMain}>
                <img width="100%" className={Picture} src={props.link} />
                    <div className={NameHolder}><b>{props.ime}</b></div>
                    <motion.div className={hoverDiv} animate={hover ? { opacity:1 } : {opacity:0}}>Explore</motion.div>
                </div>

            </div>
            </Flip>
        );
}



export default TourCard;