import "./Left.css"
import Earth from "../../assets/earth.gif"
import {motion} from "framer-motion";

export const Left = () => {
    return (
        <motion.div initial={{
            y:100,
            opacity:0
        }} animate={{
            y:0,
            opacity:1,
            transition: {duration: 0.8, ease: [0.9, 0, 0.24, 1], delay: 0.8 }
        }} className={"Screen1LeftPart"}>
            <p>Located <br/> in the <br/> India</p>
               <img src={Earth} alt={"n"} style={{
                   height:105,
               }}/>
        </motion.div>
    )
}
