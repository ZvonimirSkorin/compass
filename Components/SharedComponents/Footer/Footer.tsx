import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import styles from "../../../styles/Shared_styles/Footer.module.scss";

const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <footer className={styles.Footer} style={{ backgroundColor: "white" }}>
      <div className={styles.MainContainer}>
        <section className={styles.BoxPair}>
          <div style={{ color: "white" }} className={styles.p}>
            <div
              onClick={() => {
                go_to("About");
              }}
              className={styles.a}
            >
              About
            </div>
            <div
              onClick={() => {
                go_to("Explore");
              }}
              className={styles.a}
            >
              Explore
            </div>
            <div
              onClick={() => {
                go_to("Services");
              }}
              className={styles.a}
            >
              Services
            </div>
            <div
              onClick={() => {
                go_to("Contact");
              }}
              className={styles.a}
            >
              Contact
            </div>
          </div>
          <div style={{ color: "white" }} className={styles.p}>
            <h2>Kompas agency d.o.o</h2>
            <section style={{ textAlign: "center", fontSize: "1rem", color: "white" }}>Rotterdam street 123</section>
            <section style={{ textAlign: "center", fontSize: "1rem" }}>lorem@kompas.com</section>
            <section style={{ textAlign: "center", fontSize: "1rem" }}>+324 434 43 43</section>
          </div>
        </section>
        <section style={{ textAlign: "center" }}>© 2020 Kompas NL all rights reserved.</section>
      </div>
    </footer>
  );

  function go_to(link: string) {
    router.push("/" + link);
  }
};

export default Footer;
