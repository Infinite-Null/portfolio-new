import "./Discription.css"
import Tilt from "react-parallax-tilt";
import {motion} from "framer-motion";

export const Discription = () => {
    const phrase2="The combination of my passion for development & coding positions me in a unique place in the tech world."
    const phrase = "Versatile full stack web and app developer adept at creating seamless, innovative solutions for digital landscapes."
    return (
       <>
           <div  className={"Screen2AboutMeContainer"} >
               <div className={"Screen2AboutMeDis1"}>
                   {
                       phrase.split("").map((e,i)=><motion.div style={{
                           display:"inline-block"
                       }} key={i} initial={{
                           y:50,
                           opacity:0
                       }} whileInView={{
                           y:0,opacity:1,transition: {duration: 0.5, delay: 0.003*i  }
                       }}>{e}</motion.div>)
                   }
               </div>
               <div className={"Screen2AboutMeDis2"}>
                   {
                       phrase2.split(" ").map((e,i)=><motion.div style={{
                           display:"inline-block"
                       }} key={i} initial={{
                           y:50,
                           opacity:0
                       }} whileInView={{
                           y:0,opacity:1,transition: {duration: 0.5, delay: 0.01*i }
                       }}>{e+" "}</motion.div>)
                   }
                   <Tilt tiltEnable={true} tiltReverse={true}  transitionSpeed={1000} scale={1.07} perspective={100} className={"TiltScreen2Discription"} >
                       <motion.div initial={{
                           y:30
                       }} whileInView={{
                           y:-10
                       }} className={"Screen2AboutMeButton"}>
                           About me
                       </motion.div>
                   </Tilt>
               </div>
           </div>
          <div className={"Screen2AboutMeButtonDiv"}>
          </div>
       </>
    )
}
