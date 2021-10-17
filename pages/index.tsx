import type { NextPage } from "next";
import { Slider, MenuItem, Select, Checkbox, Button } from "@mui/material";
import MapChart from "./../Components/Mapa/App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faBus } from "@fortawesome/free-solid-svg-icons";
import CountrySelect from "../Components/Mapa/CountrySelect";
import Carousel from "../Components/SharedComponents/Swiper";
import GeneralInfo from "../Components/LandingPage/GeneralInfo";
import FeaturedTures from "../Components/LandingPage/FeaturedTures";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "../styles/index.module.scss";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LetTheNumbersSpeak from "../Components/LandingPage/LetTheNumbersSpeak";

config.autoAddCss = false; /* eslint-disable import/first */

const Home: NextPage = () => {
  const [content, setContent] = useState("");
  const [carousel_height, setCarouselHeight] = useState(0);
  const [price, setPrice] = useState<any>(5000);
  const [transport, setTransport] = useState("any");
  const [country, setCountry] = useState<null | string>(null);

  const [loaded, setLoaded] = useState(false);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    let interVV = setInterval(() => {
      const el = document.getElementById("SwiperMain");
      if (el != null) {
        setCarouselHeight(el.getBoundingClientRect().height);
        clearInterval(interVV);
      }
    }, 200);
  }, []);
  return (
    <motion.div style={{ paddingTop: `${carousel_height}px` }}>
      <Carousel
        set_height={(val: any) => {
          setCarouselHeight(val);
        }}
      />

      <GeneralInfo />
      <section className={styles.LetTheNumbers} style={{ minHeight: "400px", margin: "3rem 0rem" }}>
        <LetTheNumbersSpeak />
      </section>

      <FeaturedTures />

      <div className="FilterMain">
        <section className="FilterTitle">
          <h1>Explore the world with compass</h1>
        </section>

        <section className="FilterMainSectionOne" style={{ backgroundColor: "white" }}>
          <MapChart Transport={transport} Price={price} Country={country} setTooltipContent={setContent} />
        </section>

        <section style={{ maxWidth: "100%", overflow: "hidden" }} className="FilterMainSectionTwo">
          <article className="FilterMainArticle">
            <div>
              <p>Price</p>
              <Slider
                style={{ maxWidth: "95%" }}
                defaultValue={5000}
                onChange={(event, val) => {
                  setPrice(val);
                }}
                aria-label="Default"
                valueLabelDisplay="auto"
                max={5000}
              />
              <p style={{ textAlign: "center" }}>0 EUR-{price} EUR</p>
              <p>Transportation</p>
              <section>
                <Checkbox
                  checked={transport === "any"}
                  onChange={(e) => {
                    if (e.target.checked) setTransport("any");
                  }}
                  color="secondary"
                />
                <span>any</span>
              </section>
              <section style={{ color: "orange", fontWeight: 600, fontFamily: "sans-serif" }}>
                <Checkbox
                  checked={transport === "bus"}
                  onChange={(e) => {
                    if (e.target.checked) setTransport("bus");
                  }}
                  color="secondary"
                />
                <span style={{ marginRight: "1rem" }}>bus</span>

                <span style={{ width: "1rem" }}>
                  <FontAwesomeIcon size="xs" icon={faBus} />
                </span>
              </section>
              <section style={{ color: "green", fontWeight: 600, fontFamily: "sans-serif" }}>
                <Checkbox
                  checked={transport === "plane"}
                  onChange={(e) => {
                    if (e.target.checked) setTransport("plane");
                  }}
                  color="secondary"
                />
                <span style={{ marginRight: "1rem" }}>airplane</span>
                <span style={{ width: "1rem" }}>
                  <FontAwesomeIcon size="xs" icon={faPlane} />
                </span>
              </section>

              <p>Country</p>
              <CountrySelect setCountry={(val: null | string) => setCountry(val)} />
              <section style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}></section>
            </div>
          </article>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
