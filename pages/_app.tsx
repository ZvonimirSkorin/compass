import type { AppProps } from "next/app";
import "../styles/globals.css";
import "./../styles/FilterSite.scss";
import NavBar from "../Components/NavBar";
import Layout_ from "../Components/SharedComponents/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import { useWindowSize, useWindowWidth } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";
import ScrollAdOns from "../Components/LandingPage/ScrollAdOns";
import SmallNavBar from "../Components/SharedComponents/SmallNavBar";
import BackgroundImg from "../Components/SharedComponents/BackgroundImage";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";
import Footer from "../Components/SharedComponents/Footer/Footer";

config.autoAddCss = false; /* eslint-disable import/first */

function MyApp({ Component, pageProps }: AppProps) {
  const [initiate, setInitiate] = useState(false);
  const [fade, setFade] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      setTimeout(() => {
        setFade(true);
      }, 2800);
    } else setFade(true);
  }, []);

  return (
    <div>
      <head>
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <BackgroundImg />
      <SmallNavBar />
      <NavBar change_colors={initiate} />
      {!fade ? (
        <div></div>
      ) : (
        <motion.span style={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Layout_ height={0}>
            <ScrollAdOns
              initiate={(val: boolean) => {
                setInitiate(val);
              }}
            />
            <Component {...pageProps} />
          </Layout_>
        </motion.span>
      )}
      <Footer />
    </div>
  );
}
export default MyApp;
