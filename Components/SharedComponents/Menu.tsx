import * as React from 'react'
import { motion } from 'framer-motion'
import { Drawer } from '@mui/material'
import styles from '../../styles/NavBar.module.scss';

interface recivedProp {
    open: boolean,
    close: Function
}

const Menu: React.FC<recivedProp> = (props) => {


    const items = () => {
        if (props.open) {
            return <motion.div
                animate={{ justifyContent: "center", alignItems: "center" }}
                className={styles.menu_itemsBox}>
                {
                    ["Home", "About", "Trips", "Services", "Contact"].map((val, index) =>
                        <motion.p
                            key={index}
                            onClick={() => { (`/${val}`) }}
                            className={styles.MenuItem}
                            style={{ cursor: "pointer",color:"white",fontSize:"1.8rem" }} animate={{ x: ["-300%", "0%", "0%"], opacity: [0.4, 1] }}
                            transition={{ delay: 0.1 * (index--) }}
                        > {val} </motion.p>
                    )
                }


            </motion.div>
        }
        else return <></>

    }


    return (
        <motion.div className={styles.menu}>
            <Drawer
                style={{padding:"2rem"}}
                open={props.open}
                onClose={() => { props.close() }}
            >

                {items()}
            </Drawer>


            </motion.div>
        );
}


export default Menu;