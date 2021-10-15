import styles from '../../../styles/Toures/ThirdSide.module.scss'
import { MediumCard } from '../../Toures/SmallComponents/MediumCard';

const ThirdSide:React.FC<{data?:string[]}> = (props) =>{
    return(
        <div className={styles.Parent}>
            <div className={styles.TitleType}>You might be interasted</div>
            <div className={styles.TouresCards}>
            {
                ["https://i.picsum.photos/id/806/300/250.jpg?hmac=Yvsyel9HVQviNORIbJCyowvVH_9ZnLiLonVZyCbZpxg",
                "https://i.picsum.photos/id/49/270/250.jpg?hmac=2si7DZME6WY8aVMV2imWjeoiEn1qIRqYAng0KZAr_Wo",
                "https://i.picsum.photos/id/806/300/250.jpg?hmac=Yvsyel9HVQviNORIbJCyowvVH_9ZnLiLonVZyCbZpxg",
                "https://i.picsum.photos/id/49/270/250.jpg?hmac=2si7DZME6WY8aVMV2imWjeoiEn1qIRqYAng0KZAr_Wo"].map((val,index)=>
                <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}} key={index}>
                    <MediumCard link={val}/>
                </div>
                )
            }

            </div>

           
            
        </div>
    );
}

export default ThirdSide;