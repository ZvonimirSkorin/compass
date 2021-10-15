import { motion } from "framer-motion";
import TypeAnimation from "../../Toures/SmallComponents/TypeAnimation";
import { ScrollBlock } from "../SmallComponents/ScrollDownAnim";


export const FirstSide = () =>{
    return(
        <>
        <div style={{position:"absolute",top:"20%",left:"5%"}}>
      <TypeAnimation style={{color:"white",backgroundColor:"#0277bd",fontSize:"3rem"}} text={["Dresden","explore"]}/>
      </div>
      <motion.img 
      animate={{width:"115%"}}
      transition={{duration:4}}
      style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}} src="https://i.picsum.photos/id/1067/5760/3840.jpg?hmac=gO_V7rUFdM8YddyLysCQet4CS0CzSvUcfAtHI1ismLM" />
      <ScrollBlock/>
      </>
    );
}