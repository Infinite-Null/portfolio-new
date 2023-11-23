import "./Right.css"
import Typewriter from 'typewriter-effect';
import {motion} from "framer-motion";

export const Right = () => {
    return (
        <motion.div initial={{
            y:100,
            opacity:0
        }} animate={{
            y:0,
            opacity:1,
            transition: {duration: 0.8, ease: [0.9, 0, 0.24, 1], delay: 0.8 }
        }} className={"Screen1RightPart"}>
            I am
            <Typewriter
                options={{
                    strings: ['Freelancer . ', 'Application Developer . ', "Full Stack Developer . "],
                    autoStart: true,
                    loop: true,
                }}
            />
        </motion.div>
    )
}
