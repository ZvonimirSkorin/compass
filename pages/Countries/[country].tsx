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
import Flyer from "../../Components/Countires/Flyer";
const st = "Germany"
const api = "http://localhost:3000"


export const getStaticPaths = async () =>{
    const data =await (await import ('./../../public/Countries/List'));
    const countries = await data

    const paths = countries.countries.map((val:any)=>({
        
            params:{country:val.toString()}})
     
    )
    return{
        paths,
        fallback: false

    }
}

    export const getStaticProps = async (context:any) =>{
        const id = context.params.country; 
        const country =  await import('./../../public/Countries/'+id);
       let data={ AboutSec1: country.AboutSec1,Cities:country.Cities,Name:country.Name,GaleryCircleImages:country.GaleryCircleImages };
        
         if (!data) {
            return {
              redirect: {
                destination: '/',
                permanent: false,
              },
            }
          }
          return {
              props:
              {about:data}
            }
    }






const Country:React.FC<{country:string,about:any}> = (props) =>{
const size = useWindowSize();
const [showBox, setShowBox] = useState(false)
const router = useRouter();
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
           <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
            <strong onClick={()=>{router.push('/Toures/'+props.about.Name)}} className={styles.a}>Toures</strong></div>
            </motion.article>
            </div>
           
            </section>
            <Flyer/>
            
            <BigCard index={0} data={props.about}  side=""/>
            <BigCard index={1} data={props.about}  side="Left"/>
            <BigCard index={2} data={props.about}  side=""/>
        <FeaturedTours background_disable={true} data={props.about.Cities} name={`Explore ${props.about.Name}`}/>
            
           <CountryGalery data={props.about.GaleryCircleImages} size={70}/>
           
        </div>

    );
}

export default Country;