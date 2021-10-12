import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/Country/Flyer.module.scss'

const Flyer:React.FC = () =>{

    return(
        <div className={styles.CountryFlyer}>
           <div className={styles.Card}><img style={{width:"100%",height:"100%",objectFit:"cover"}} src="/compassV4.jpg"/></div> 
           <div className={styles.Card}><img style={{width:"100%",height:"100%",objectFit:"cover"}} src="/compassV3.jpg"/></div> 
           <div className={styles.Card}><img style={{width:"100%",height:"100%",objectFit:"cover"}} src="/compassV2.jpg"/></div> 
           <div className={styles.Card} style={{backgroundColor:""}}>
               <h1 style={{color:"#b0bec5"}}>Germany</h1>
               <article className={styles.FlyerArticle}>
                   Explore deep, travel with Kompas
               </article>
               </div> 
           <div className={styles.Card}>
               <div className={styles.Section2}>
                   <h1 className={styles.h1}>Nature</h1>
               <article className={styles.FlyerArticleSecond}>
               Maecenas auctor purus augue, feugiat condimentum mauris congue a. Vivamus rutrum porttitor maximus. Suspendisse rutrum ipsum quis finibus gravida. Aliquam vehicula orci in ligula venenatis dignissim. Integer efficitur dapibus risus quis iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
               </article>
               </div>
               </div> 
           <div className={styles.Card}>
           <div className={styles.Section2}>
                   <h1 className={styles.h1}>Culture</h1>
               <article className={styles.FlyerArticleSecond}>
               Cras varius elit ante, nec pharetra magna tempor vel. Nam a mattis metus. Nulla facilisi. Duis non placerat sapien, vel imperdiet quam. Vestibulum in nisi sit amet nibh volutpat posuere eget nec felis. Sed eleifend lacus eget ex convallis porta. Nullam ligula purus, hendrerit vitae ipsum non, ornare porttitor nisi.
               </article>
               </div>
               
               </div> 
           
           
        </div>
    );
}

export default Flyer;