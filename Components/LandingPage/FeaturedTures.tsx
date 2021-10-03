import styles from './../../styles/FeaturedTures.module.scss';
import TourCard from './TourCard';
const FeaturedTures:React.FC = () => {

    return (
        <div className={styles.FeaturedParent}>
            <h2 className={ styles.h2}>Featured Tours</h2>
        <div className={styles.FeaturedTuresMain}>
            <TourCard ime="Slovenija" link="/slovenija.jpeg"/>
            <TourCard ime="Pula" link="/pula.jpeg"/>
            <TourCard ime="Madrid" link="/madrid.jpeg"/>

            </div>
            </div>
        );
}


export default FeaturedTures;