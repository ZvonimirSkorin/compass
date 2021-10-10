import styles from './../../styles/FeaturedTures.module.scss';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


const AnimatedCard:React.FC<any> = (props) => {

    const [hover, setHover] = useState(false)
    const [disableHover, setDisableHover] = useState(false)
    useEffect(() => {
        if (("ontouchstart" in document.documentElement)) {
            setHover(true);
            setDisableHover(true);
        }
    }, [])

    return (

        <div className={styles.TourCardWrapper} style={{ display: "inline-block", backgroundColor: "transparent" }}>
            <div onMouseEnter={() => { setHover(true) }} onMouseLeave={() => {
                if (!disableHover)
                setHover(false)
            }} className={styles.TourCardMainAnimated}
               
            >
                <img width="100%" className={styles.Picture} src={props.link} />
                <motion.div className={styles.hoverDivAnim}  animate={hover ? { opacity: 1 } : { opacity: 0 }}></motion.div>

                <div className={styles.NameHolder} style={{ alignItems: "start" }}>
                    <div style={{ display: "block", backgroundColor: "", position: "relative" }}>
                        <h2 style={{ marginLeft: "4rem", fontSize: "2rem", marginBottom: 0 }}> <b>{props.ime}</b></h2>
                        <motion.div
                            style={{ backgroundColor: "hsl(142, 90%, 61%)", width: "0px", marginLeft: "-1rem", height: "3px" }}
                            initial={false}
                            transition={{duration:0.5}}
                            animate={hover ? { width:["0%","110%"] } : {width:"0%"}}
                            ></motion.div>
                    </div>
                    <motion.article style={{ fontSize: "1rem", height: 0, opacity: 0, padding: "0.5rem", wordBreak: "break-word" }}
                        transition={{delay:0.3}}
                        animate={hover ? { height: "auto", opacity: 1 } : {}}>
                        <i style={{ color: "white", width: "100%", display:"block" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor  vel nisi aliquet, nec dictum.</i>
                        <p style={{ backgroundColor: "hsl(142, 90%, 61%)", display: "inline-block", padding: "0.5rem 1rem", borderRadius:"0.2rem", color: "black" }}>More</p>
                    </motion.article>


                </div>
                </div>

            </div>
      
    );
}



export default AnimatedCard;