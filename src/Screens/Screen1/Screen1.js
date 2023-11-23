import "./Screen1.css"
import {Left} from "./Left";
import {Right} from "./Right";
import Marquee from "react-fast-marquee";
import Earth from "../../assets/earth.gif"
import {motion} from "framer-motion";
import {AnimationLayout} from "../../Layouts/AnimationLayout";

export const Screen1 = () => {
    return (
        <AnimationLayout name={"Home"}>
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
                            {"Ankit Kumar Shah -".split(" ").map((e,i)=><motion.div initial={{
                                y:200,
                                opacity:0
                            }} animate={{
                                y:0,
                                opacity:1,
                                transition: {duration: 0.8, ease: [0.9, 0, 0.24, 1], delay: 0.8}
                            }}  key={i}>{e} &nbsp;</motion.div>)}
                        </Marquee>
                        <motion.div initial={{
                            y:200,
                            opacity:0
                        }} animate={{
                            y:0,
                            opacity:1,
                            transition: {duration: 0.8, ease: [0.9, 0, 0.24, 1], delay: 0.8}
                        }} className={"Screen1BottomInfo"} style={{
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
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimationLayout>
    )
}
