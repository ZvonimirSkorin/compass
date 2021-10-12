import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import styles from './../../styles/Country/BigCard.module.scss';
import { useWindowWidth } from "@react-hook/window-size";



const TourBigCard:React.FC = (props) =>{
    const {ref, inView} = useInView()
    const width = useWindowWidth();
    const [change_tracker, setChange] = useState(false);
    useEffect(()=>{
        if(change_tracker || !inView ) return;
        setChange(true);
    },[inView])
    return(
        <motion.div
        animate={change_tracker?{opacity:1}:{}}
        transition={{duration:1.4}}
        ref={ref}  className={styles.BigCard}>
                <section style={{position:"relative"}} className={styles.BigCardSec1}>
                <img className={styles.BigCardImg} src="/compassV1.jpg"/>
               {
               (width>800)?
               <div style={{position:"absolute",bottom:0,right:0,marginRight:"-2px",marginBottom:"-5px"}} >
                <svg width="201" height="951" viewBox="0 0 201 951" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1C256.605 565.663 253.237 888.526 1 1445.5H200.5L200.5 1H1Z" fill="white" stroke="white"/>
</svg></div>:
<img style={{position:"absolute",bottom:0,right:0,left:0,width:"100%",marginBottom:"-2px"}} src="/bottom_curve.svg"/>
}

               
                </section>
                <section  className={styles.BigCardSec2}>
                    ksjfnksjd
                    </section>
        </motion.div>
    );
}

export default TourBigCard;