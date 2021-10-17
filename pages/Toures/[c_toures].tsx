import { useState } from "react";
import TitleImg from "../../Components/Toures/SmallComponents/TitleImg";
import TourBigCard from "../../Components/Toures/TourBigCard";
import styles from "./../../styles/List/List.module.scss";
import TypeAnimation from "./../../Components/Toures/SmallComponents/TypeAnimation";
import { MediumCard } from "../../Components/Toures/SmallComponents/MediumCard";
const Tour_list: React.FC = () => {
  const [mainImgHeight, setMainImgHeight] = useState(0);

  return (
    <div style={{ paddingTop: `${mainImgHeight}px` }} className={styles.ListParent}>
      <TitleImg
        height={(val: number) => {
          setMainImgHeight(val);
        }}
        link="/compassV4.jpg"
      />
      <div style={{ backgroundColor: "white" }} className={styles.SecondBody}>
        <section className={styles.TitleType}>
          <span>Destinations in Germany</span>
          <TypeAnimation text={["Dresden", "Berlin", "Hamburg", "Frankfurt"]} />
        </section>
        <section className={styles.TouresSection1Title}>
          <strong>Check our offer</strong>
          <span>
            <h1 style={{ margin: "0.4rem" }}>Popular choices</h1>
            <div style={{ backgroundColor: "black", height: "2px", width: "150%", marginLeft: "-25%" }}></div>
          </span>
          <div className={styles.TouresCards}>
            {[
              "https://i.picsum.photos/id/806/300/250.jpg?hmac=Yvsyel9HVQviNORIbJCyowvVH_9ZnLiLonVZyCbZpxg",
              "https://i.picsum.photos/id/49/270/250.jpg?hmac=2si7DZME6WY8aVMV2imWjeoiEn1qIRqYAng0KZAr_Wo",
              "https://i.picsum.photos/id/806/300/250.jpg?hmac=Yvsyel9HVQviNORIbJCyowvVH_9ZnLiLonVZyCbZpxg",
              "https://i.picsum.photos/id/49/270/250.jpg?hmac=2si7DZME6WY8aVMV2imWjeoiEn1qIRqYAng0KZAr_Wo",
            ].map((val, index) => (
              <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} key={index}>
                <MediumCard link={val} />
              </div>
            ))}
          </div>
        </section>

        <section style={{ boxSizing: "border-box", paddingBottom: "4rem" }}>
          <div className={styles.TouresSection1Title}>
            <span>
              <h1 style={{ margin: "0.4rem" }}>Our recommendation</h1>
              <div style={{ backgroundColor: "black", height: "2px", width: "150%", marginLeft: "-25%" }}></div>
            </span>
          </div>
          <TourBigCard />
          <TourBigCard />
          <TourBigCard />
        </section>
      </div>
    </div>
  );
};

export default Tour_list;
