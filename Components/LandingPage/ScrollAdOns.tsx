import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "@react-hook/window-size";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState, useRef } from "react";

const ScrollAdOns: React.FC<{ initiate: Function }> = (props) => {
  const height = useRef<number>(0);
  const router = useRouter();
  const [procentage, setProcentage] = useState(0);
  const initiate = useRef(false);
  const scroll_watcher = useRef<number>(0);
  const size = useWindowSize();
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        if (!initiate.current) {
          initiate.current = true;
          props.initiate(true);
        }
      } else {
        if (initiate.current) {
          initiate.current = false;
          props.initiate(false);
        }
      }
      if ((Math.abs(window.scrollY - scroll_watcher.current) > 30 && height.current > 0) || window.scrollY === 0) {
        scroll_watcher.current = window.scrollY;
        if (window.scrollY / height.current !== NaN) setProcentage(window.scrollY / height.current);
      }
    });
  }, []);
  useEffect(() => {
    let inter = setInterval(() => {
      let currHeight = document.querySelector("body")?.getBoundingClientRect().height;

      if (currHeight !== undefined && currHeight > 0) {
        height.current = currHeight - window.innerHeight;
        clearInterval(inter);
      }
    }, 200);
  }, [size, initiate]);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      let currHeight = document.querySelector("body")?.getBoundingClientRect().height;
      if (currHeight !== undefined && currHeight > 0) height.current = currHeight - window.innerHeight;
    });
  }, []);

  return (
    <>
      <motion.div
        style={{
          height: "5px",
          backgroundColor: "white",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          width: `${procentage !== NaN ? procentage * 100 : 100}%`,
        }}
      ></motion.div>
      <motion.div
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        animate={procentage > 0.3 ? { opacity: 1, x: ["10rem", "0rem"] } : {}}
        style={{
          opacity: 0,
          borderRadius: "50%",
          backgroundColor: "white",
          zIndex: 1000,
          display: "flex",
          position: "fixed",
          bottom: "5%",
          right: "5%",
          fontSize: "3.5rem",
          boxShadow: "0px 0px 15px 1px #000000",
        }}
      >
        <FontAwesomeIcon style={{}} color="#f93154" icon={faArrowCircleUp} />
      </motion.div>
    </>
  );
};

export default ScrollAdOns;
