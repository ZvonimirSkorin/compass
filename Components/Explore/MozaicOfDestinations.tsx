import styles from "./../../styles/ExploreStyles/MozaicOfDestinations.module.scss";

export const MozaicOfDestinations: React.FC = () => {
  return (
    <div className={styles.MozaicParent}>
      <section className={styles.MozaicPoster}>
        <div
          className={styles.Darkner}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.149)",
            flexDirection: "column",
            paddingLeft: "2rem",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <section className={styles.Titles}>More than</section>
          <section className={styles.Numbers}>70</section>
          <section className={styles.Titles}>Toures</section>
          <section className={styles.Button} style={{ alignSelf: "flex-end", marginRight: "1rem" }}>
            Contact us
          </section>
        </div>

        <img className={styles.Img} src="/ParisNight.jpg" />
      </section>

      <section className={styles.Mozaic}>
        <div className={styles.MozaicChild}>
          <div className={styles.Darkner}>Bled</div>
          <img className={styles.Img} src="/bled.jpg" />
        </div>
        <div className={styles.MozaicChild}>
          <div className={styles.Darkner}>Croatia</div>

          <img className={styles.Img} src="/Cro.jpg" />
        </div>
        <div className={styles.MozaicChild}>
          <div className={styles.Darkner}>London</div>

          <img className={styles.Img} src="/Plane.jpg" />
        </div>
        <div className={styles.MozaicChild}>
          <div className={styles.Darkner}>Austria</div>

          <img className={styles.Img} src="/compassV1.jpg" />
        </div>
        <div className={styles.MozaicChild}>
          <div className={styles.Darkner}>Poland</div>

          <img className={styles.Img} src="/compassV2.jpg" />
        </div>
        <div className={styles.MozaicChild}>
          <div className={styles.Darkner}>Portugal</div>

          <img className={styles.Img} src="/Cruise.jpg" />
        </div>
        <div className={styles.MozaicChild}>
          <div className={styles.Darkner}>Spain</div>

          <img className={styles.Img} src="/madrid.jpeg" />
        </div>
        <div className={styles.MozaicChild}>
          <div className={styles.Darkner}>France</div>

          <img className={styles.Img} src="/Paris.jpg" />
        </div>
        <div className={styles.MozaicChild} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
          <div className={styles.Button}> See more </div>
        </div>
      </section>
    </div>
  );
};
