import "./NavBar.css"
import Tilt from 'react-parallax-tilt';

export const NavBar = () => {
    return (
       <>
           <ul className={"NavBarRightMenu"}>
            <li>Work</li>
               <li>About</li>
               <li>Contact</li>
           </ul>
           <Tilt tiltEnable={true}  transitionSpeed={3000} scale={1.2} perspective={90} style={{
               height:80,
               width:100,
               position:"fixed",
               right:"20px",
               top:"20px",
               borderRadius:"100%",
               display:"none",
               alignItems:"center",
               justifyContent:"center",
               zIndex:"999",
           }}>
               <button className={"NavBarButton"}><p>=</p></button>
           </Tilt>
       </>
    )
}
