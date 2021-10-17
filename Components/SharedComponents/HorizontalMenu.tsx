import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { useState, useCallback, useEffect } from "react";
import styles from "../../styles/NavBar/HorizontalMenu.module.scss";

const map = new Map();
map.set("", 0);
map.set("About", 1);
map.set("Explore", 2);
map.set("Services", 3);
map.set("Contact", 4);

export const HorizontalMenu: React.FC = () => {
  const [index, setIndex] = useState<number | null>(0);
  const router = useRouter();
  const onRouteChangeStart = () => {};

  useEffect(() => {
    router.events.on("routeChangeComplete", (url) => {
      window.scrollTo(0, 0);
      setIndex(map.get(url.substring(1)));
    });
  }, []);
  return (
    <div className={styles.HorizontalMenu} style={{ paddingBottom: "4px", overflowX: "hidden" }}>
      {["Home", "About", "Explore", "Services", "Contact"].map((val, ind) => (
        <div
          className={styles.ItemHorizontal}
          key={ind}
          onClick={() => {
            if (val !== "Home") router.push(`/${val}`);
            else router.push("/");
          }}
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          {val}
        </div>
      ))}
      <motion.div
        animate={index != null ? { marginLeft: `${index ? index * 20 : 0}%` } : { display: "none" }}
        style={{ position: "absolute", bottom: 0, left: 0, width: "20%", height: "2.5px", backgroundColor: "white" }}
      ></motion.div>
    </div>
  );
};
