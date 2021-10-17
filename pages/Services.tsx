import { motion } from "framer-motion";
import styles from "../styles/WP_CSS/About.module.scss";
import stlyesServices from "../styles/WP_CSS/Services.module.scss";

const Services: React.FC = () => {
  return (
    <motion.div className={styles.AboutParentMain} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} style={{ opacity: 0 }}>
      <section className={styles.AboutSec1}>
        <div style={{ marginBottom: 0 }}>
          <img className={styles.AboutLogo} alt="" src="/kompas.jpg" />
          <h2 className={styles.Title1}>SERVICES</h2>
          <div className={styles.FirstBox}>Eat imagine you chiefly few end compas compilations. Be visitor females am inferno.</div>
        </div>
      </section>
      <section className={styles.SecondSectionWrapper}>
        <div className={stlyesServices.blueArea}>
          <div id="new_columns-4-15" className="ct-new-columns">
            <div id="div_block-11-15" className={stlyesServices.BlueBox}>
              <img id="image-12-15" alt="" src="/bled.jpg" className={stlyesServices.BlueImg} />
              <h3 id="headline-14-15" className={stlyesServices.BoxHeader}>
                Bus Travel
              </h3>
              <div id="text_block-15-15" className={stlyesServices.BoxText}>
                Merry alone do it burst me songs. Sorry equal charm joy her those folly ham. In they no.
              </div>
              <a id="link_text-16-15" className={stlyesServices.BlueButton} href="#" target="_self">
                Learn More
              </a>
            </div>
            <div id="div_block-31-15" className={stlyesServices.BlueBox}>
              <img id="image-32-15" alt="" src="/bled.jpg" className={stlyesServices.BlueImg} />
              <h3 id="headline-34-15" className={stlyesServices.BoxHeader}>
                Plane Travel
              </h3>
              <div id="text_block-35-15" className={stlyesServices.BoxText}>
                Merry alone do it burst me songs. Sorry equal charm joy her those folly ham. In they no.
              </div>
              <a id="link_text-36-15" className={stlyesServices.BlueButton} href="#" target="_self">
                Learn More
              </a>
            </div>
          </div>
          <div id="new_columns-17-15" className="ct-new-columns">
            <div id="div_block-18-15" className={stlyesServices.BlueBox}>
              <img id="image-19-15" alt="" src="/bled.jpg" className={stlyesServices.BlueImg} />
              <h3 id="headline-21-15" className={stlyesServices.BoxHeader}>
                Group Travel
              </h3>
              <div id="text_block-22-15" className={stlyesServices.BoxText}>
                To they four in love. Settling you has separate supplied bed. Concluded resembled.
              </div>
              <a id="link_text-23-15" className={stlyesServices.BlueButton} href="#" target="_self">
                Learn More
              </a>
            </div>
            <div id="div_block-24-15" className={stlyesServices.BlueBox}>
              <img id="image-25-15" alt="" src="/bled.jpg" className={stlyesServices.BlueImg} />
              <h3 id="headline-27-15" className={stlyesServices.BoxHeader}>
                Individual Travel
              </h3>
              <div id="text_block-28-15" className={stlyesServices.BoxText}>
                It real sent your at. Amounted all shy set why followed declared. Repeated. Burst Net In Equal.
              </div>
              <a id="link_text-29-15" className={stlyesServices.BlueButton} href="#" target="_self">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
