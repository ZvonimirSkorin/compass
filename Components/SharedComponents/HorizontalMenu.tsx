import { motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import styles from '../../styles/NavBar/HorizontalMenu.module.scss';

export const HorizontalMenu:React.FC = () =>{
    const [index, setIndex] = useState(0);
    const router = useRouter();
    return(
        <div className={styles.HorizontalMenu} style={{paddingBottom:"4px"}}>

        {["Home", "About", "Explore", "Services", "Contact"].map((val,ind)=>
            <div key={ind} onClick={()=>{
                setIndex(ind)
                if(val!=="Home")
                router.push(`/${val}`)
                else router.push("/")
                }} style={{textAlign:"center",cursor:"pointer"}}>
                {val}
            </div>
        )}
    <motion.div
        animate={{marginLeft:`${index*20}%`}}
    style={{position:"absolute",bottom:0,left:0,width:"20%",height:"2.5px",backgroundColor:"white"}}></motion.div>
        </div>
    );
}


