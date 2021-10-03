import LoadingPage from "./LoadingPage"
import { useState, useEffect } from "react";
import styles from './../styles/NavBar.module.scss';
import { motion } from "framer-motion";
import { Spin as Hamburger } from 'hamburger-react'
import Menu from '../Components/SharedComponents/Menu'
const NavBar = () => {

    const [toggle, setToggle] = useState(false)
    const [stop, setStop] = useState(false);
    useEffect(() => {
        const inter = setInterval(() => {
            setStop(true);
            clearInterval(inter);
        }, 3000)
    }, [])

    return (
        <motion.div
            className={styles.NavBarMain}>

            <LoadingPage stop={stop} />
            <motion.section
                initial={false}
                animate={stop ? { opacity: 1 } : { opacity: 0 }}>Compass</motion.section>

            <section style={{ marginRight:"1%" }} className={styles.HamburgerWrapper}>
                <Hamburger toggled={toggle} toggle={() => { setToggle(!toggle) }} color="#2e309b" />
            </section>
            <Menu open={toggle} close={() => { setToggle(false) }} />
            </motion.div>
        );
}

export default NavBar;