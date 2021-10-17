import { motion } from "framer-motion";
import styles from "../styles/WP_CSS/About.module.scss";

const About: React.FC = () => {
  return (
    <motion.div className={styles.AboutParentMain} style={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
      <section className={styles.AboutSec1}>
        <div style={{ marginBottom: 0 }}>
          <img className={styles.AboutLogo} alt="" src="/kompas.jpg" />
          <h2 className={styles.Title1}>ABOUT US</h2>
          <div className={styles.FirstBox}>
            At purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking.
          </div>
        </div>
      </section>
      <section className={styles.SecondSectionWrapper}>
        <div className="ct-section-inner-wrap">
          <div id="new_columns-76-7" className={styles.Box}>
            <div id="div_block-77-7" className={styles.BoxInner}>
              <img
                style={{ width: "100%", maxWidth: "450px", margin: "0 auto", objectFit: "cover", borderRadius: "1rem" }}
                id="image-78-7"
                alt=""
                src="/kompas-escorted-tours.jpg"
                className="ct-image saas-features-img"
              />
            </div>
            <div id="div_block-79-7" className={styles.BoxInner}>
              <h2 id="headline-80-7" className={styles.HBox2}>
                History
              </h2>
              <div style={{ width: "100%", height: "1rem", position: "relative" }}>
                <span className={styles.ADDON}></span>
              </div>
              <div id="text_block-82-7" className={styles.BoxText}>
                In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted.
              </div>
            </div>
          </div>
          <div id="new_columns-84-7" style={{ flexDirection: "column-reverse" }} className={styles.Box}>
            <div id="div_block-85-7" className={styles.BoxInner}>
              <h2 id="headline-86-7" className={styles.HBox2} style={{ marginLeft: "auto", marginRight: 0 }}>
                Organization
              </h2>
              <div style={{ width: "100%", height: "1rem", position: "relative" }}>
                <span style={{ right: 0, left: "auto" }} className={styles.ADDON}></span>
              </div>

              <div id="div_block-87-7" className="ct-div-block saas-divider"></div>
              <div
                id="text_block-88-7"
                className={styles.BoxText}
                style={{ textAlign: "end", justifyContent: "end", marginLeft: "auto", marginRight: 0 }}
              >
                Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but.
                Happiness cordially one determine.
              </div>
            </div>
            <div id="div_block-90-7" className={styles.BoxInner}>
              <img
                id="image-91-7"
                style={{ width: "100%", maxWidth: "450px", margin: "0 auto", objectFit: "cover", borderRadius: "1rem" }}
                alt=""
                src="/kompas-escorted-tours.jpg"
                className="ct-image saas-features-img"
              />
            </div>
          </div>

          <div id="new_columns-76-7" className={styles.Box}>
            <div id="div_block-77-7" className={styles.BoxInner}>
              <img
                style={{ width: "100%", maxWidth: "450px", margin: "0 auto", objectFit: "cover", borderRadius: "1rem" }}
                id="image-78-7"
                alt=""
                src="/kompas-escorted-tours.jpg"
                className="ct-image saas-features-img"
              />
            </div>
            <div id="div_block-79-7" className={styles.BoxInner}>
              <h2 id="headline-80-7" className={styles.HBox2}>
                Activities
              </h2>
              <div style={{ width: "100%", height: "1rem", position: "relative" }}>
                <span className={styles.ADDON}></span>
              </div>
              <div id="text_block-82-7" className={styles.BoxText}>
                In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted.
              </div>
            </div>
          </div>
          <div id="new_columns-84-7" style={{ flexDirection: "column-reverse" }} className={styles.Box}>
            <div id="div_block-85-7" className={styles.BoxInner}>
              <h2 id="headline-86-7" className={styles.HBox2} style={{ marginLeft: "auto", marginRight: 0 }}>
                Our mission
              </h2>
              <div style={{ width: "100%", height: "1rem", position: "relative" }}>
                <span style={{ right: 0, left: "auto" }} className={styles.ADDON}></span>
              </div>

              <div id="div_block-87-7" className="ct-div-block saas-divider"></div>
              <div
                id="text_block-88-7"
                className={styles.BoxText}
                style={{ textAlign: "end", justifyContent: "end", marginLeft: "auto", marginRight: 0 }}
              >
                Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but.
                Happiness cordially one determine.
              </div>
            </div>
            <div id="div_block-90-7" className={styles.BoxInner}>
              <img
                id="image-91-7"
                style={{ width: "100%", maxWidth: "450px", margin: "0 auto", objectFit: "cover", borderRadius: "1rem" }}
                alt=""
                src="/kompas-escorted-tours.jpg"
                className="ct-image saas-features-img"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
