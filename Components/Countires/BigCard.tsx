import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import styles from './../../styles/Country/BigCard.module.scss';
import { motion } from 'framer-motion';

const BigCard:React.FC<{side:string,data:any,index:number}> = (props) =>{
    const {ref, inView} = useInView()
    const [change_tracker, setChange] = useState(false);
    useEffect(()=>{
        if(change_tracker || !inView ) return;
        setChange(true);
    },[inView])
    useEffect(()=>{
        let el = document.getElementById('text_about'+props.index.toString())
        if(el!==null)
        el.innerHTML=props.data.AboutSec1;
    },[props.data])
    return(
        <motion.div
        animate={change_tracker?{opacity:1}:{}}
        transition={{duration:1.4}}
        ref={ref} style={props.side==="Left"?{direction:"rtl"}:{}} className={styles.BigCard}>
                <section className={styles.BigCardSec1}>
                <img className={styles.BigCardImg} src="/compassV1.jpg"/>
                </section>
                <section id={`text_about${props.index}`} className={styles.BigCardSec2}>
                    
                    </section>
        </motion.div>
    );
    
}

export default BigCard;