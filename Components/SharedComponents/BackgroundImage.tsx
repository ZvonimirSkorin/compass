import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage";



 const BackgroundImg:React.FC = () =>{
    const [hide, setHide] = useState(false);
    const router = useRouter();
    useEffect(()=>{
        if(router.pathname==="/"){
        setTimeout(()=>{
            setHide(true)
        },3820)}
        else setHide(true)
    },[])
    return(
        <motion.div 
        animate={hide?{opacity:0,zIndex:0,height:0}:{}}
        style={{position:"fixed",zIndex:100000,left:0,top:0,height:"100%",width:"100%",backgroundColor:"white"}}>
            <img style={{objectFit:"cover",height:"100%",width:"100%",opacity:0.3}} src="/background.png"/>
            {hide?<></>:
            <LoadingPage stop={false} />
            }
        </motion.div>
    );
}

export default BackgroundImg;