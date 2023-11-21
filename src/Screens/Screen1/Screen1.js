import {NavBar} from "../../Components/NavBar/NavBar";
import myImage from "../../assets/mepro(1).png"
import {Left} from "./Left";
import {Right} from "./Right";
export const Screen1 = () => {
    return (
        <div style={{
            height:"100vh",
            width:"100vw",
            backgroundColor:"rgba(0,0,0,0.29)"
        }}>
        <NavBar/>
       <div style={{
           height:"100%",
           width:"100%",
           display:"flex",
           alignItems:"center",
           justifyContent:"center"
       }}>
           <Left/>
           <img src={myImage} style={{
               height:"100%",
               width:"900px",
               objectFit:"cover",
           }}/>
           <Right/>
       </div>
        </div>
    )
}
