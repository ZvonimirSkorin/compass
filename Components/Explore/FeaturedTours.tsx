import AnimatedCard from '../SharedComponents/AnimatedCard';
import SearchSwiper from './Swiper'
import styles from './../../styles/Shared_styles/Swiper.module.scss';

interface recivedProps {
    name:string
}


const FeaturedTours: React.FC<recivedProps> = (props) => {

    return (
        <div className={styles.Swiper_Parent} style={{}}>
            <h1 className={ styles.Title }>
                {props.name}
                </h1>
            <SearchSwiper/>
            </div>
        
        );

}



export default FeaturedTours;