import EmailForm from '../Components/SharedComponents/EmailForm';
import styles from '../styles/WP_CSS/About.module.scss';

const Contact:React.FC = () =>{

    return(
        <div>
        <section className={styles.AboutSec1} >
          <div style={{marginBottom:0}}>
            <img
                className={styles.AboutLogo}
            alt=""
              src="/kompas.jpg"
           
            />
            <h2 className={styles.Title1}>
              ABOUT US
            </h2>
            <div className={styles.FirstBox}>
              At purse tried jokes china ready decay an. Small its shy way had woody
              downs power. To denoting admitted speaking.
            </div>
          </div>
        </section>
        <section className={styles.ContactForm}>
          <EmailForm/>
        </section>
      
      </div>
    );
}


export default Contact;