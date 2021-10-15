import { useEffect, useRef, useState } from "react";
import ReactTypingEffect from 'react-typing-effect'
import styles from '../../../styles/Toures/Typing.module.scss'

const TypeAnimation = (props) =>{
    let ref = useRef("");
    

    return(
<>
      <ReactTypingEffect
      typingDelay={1000}
      eraseDelay={1000}
      speed={100}
      className={styles.TypeWriter}
      style={props.style!=undefined?props.style:{color:"white",backgroundColor:"#0277bd"}}
        text={props.text!=undefined?props.text:["Dresden", "Berlin","Munchen","Frankfurt"]}
      />

       
     
    </>
    )
}

export default TypeAnimation;