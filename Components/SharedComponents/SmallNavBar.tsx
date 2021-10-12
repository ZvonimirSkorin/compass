import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useRouter } from 'next/dist/client/router';
import { useWindowWidth } from '@react-hook/window-size';


const SmallNavBar:React.FC = () =>{
    const width = useWindowWidth();
const router = useRouter()

    return(
        <div 
        className="smallNavBar" style={
          router.pathname.split('/')[1]==='Countries'?{display:"none"}:
          {paddingLeft:"1rem",backgroundColor:"blue",color:"white",height:"3.6rem"}}>
    
                           
                                                           
                                    <ul style={width<800?{fontSize:"0.7rem",display:"flex",alignItems:"center",listStyleType:"none"}:{display:"flex",alignItems:"center",listStyleType:"none"}} className="quick-nav">
                                        
        <li style={width<800?{marginLeft:"0.4rem"}:{marginLeft:"1rem"}} className="quick-nav__item">
        <FontAwesomeIcon icon={faPhone}/><a><i className="fas fa-phone"></i>&nbsp;+420 234 090 170</a></li>
        <li style={width<800?{marginLeft:"0.7rem"}:{marginLeft:"1rem"}} className="quick-nav__item"><FontAwesomeIcon  icon={faEnvelopeOpen}/>&nbsp;kompas@kompas.cz</li>
        <li style={width<800?{marginLeft:"0.7rem"}:{marginLeft:"1rem"}} className="quick-nav__item"><FontAwesomeIcon icon={faFacebook}/></li>
        <li style={width<800?{marginLeft:"0.7rem"}:{marginLeft:"1rem"}} className="quick-nav__item">
        <FontAwesomeIcon icon={faInstagram}/></li>                  
                          </ul>
                        
                                </div>
    );
}


export default SmallNavBar;