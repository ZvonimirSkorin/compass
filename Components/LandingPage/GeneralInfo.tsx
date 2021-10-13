import styles from './../../styles/GeneralInfo.module.scss'
import Cards from './Card'

const GeneralInfo = () => {

    return (
        <div className={styles.GeneralMain}>
            <section className={ styles.smokeBg}>
                <h1 style={{marginTop:0}} className={styles.GeneralTitle}>Compass</h1>
                <section className={styles.GeneralText} style={{ textAlign:"center" }}>With compass, you always find right direction</section>
            </section>

            <Cards/>

            </div>
        );
}


export default GeneralInfo;