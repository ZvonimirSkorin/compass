import AnimatedCard from '../SharedComponents/AnimatedCard';
import SearchSwiper from './Swiper'
import styles from './../../styles/Shared_styles/Swiper.module.scss';

interface recivedProps {
    name:string,
    data?: any,
    background_disable?:boolean | undefined | null
}


const FeaturedTours: React.FC<recivedProps> = (props) => {

    return (
        <div style={props.background_disable?{
            paddingBottom:"5rem",paddingTop:"3rem",backgroundImage:"none",backgroundColor:"rgb(179,229,252)",
            background:"radial-gradient(circle, rgba(179,229,252,1) 0%, rgba(41,182,246,1) 100%)"}:{}} className={styles.Swiper_Parent} >
            <h1 style={props.background_disable?{color:"black"}:{}} className={ styles.Title }>
                {props.name}
                </h1>
            <SearchSwiper Data={props.data}/>
            </div>
        
        );

}
/*
 background: ;
  background:   */


export default FeaturedTours;