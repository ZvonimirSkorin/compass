import { useInView } from 'react-intersection-observer';
import { useEffect,useRef } from 'react';
import styles from '../../styles/Country/Galery.module.scss'



const CountryGalery:React.FC<{size:number,data:string[]}> = (props) =>{
    const {ref, inView} = useInView()
    let beenThere = useRef(false)
    useEffect(()=>{
        if(!inView || beenThere.current===true) return;

        beenThere.current=true;
        for(let i=1;i<=13;i++){
           let el = document.getElementById(`card${i}`)
            el?.animate([
                // keyframes
                { opacity:0, transform:"scale(0.3)", filter:"hue-rotate(180deg)" },
                { opacity:1, transform:"scale(1)", filter:"hue-rotate(0deg)" }
              ], {
                // timing options
                duration: 700,
                delay:i*110,
                
              });
              
        }

        for(let i=1;i<=13;i++){
            let el = document.getElementById(`card${i}`)
            setTimeout(()=>{
                el?.style.setProperty('opacity','1');

            },i*110+700)
        }
       
              
        
        
    },[inView])
    return(
        <section style={{marginTop:`${props.size}px`}} className={styles.CardWrapper}>
            
        <div id="card1" className={styles.card}>
            <img className={styles.CardGaleryImg} src={props.data[0]}/>
        </div>
        <div id="card2" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[1]} />
        </div>
        <div id="card3" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[2]} />
        </div>
        <div id="card4" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[3]} />
        </div>
        <div id="card5" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[4]} />
        </div>
        <div id="card6" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[5]} />
        </div>
        <div id="card7" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[6]} />
        </div>
        <div id="card8" ref={ref} className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[7]} />
        </div>
        <div id="card9" className={styles.card}>       
                     <img className={styles.CardGaleryImg} src={props.data[8]} />
</div>
        <div id="card10" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[9]} />
        </div>
        <div id="card11" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[10]} />
        </div>
        <div id="card12" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[11]} />
        </div>
        <div id="card13" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[12]} />
        </div>

    </section>

    );
}

export default CountryGalery;