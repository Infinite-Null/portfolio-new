import "./HamburgerLinkCss.css"
import Tilt from "react-parallax-tilt";
import {motion} from 'framer-motion';
export const HamburgerLinks = ({Link,Name, index}) => {
    return (
        <>
        <Tilt tiltEnable={true} tiltReverse={true}  transitionSpeed={3000}  scale={1.1} perspective={120} style={{
            height:80,
            width:100,
            borderRadius:"100%",
            marginLeft:"20px",
            marginBottom:"10px",
        }}>
            <motion.div key={index} initial={{
                x:90
            }} animate={{x: 0, transition: {duration: 0.5,ease: [0.76, 0, 0.24, 1], delay: 0.01 * index}}} className={"HamburgerLinks"}>{Name}</motion.div>
        </Tilt></>
    )
}
