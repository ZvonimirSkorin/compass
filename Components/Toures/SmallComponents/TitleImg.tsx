import { useWindowSize } from '@react-hook/window-size';
import { useEffect, useRef } from 'react';
import styles from './../../../styles/List/TitleImg.module.scss';

const TitleImg:React.FC<{link:string,height:Function}>= (props) =>{
    const size = useWindowSize();
    const ref = useRef<null | HTMLDivElement>(null)
    useEffect(()=>{
        if(ref!==null){
            props.height(ref.current?.getBoundingClientRect().height)
        }
    },[size])

    return(
        <div ref={ref} className={styles.TitleImgWrapper}>
            <img className={styles.TitleImg} src={props.link}/>
        </div>

    );

}

export default TitleImg;