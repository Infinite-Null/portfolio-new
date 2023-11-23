import "./Screen1.css"
import {Left} from "./Left";
import {Right} from "./Right";
import Marquee from "react-fast-marquee";
import Earth from "../../assets/earth.gif"
export const Screen1 = () => {
    return (
        <div style={{
            height:"100vh",
            width:"100vw",
        }}>
         <a href={"https://github.com/Infinite-Null"} target={"_blank"} className={"Screen1TopGithub"} style={{
             color:"white",
             position:"absolute",
             top:30,
             left:20,
             textDecoration:"none"
         }}><div className={"Screen1TopGithubName"}>
             @ Infinite Null
         </div>
             <div className={"Screen1TopName"}>
                 @ Ankit Kumar Shah
             </div>
         </a>
       <div style={{
           height:"100%",
           width:"100%",
           display:"flex",
           alignItems:"center",
           justifyContent:"center",
       }}>
           <Left/>
           <Right/>
           <div className={"Screen1BottomMarquee"}>
               <Marquee autoFill={true} speed={120}>
                   &nbsp;&nbsp;Ankit Kumar Shah -
               </Marquee>
               <div className={"Screen1BottomInfo"} style={{
                   fontSize:"18px",
                   paddingLeft:"10px",
                   width:"100vw"
               }}>
                   <div>
                       Freelancer<br/>
                       Application & Full Stack Web Developer
                   </div>
                   <img src={Earth} alt={"n"} style={{
                       height:100,

                   }}/>
               </div>
           </div>
       </div>
        </div>
    )
}
