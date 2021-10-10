import TourCard from "../../LandingPage/TourCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);
interface recivedProps{
    trip_change:Function,
}

const CitySwitch:React.FC<recivedProps> = (props) =>{

    const lorem_array = [
        {city:"Zagreb",link:"https://i.picsum.photos/id/50/1000/600.jpg?hmac=G5Mg8eQyWwo7hSGhuEtDWDxmcqfYeQppKC6ouJZqga0"},
        {city:"Split",link:"https://i.picsum.photos/id/521/1000/600.jpg?hmac=piBnl5jGICPd8fJrAL8rTAi0pCbFk-XPw6K6UBHjkQk"},
                {city:"Šibenik",link:"https://i.picsum.photos/id/667/1000/600.jpg?hmac=DubhernZG1-YFvP39Ok_oiJ8a_ZsM5mZVbL8uHwdAD0",}


    ]

    return(
           
                <Swiper navigation={true} 
                  loop={true}
                    style={{  zIndex:0,width:"100%",height:"100%",gridColumnStart:1,gridColumnEnd:3 }}
                    onActiveIndexChange={(e) => {
                        props.trip_change(lorem_array[e.realIndex].city)
                       }} >
                       
                        {
                           lorem_array.map((val,index)=>
                           <SwiperSlide style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                           <TourCard disableHover={true} ime={val.city} link={val.link}/>
                           </SwiperSlide>
                           )
                       }
                        
               

            </Swiper>

    );

}

export default CitySwitch;