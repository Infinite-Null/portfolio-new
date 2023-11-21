import "./NavBar.css"
import Tilt from 'react-parallax-tilt';

export const NavBar = () => {
    return (
        <Tilt tiltEnable={true}  transitionSpeed={2000} scale={1.1} perspective={90} style={{
            height:80,
            width:80,
            position:"fixed",
            right:"20px",
            top:"20px",
            borderRadius:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}>
            <button className={"NavBarButton"}><p>=</p></button>
        </Tilt>
    )
}
