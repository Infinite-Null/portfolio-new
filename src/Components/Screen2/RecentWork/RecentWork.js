import "./RecentWork.css"
import {motion} from "framer-motion";
import Tilt from "react-parallax-tilt";

export const RecentWork = () => {
    const Works = [
        {
            name:"Out Of Kind",
            image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg",
            scope:"Full Stack"
        },
        {
            name:"Wallpaper",
            image:"https://imgv3.fotor.com/images/blog-richtext-image/walli-wallpaper-app.png",
            scope:"Application"
        },
        {
            name:"Weather",
            image:"https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg",
            scope:"Application"
        },
    ]
    return (
        <div style={{
            width:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"
        }}>
            <div className={"TitleScreen2Work"}>
                    Recent
            </div>
            {Works.map((e,i)=><EachWorkComponent name={e.name} image={e.image} scope={e.scope} key={i} index={i}/>)}
            <Tilt tiltEnable={true}  transitionSpeed={3000}  perspective={180} tiltReverse={true} style={{
                padding:2
            }}>
            <button className={"Screen2WorkButton"}>More Work</button>
            </Tilt>
        </div>
    )
}
function EachWorkComponent({name,scope,image,index}){
    return<div className={"Screen2EachWorkComponent"}>
        <motion.h1 key={index} initial={{
            y:50,
            opacity:0
        }} whileInView={{
            y:0,opacity:1,transition: {duration: 0.5, delay: 0.01}
        }}>{name}<p key={index*2*Math.random()}>View ></p></motion.h1>
        <motion.p key={index+Math.random()} initial={{
            y:50,
            opacity:0
        }} whileInView={{
            y:0,opacity:1,transition: {duration: 0.5, delay: 0.01}
        }}>{scope}</motion.p>
        <img alt={"img"} src={image}/>
    </div>
}
