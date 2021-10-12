import { useInView } from 'react-intersection-observer';
import { useEffect,useRef,useState } from 'react';
import styles from '../../styles/Country/Galery.module.scss'
import { useWindowWidth } from '@react-hook/window-size';
import { LightBoxGalery } from '../SharedComponents/LightBoxGalery';



const CountryGalery:React.FC<{size:number,data:string[]}> = (props) =>{
    const {ref, inView} = useInView()
    const [inV, inView2] = useInView();
    const [openLight, setOpenLight]=useState(false);
    const [indexPosition, setIndexPosition] = useState(-1)
    const width = useWindowWidth()
   
    let beenThere = useRef(false)
    useEffect(()=>{
        
        if((!inView || beenThere.current===true) && (width>1000)) return;
        if((!inView2 || beenThere.current) && width<1000 ) return;
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
       
              
        
        
    },[inView,inView2])
    return(
        <section ref={inV} style={{marginTop:`${props.size}px`}} className={styles.CardWrapper}>
        <div onClick={()=>{open_light(0)}}id="card1" className={styles.card}>
            <img className={styles.CardGaleryImg} src={props.data[0]}/>
        </div>
        <div onClick={()=>{open_light(1)}}id="card2" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[1]} />
        </div>
        <div onClick={()=>{open_light(2)}}id="card3" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[2]} />
        </div>
        <div onClick={()=>{open_light(3)}}id="card4" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[3]} />
        </div>
        <div onClick={()=>{open_light(4)}}id="card5" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[4]} />
        </div>
        <div onClick={()=>{open_light(5)}}id="card6" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[5]} />
        </div>
        <div onClick={()=>{open_light(6)}}id="card7" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[6]} />
        </div>
        <div onClick={()=>{open_light(7)}}id="card8" ref={ref} className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[7]} />
        </div>
        <div onClick={()=>{open_light(8)}}id="card9" className={styles.card}>       
                     <img className={styles.CardGaleryImg} src={props.data[8]} />
</div>
        <div onClick={()=>{open_light(9)}}id="card10" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[9]} />
        </div>
        <div onClick={()=>{open_light(10)}}id="card11" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[10]} />
        </div>
        <div onClick={()=>{open_light(11)}}id="card12" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[11]} />
        </div>
        <div onClick={()=>{open_light(12)}}id="card13" className={styles.card}>
        <img className={styles.CardGaleryImg} src={props.data[12]} />
        </div>
        <LightBoxGalery images={props.data} start_position={indexPosition} start={openLight} />

    </section>

    );
    function open_light(position:number){
        setIndexPosition(position)
        setOpenLight(!openLight)
    }
}

export default CountryGalery;