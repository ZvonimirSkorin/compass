import { motion } from "framer-motion";
import { useEffect, useState } from "react";



export const ScrollBlock:React.FC = () =>{
    const [startAnim, setStartAnim] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setStartAnim(true)
        },1500)
    })

    return(
        <motion.div
        animate={startAnim?{opacity:1}:{}}
        style={{opacity:0,display:"flex",position:"absolute",bottom:0,left:0,right:0,justifyContent:"center",alignItems:"center"}}>
            <ScrollDownAnim/>
            <ScrollDownAnim/>
            <ScrollDownAnim/>
        </motion.div>
    );
}

export const ScrollDownAnim:React.FC = () =>{
    return(
        <div style={{width:"50px",margin:"1rem"}}>
            <svg width="100%"   viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
            animate={{y:[0,-10,0],strokeWidth:[7,13,7]}}
            
            transition={{duration:1, repeat:Infinity, ease:"linear"}}
            d="M2 2L49 42L98 2" stroke="black" stroke-width="8"/>
            <motion.path 
            animate={{y:[0,-10,0],strokeWidth:[7,13,7]}}
            transition={{duration:1, repeat:Infinity, ease:"linear"}}
            d="M2 27L49 67L98 27" stroke="black" stroke-width="8"/>
            </svg>

        </div>
    );
}