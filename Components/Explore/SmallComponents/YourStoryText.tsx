import { motion } from "framer-motion";



const YourStoryText: React.FC<any> = (props) => {

    return (
        <div className={props.style}>
            <h2 style={{ margin: 0, textAlign: "left", display: "inline-block", backgroundColor: "#0065A3", padding: "0.5rem 1rem" }}>
                {props.title}</h2>
            <motion.a
                animate={props.fireUp ? { opacity: [0, 1] } : { height: 0, opacity: [0, 0] }}
                style={{ display: "inline-block", boxSizing: "border-box", padding: "1rem", backgroundColor: "#5EA73C", margin: "1rem", wordBreak: "break-word" }}>
                {props.description}
                        </motion.a>
        </div>
        );

}


export default YourStoryText;