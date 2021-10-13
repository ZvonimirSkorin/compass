import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useRouter } from 'next/dist/client/router';
import { useWindowWidth } from '@react-hook/window-size';
import { LanguageSelect } from './LanguageSelect';


const SmallNavBar:React.FC = () =>{
    const width = useWindowWidth();
const router = useRouter()

    return(
        <div 
        className="smallNavBar" style={
          router.pathname.split('/')[1]==='Countries'?{display:"none"}:
          {paddingLeft:"1rem",backgroundColor:"blue",color:"white",height:"3.6rem"}}>
    
                           
                                                           
<ul style={width<800?{fontSize:"0.7rem",display:"flex",alignItems:"center",justifyContent:"start",marginLeft:"-1rem",listStyleType:"none"}:{display:"flex",alignItems:"center",listStyleType:"none"}} className="quick-nav">
                                        
        <li style={width<800?{marginLeft:"0rem",fontSize:"1.5rem"}:{marginLeft:"1rem"}} className="quick-nav__item">
        <FontAwesomeIcon icon={faPhone}/><a href="tel:123-456-7890"><i className="fas fa-phone"></i>&nbsp;
        {width>800?"+420 234 090 170":""}</a></li>
        <li style={width<800?{marginLeft:"0.7rem",fontSize:"1.5rem" }:{marginLeft:"1rem"}} className="quick-nav__item"
       
        ><FontAwesomeIcon  icon={faEnvelopeOpen}/>&nbsp;<a  href = "mailto: skorinzvonimir0@gmail.com">
        {width>800?
        "kompas@kompas.cz":""}</a></li>
        <li style={width<800?{marginLeft:"0.7rem",fontSize:"1.5rem"}:{marginLeft:"1rem"}} className="quick-nav__item">
            <a href="https://www.facebook.com/turisticnaagencijaKOMPAS/"><FontAwesomeIcon icon={faFacebook}/></a></li>
        <li style={width<800?{marginLeft:"0.7rem",fontSize:"1.5rem"}:{marginLeft:"1rem"}} className="quick-nav__item">
        <a href="https://www.instagram.com/explore/locations/1353434504727949/slovenia/ljubljana-slovenia/turisticna-agencija-kompas/?hl=hr"><FontAwesomeIcon icon={faInstagram}/></a></li>                  
                          </ul>
                          <section style={{marginLeft:"auto",marginRight:"0.4rem",display:"flex",alignItems:"center"}}>
                        <LanguageSelect/>
                        </section>
                                </div>
    );
}


export default SmallNavBar;