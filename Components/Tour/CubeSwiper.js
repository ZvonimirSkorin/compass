
import { useRef, useState,useEffect } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube"
import "swiper/css/pagination"



// import Swiper core and required modules
import SwiperCore, {
  EffectCube,Keyboard,Pagination
} from 'swiper';

import { FirstSide } from "./CubeSides/FirstSide";
import { SecondSide } from "./CubeSides/SecondSide";
import ThirdSide from "./CubeSides/ThirdSide";
import EmailForm from "../SharedComponents/EmailForm";


// install Swiper modules
SwiperCore.use([EffectCube,Pagination,Keyboard]);


export default function CubeSwiper() {
    let it_scrolled = useRef(false);
    const [removePic, setRemovePic] = useState(false)
    let ref = useRef()
    useEffect(()=>{
        document.addEventListener('keydown',()=>{
            setRemovePic(scroll_down())})

    },[])
  
    
  
  return (
 
    <div  onClick={()=>{scroll_down()}} style={{backgroundColor:"white",overflowX:"hidden",paddingTop:`${ref.current?ref.current.getBoundingClientRect().height:0}px`}}  className="mySwiper" id="SwiperID">
  <section style={{position:"fixed",top:0,left:0,bottom:0,right:0,maxWidth:"1800px",
    margin:"0 auto",overflow:"hidden",maxHeight:"100%",zIndex:0}}>
        <div ref={ref} style={{position:"relative",height:"100%",width:"100%"}}>
      <FirstSide/>
      </div>
      </section>
    
      <section style={{width:"100%",minHeight:"100vh",position:"relative",backgroundColor:"white"}}>
      <SecondSide/>
      
      </section>
      <section style={{backgroundColor:"white",width:"100%",position:"relative"}}>
          <ThirdSide/>
      </section>
      <section style={{backgroundColor:"#eceff1",width:"100%",position:"relative"}}>
      <EmailForm/>
      </section>
  </div>
  
  )

  function scroll_down(){
    if(it_scrolled.current) return;
    it_scrolled.current=true;
    window.scrollTo({
        top: ref.current.getBoundingClientRect().height,
        left: 0,
        behavior: 'smooth'
      })
     
  }
}