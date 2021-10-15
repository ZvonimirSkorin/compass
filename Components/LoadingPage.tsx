import { motion } from 'framer-motion'
import KompasAnim,{KompasAnimatedName} from './SharedComponents/KompasAnim';

const LoadingPage: React.FC<{ stop: boolean }> = (props) => {

    return (
        <motion.div
            style={{zIndex:10000}}
            animate={props.stop ? { width: 52, backgroundColor: "", }
            : {
                position: "fixed", top: 0, bottom: 0, left: 0, right: 0, 
}}>
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems:"center" }}>
               
                       <KompasAnimatedName stop={props.stop}/>
                       <KompasAnim stop={props.stop}/>
</div>
        </motion.div>
        );
}

export default LoadingPage;