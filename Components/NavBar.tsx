import LoadingPage from "./LoadingPage"
import { useState, useEffect } from "react";
import styles from './../styles/NavBar/NavBar.module.scss';
import { motion } from "framer-motion";
import { Spin as Hamburger } from 'hamburger-react'
import Menu from '../Components/SharedComponents/Menu'
import { useRouter } from "next/dist/client/router";
import { HorizontalMenu } from "./SharedComponents/HorizontalMenu";
import {LanguageSelect} from "./SharedComponents/LanguageSelect";
const NavBar:React.FC<any> = (props) => {

    const [toggle, setToggle] = useState(false)
    const [stop, setStop] = useState(false);
    const router = useRouter();
    useEffect(() => {
        
        if(router.pathname==="/"){
        const inter = setInterval(() => {
            setStop(true);
            clearInterval(inter);
        }, 3800)}
        else setStop(true)
    }, [])

    return (
        <motion.div
        style={{zIndex:1000}}
        initial={false}
        animate={props.change_colors?{backgroundColor:"#0d47a1",color:"white"}:{
            backgroundColor:"rgba(255,255,255,0.3)",color:"black"}}
           className={styles.NavBarMain}>

            <LoadingPage stop={stop} />
            <motion.section
                initial={false}
                style={{cursor:"pointer",display:"flex",alignItems:"center"}}
                onClick={()=>router.push('/')}
                animate={stop ? { opacity: 1 } : { opacity: 0 }}>
                    Kompas
                    
                    </motion.section>
                {
                    stop?
                        <>
                        <HorizontalMenu/>
                        <section style={{ marginRight:"1%" }} className={styles.HamburgerWrapper}>
                            <Hamburger toggled={toggle} toggle={() => { setToggle(!toggle) }} color="#2e309b" />
                        </section>
                        <Menu open={toggle} close={() => { setToggle(false) }} /></>
                    :
                    <></>
                }
           
            </motion.div>
        );
}

export default NavBar;