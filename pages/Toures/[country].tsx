import { useState } from "react";
import TitleImg from "../../Components/Toures/SmallComponents/TitleImg";
import TourBigCard from "../../Components/Toures/TourBigCard";
import styles from './../../styles/List/List.module.scss';

const tour_list:React.FC = () =>{
    const [mainImgHeight, setMainImgHeight] = useState(0)

    return(
        <div style={{paddingTop:`${mainImgHeight}px`}} className={styles.ListParent}>
           
        <TitleImg height={(val:number)=>{setMainImgHeight(val)}} link="/compassV4.jpg"/>
        <TourBigCard/>
        <TourBigCard/>
        <TourBigCard/>
       

        </div>
    );
}


export default tour_list;