import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/dist/client/router";
import { useWindowWidth } from "@react-hook/window-size";
import { LanguageSelect } from "./LanguageSelect";

const SmallNavBar: React.FC = () => {
  const width = useWindowWidth();
  const router = useRouter();

  return (
    <div
      className="smallNavBar"
      style={
        ["Countries", "Tour"].find((el) => el === router.pathname.split("/")[1])
          ? { display: "none" }
          : { paddingLeft: "1rem", backgroundColor: "blue", color: "white", height: "3.6rem", zIndex: 1000, overflowX: "hidden" }
      }
    >
      <ul
        style={
          width < 800
            ? { fontSize: "0.7rem", display: "flex", alignItems: "center", justifyContent: "start", marginLeft: "-1rem", listStyleType: "none" }
            : { display: "flex", alignItems: "center", listStyleType: "none" }
        }
      >
        <a style={{ backgroundColor: "black" }}></a>
        <li style={width < 800 ? { marginLeft: "0rem", fontSize: "1.2rem" } : { marginLeft: "1rem" }}>
          <a style={{ cursor: "pointer" }} href="tel: +496170961709">
            <FontAwesomeIcon icon={faPhone} />
            <i className="fas fa-phone"></i>
            <span style={{ marginLeft: "0.4rem" }}>{width > 800 ? "+420 234 090 170" : ""}</span>
          </a>
        </li>
        <li style={width < 800 ? { marginLeft: "0.7rem", fontSize: "1.2rem" } : { marginLeft: "1rem" }}>
          <a href="mailto: skorinzvonimir0@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            <span style={{ marginLeft: "0.4rem" }}> {width > 800 ? "kompas@kompas.cz" : ""}</span>
          </a>
        </li>
        <li style={width < 800 ? { marginLeft: "0.7rem", fontSize: "1.2rem" } : { marginLeft: "1rem" }}>
          <a href="https://www.facebook.com/turisticnaagencijaKOMPAS/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li style={width < 800 ? { marginLeft: "0.7rem", fontSize: "1.2rem" } : { marginLeft: "1rem" }}>
          <a href="https://www.instagram.com/explore/locations/1353434504727949/slovenia/ljubljana-slovenia/turisticna-agencija-kompas/?hl=hr">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
      <section style={{ marginLeft: "auto", marginRight: "0.4rem", display: "flex", alignItems: "center" }}>
        <LanguageSelect />
      </section>
    </div>
  );
};

export default SmallNavBar;
