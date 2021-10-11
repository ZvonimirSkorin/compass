
import SearchBar from './../Components/Explore/SearchBar';
import Head from 'next/head'
import styles from '../styles/ExploreStyles/index.module.scss';
import Image from 'next/image';
import InitialGroup from '../Components/Explore/InitialGroup';
import FeaturedTours from '../Components/Explore/FeaturedTours';
import TravelGalery from '../Components/Explore/TravelGalery';
import {useState, useRef} from 'react';
import { useRouter } from 'next/dist/client/router';
function Explore() {
    const selection = useRef('');
    const router = useRouter();
    const [getData, setGetData] = useState(0)
    return (
        <div className={styles.ExploreWrapper}>
            <Head>
                <title>Kompas</title>
                <meta name="description" content="Great european trips" />
                <link rel="icon" href="/favicon.ico" />
                <meta content="Zvonimir Skorin" name="Author"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <section className={styles.search_bar_wrapper}>
                <div className={styles.span}>
                <SearchBar getData={getData} upadate_selection={(val:any)=>{selection.current=val}}/>
                    <div onClick={()=>{
                        setGetData(getData+1)}}
            
                     className={styles.button}>Explore</div>
                    </div>
            </section>
            <InitialGroup />
            <section className={styles.ExploreSecondSection}>
                <FeaturedTours name="Popular toures" />
                <TravelGalery />

            </section>
        </div>

    );
}
export default Explore;
