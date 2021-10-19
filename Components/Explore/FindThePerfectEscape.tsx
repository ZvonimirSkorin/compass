import { style } from "@mui/system";
import styles from "../../styles/ExploreStyles/PerfectEscape.module.scss";

const FindThePerfectEscape: React.FC = () => {
  return (
    <div className={styles.ParentEscape}>
      <section style={{ justifySelf: "start" }}>
        <h1 className={styles.H1}>
          Discover the best places
          <div className={styles.Strong}></div>
          <p style={{ fontSize: "1rem", textAlign: "center" }}>Experience the world</p>
        </h1>
      </section>
      <section className={styles.SecondSection}>
        <div style={{ display: "flex" }} className={styles.Flexer}>
          <MiniCard link="/bled.jpg" text="" />
          <MiniCard link="/Maldives.jpg" />
          <MiniCard link="/Paris.jpg" text="" />
        </div>
      </section>
    </div>
  );
};

export default FindThePerfectEscape;

export const MiniCard: React.FC<{ link: string; text?: string }> = (props) => {
  return (
    <div className={styles.MiniCard}>
      <img className={styles.Img} src={props.link} />
    </div>
  );
};
