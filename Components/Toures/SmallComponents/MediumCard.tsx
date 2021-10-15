import { faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import styles from '../../../styles/Toures/MediumCard.module.scss'

interface recivedProps{
    link:string
}

export const MediumCard:React.FC <recivedProps> = (props) =>{
    const router = useRouter()

    return(
        <div className={styles.MediumCard}>
                <section className={styles.TopSection}>
                <img style={{height:"100%"}} className={styles.Image} 
                src={props.link}/>
                </section>
                <section className={styles.BottomSection}>
                <strong className={styles.Strong}>Dresden</strong>
                <div style={{marginTop:"0.5rem"}}>
                    <FontAwesomeIcon color="#ff5252" icon={faHourglassStart}/>
                   <span style={{marginLeft:"0.5rem", color:"#666666",fontWeight:600}}> 4 days </span>
                    </div>
                    <div style={{marginTop:"0.5rem"}}>Trip to Dresden with airplane.</div>
                    <div className={styles.AbsBottom}>
                    <h3 style={{marginTop:"auto", color:"#00e676",fontWeight:700,marginLeft:"0.3rem"}}>Guaranteed departure</h3>
                    <div className={styles.BottomSticker}>
                    <div style={{display:"flex",boxSizing:"border-box",backgroundColor:"#e0e0e0",height:"100%",justifyContent:"center",alignItems:"center"}}>
                    <Rating style={{width:"100%"}} name="read-only" value={5} readOnly />
                    </div>
                    <div 
                    onClick={()=>{router.push('/Tour/Dresden')}}
                    style={{color:"white",fontWeight:700,backgroundColor:"#4fc3f7",height:"100%",textAlign:"center"
                    ,display:"flex",alignItems:"center",justifyContent:"center", cursor:"pointer"}}>
                    Details
                    </div>
                        <div style={{transform:"rotate(-180deg) translateX(50%)"}} className={styles.Arrow}></div>
                    </div>
                    </div>
                </section>

        </div>
    );

}