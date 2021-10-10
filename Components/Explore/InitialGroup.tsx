
import styles from '../../styles/ExploreStyles/initialGroup.module.scss'
import { motion } from 'framer-motion';
import CountryMap from './CountryMap';
import dynamic from 'next/dynamic'
import TourCard from '../LandingPage/TourCard';
import CitySwitch from './SmallComponents/CitySwitch';
import {useState} from 'react'


const InitialGroup:React.FC = () => {
    const [currCity, setCurrCity] = useState<string | null>(null)
    const Map = dynamic(
        () => import('./CountryMap'), // replace '@components/map' with your component's location
        { ssr: false } // This line is important. It's what prevents server-side render
    );

    return (
        <div className={styles.initialGroup}>
            <article className={styles.article} style={{ backgroundImage: "none", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <section style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                <section className={styles.img_parent}>
                    <motion.img
                        transition={{duration:1.5}}
                        animate={{ opacity: 1 }} className={styles.img_first} src="https://potovanja.nomago.si//wp-content/uploads/slike-blog-hr/slike/avio-karte/maldivi-01.jpg" />
            </section>
                <section className={styles.textSec1}>
                    <motion.div transition={{ duration: 1 }} animate={{ opacity: 1, x: ["50%", "0%"] }} className={styles.SimpleInfo}>
                    <motion.h1  className={styles.title_box}>Croatia</motion.h1>
                    <motion.h2  className={styles.subtitle_box}>Full of life</motion.h2>

                        <p className={styles.button}>Discover</p>
                        </motion.div>
                    </section>
                    </section>
            </article>
            <article className={ styles.article }>
               
                <section  className={styles.img_parent}>
                    <Map open={currCity}/>
                </section>
                <section className={styles.textSec2}>
                    
                    <CitySwitch trip_change={(val:string | null)=>setCurrCity(val)} />
                   
                        
                </section>
                    </article>

        </div>
        );

}


export default InitialGroup;