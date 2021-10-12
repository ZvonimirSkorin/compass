import { motion } from "framer-motion";
import { useEffect, useState } from "react";



export const BackgroundImg:React.FC = () =>{
    const [hide, setHide] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setHide(true)
        },3400)
    },[])
    return(
        <motion.div 
        animate={hide?{opacity:0,zIndex:-1}:{}}
        style={{position:"fixed",zIndex:100,left:0,top:0,height:"100%",width:"100%",backgroundColor:"white"}}>
            <img style={{position:"fixed",zIndex:100,left:0,top:0,height:"100%",width:"100%",opacity:0.3}} src="/background.png"/>
        <a href='https://pngtree.com/free-backgrounds'>free background photos from pngtree.com
        </a>
        </motion.div>
    );
}