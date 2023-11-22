import {NavBar} from "../../Components/NavBar/NavBar";
import myImage from "../../assets/mepro(1).png"
import {Left} from "./Left";
import {Right} from "./Right";
import Marquee from "react-fast-marquee";
export const Screen1 = () => {
    return (
        <div style={{
            height:"100vh",
            width:"100vw",
        }}>
         <div style={{
             color:"white",
             position:"absolute",
             top:30,
             left:20
         }}>@Infinite Null</div>
        <NavBar/>
       <div style={{
           height:"100%",
           width:"100%",
           display:"flex",
           alignItems:"center",
           justifyContent:"center",
       }}>
           <Left/>
           <Right/>
           <div style={{
               position:"absolute",
               bottom:0,
               color:"white",
               fontSize:"200px"
           }}>
               <Marquee autoFill={true} speed={120}>
                   &nbsp;&nbsp;Ankit Kumar Shah -
               </Marquee>
           </div>
       </div>
        </div>
    )
}
