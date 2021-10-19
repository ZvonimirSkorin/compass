import SearchBar from "./../Components/Explore/SearchBar";
import Head from "next/head";
import styles from "../styles/ExploreStyles/index.module.scss";
import Image from "next/image";
import InitialGroup from "../Components/Explore/InitialGroup";
import FeaturedTours from "../Components/Explore/FeaturedTours";
import TravelGalery from "../Components/Explore/TravelGalery";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";
import DestinationCarousel from "../Components/Explore/DestinationsCarousel";
import FindThePerfectEscape from "../Components/Explore/FindThePerfectEscape";
import { MozaicOfDestinations } from "../Components/Explore/MozaicOfDestinations";

function Explore() {
  const selection = useRef("");
  const router = useRouter();
  const [getData, setGetData] = useState(0);
  const [height, setHeight] = useState(720);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  });
  return (
    <motion.div
      animate={loaded ? { opacity: 1 } : {}}
      style={{ opacity: 0, paddingTop: `${height}px`, paddingBottom: "4rem" }}
      className={styles.ExploreWrapper}
    >
      <Head>
        <title>Kompas</title>
        <meta name="description" content="Great european trips" />
        <link rel="icon" href="/favicon.ico" />
        <meta content="Zvonimir Skorin" name="Author" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DestinationCarousel
        set_height={(val: any) => {
          setHeight(val);
        }}
      />
      <div className={styles.ExploreInnerWrapper}>
        <FindThePerfectEscape />
        <MozaicOfDestinations />
        <section id="Explore1">
          <FeaturedTours data={dummy_data(0)} name="Individal travels" />
        </section>

        <section id="Explore2">
          <FeaturedTours data={dummy_data(1)} name="Bus travels" />
        </section>
        <section id="Explore3">
          <FeaturedTours data={dummy_data(2)} name="Group travels" />
        </section>
        <section id="Explore4">
          <FeaturedTours data={dummy_data(3)} name="Airplane travels" />
        </section>

        <section id="Explore5">
          <FeaturedTours data={dummy_data(4)} name="Cruises" />
        </section>
        <TravelGalery />
      </div>
    </motion.div>
  );

  const le = (
    <section className={styles.search_bar_wrapper}>
      <div className={styles.span}>
        <SearchBar
          getData={getData}
          upadate_selection={(val: any) => {
            selection.current = val;
          }}
        />
        <div
          onClick={() => {
            setGetData(getData + 1);
          }}
          className={styles.button}
        >
          Explore
        </div>
        <InitialGroup />
      </div>
    </section>
  );
}

function dummy_data(pos: number) {
  let data;
  switch (pos) {
    case 0:
      data = [
        { Name: "Dubrovnik", Link: "/Cro.jpg" },
        { Name: "Montenegro", Link: "/Waves.jpg" },
        { Name: "Kopar", Link: "/Team.jpg" },
        { Name: "London", Link: "/Plane.jpg" },
        { Name: "Adriatic sea", Link: "/Cruise.jpg" },
      ];
      break;

    case 1:
      data = [
        { Name: "Kopar", Link: "/Team.jpg" },
        { Name: "London", Link: "/Plane.jpg" },
        { Name: "Adriatic sea", Link: "/Cruise.jpg" },
        { Name: "Dubrovnik", Link: "/Cro.jpg" },
        { Name: "Montenegro", Link: "/Waves.jpg" },
        ,
      ];
      break;

    case 2:
      data = [
        { Name: "Montenegro", Link: "/Waves.jpg" },
        { Name: "Kopar", Link: "/Team.jpg" },
        { Name: "Dubrovnik", Link: "/Cro.jpg" },
        { Name: "London", Link: "/Plane.jpg" },
        { Name: "Adriatic sea", Link: "/Cruise.jpg" },
      ];
      break;

    case 3:
      data = [
        { Name: "London", Link: "/Plane.jpg" },
        { Name: "Dubrovnik", Link: "/Cro.jpg" },
        { Name: "Montenegro", Link: "/Waves.jpg" },
        { Name: "Kopar", Link: "/Team.jpg" },
        { Name: "Adriatic sea", Link: "/Cruise.jpg" },
      ];
      break;

    case 4:
      data = [
        { Name: "Dubrovnik", Link: "/Cro.jpg" },
        { Name: "Montenegro", Link: "/Waves.jpg" },
        { Name: "Kopar", Link: "/Team.jpg" },
        { Name: "London", Link: "/Plane.jpg" },
        { Name: "Adriatic sea", Link: "/Cruise.jpg" },
      ];
      break;

    default:
      break;
  }

  return data;
}
export default Explore;
