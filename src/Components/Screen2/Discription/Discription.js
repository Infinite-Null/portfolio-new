import "./Discription.css"
import Tilt from "react-parallax-tilt";
export const Discription = () => {
    return (
       <>
           <div className={"Screen2AboutMeContainer"}>
               <div className={"Screen2AboutMeDis1"}>
                   Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.
               </div>
               <div className={"Screen2AboutMeDis2"}>
                   The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                   <Tilt tiltEnable={true} tiltReverse={true}  transitionSpeed={1000} scale={1.07} perspective={100} className={"TiltScreen2Discription"} >
                       <div className={"Screen2AboutMeButton"}>
                           About me
                       </div>
                   </Tilt>
               </div>
           </div>
          <div className={"Screen2AboutMeButtonDiv"}>
          </div>
       </>
    )
}
