import type { AppProps } from 'next/app'
import '../styles/globals.css';
import './../styles/FilterSite.scss';
import NavBar from '../Components/NavBar';
import Layout_ from '../Components/SharedComponents/Layout'
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import { useWindowSize, useWindowWidth } from '@react-hook/window-size';
import {useEffect,useRef,useState} from 'react'
import ScrollAdOns from '../Components/LandingPage/ScrollAdOns';
config.autoAddCss = false; /* eslint-disable import/first */


function MyApp({ Component, pageProps }: AppProps) {
      const [initiate, setInitiate] = useState(false)
    return (
        
           <body >
              
       <div style={{height:"2rem",paddingLeft:"2rem",backgroundColor:"blue",color:"white"}}>Call us +43434343</div>
           <NavBar change_colors={initiate}/> 
            <Layout_ height={0}>
            <ScrollAdOns initiate={(val:boolean)=>{setInitiate(val)}}/>
            <Component {...pageProps} />

            </Layout_>
            </body>
      
    );
}
export default MyApp
