import CountUp, { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import styles from "../../styles/Shared_styles/LetTheNumbersSpeak.module.scss";

const LetTheNumbersSpeak: React.FC = (props) => {
  return (
    <div className={styles.LetNumbers}>
      <article className={styles.LNArticle}>
        <OneCounter what="Toures" link="/adventure.svg" num={142} />
        <OneCounter what="years with you" link="/time.svg" num={70} />
        <OneCounter what="satisfied customers" link="/celeb.svg" num={984821} />
      </article>

      <img
        src="https://i.picsum.photos/id/1057/6016/4016.jpg?hmac=RjPyzbGq_MxSbghhfa1iVykXTskk9IISuzavny11_lI"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}
      />
      <div
        style={{
          opacity: 0.5,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "black",
          zIndex: -1,
        }}
      ></div>
    </div>
  );
};

export const OneCounter: React.FC<{ num: number; link?: string; what?: string }> = (props) => {
  const { ref, inView } = useInView();
  let initiate = useRef(false);
  const countUpRef = useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 0,
    delay: 1,
    duration: 2,
  });
  useEffect(() => {
    if (inView) {
      update(props.num);
    }
  }, [inView]);
  return (
    <div onClick={() => update(200000)} ref={ref} style={{ textAlign: "center", marginTop: "1rem" }}>
      <div className={styles.BoxWrapper}>
        <img style={{ width: "150px" }} src={props.link} />
        <div style={{ fontSize: "55px", fontWeight: 700, color: "#1a237e", marginTop: "0.4rem" }} ref={countUpRef} />
        <div style={{ color: "#1a237e", fontWeight: 700, textAlign: "center" }}>{props.what}</div>
      </div>
    </div>
  );
};

export default LetTheNumbersSpeak;
