import { style } from "@mui/system";
import { useWindowSize } from "@react-hook/window-size";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import CountryGalery from "../../Components/Countires/CountryGalery";
import styles from '../../styles/Country/CountryGeneral.module.scss';
import { motion } from "framer-motion";
import BigCard from "../../Components/Countires/BigCard";
import FeaturedTours from "../../Components/Explore/FeaturedTours";
const st = "Germany"
const about = require(`./../../public/Countries/${st}`);


const Country:React.FC<{country:string}> = (props) =>{
const size = useWindowSize();
const [showBox, setShowBox] = useState(false)
useEffect(()=>{setTimeout(()=>{setShowBox(true)},1000)},[])

    return(
        <div style={{paddingTop:`${size[1]*0.9}px`}} className={styles.CardParent}>
            
            <section
           
            style={{height:`${size[1]*0.9}px`}} className={styles.CountryMainImageWrapper}>
                <div className={styles.CountryMainImageHolder}>
            <img className={styles.CountryMainImage} src="/compassV1.jpg"/>
            <img className={styles.bottom_curve} src="/bottom_curve.svg"/>
            <motion.article  animate={showBox?{opacity:1,x:["-10%","0%"]}:{}}  className={styles.Strong}>
            <div style={{color:"rgb(16, 25, 40)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <strong className={styles.a}>Toures</strong></div>
            </motion.article>
            </div>
           
            </section>
            <BigCard data={about}  side=""/>
            <BigCard data={about}  side="Left"/>
            <BigCard data={about}  side=""/>
        <FeaturedTours background_disable={true} data={about.Cities} name={`Explore ${about.Name}`}/>
            {about.GaleryCircleImages?.length}
           <CountryGalery data={about.GaleryCircleImages} size={70}/>
           
        </div>

    );
}

export default Country;