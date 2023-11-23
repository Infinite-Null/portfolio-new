import {motion} from "framer-motion";

export const AnimationLayout = (props) => {
    return (
        <>
            <motion.div initial={{
                y:0
            }} animate={{
                y:"-100%",
                transition:{delay:0.5,duration:1.2,ease: [0.9, 0, 0.24, 1]}
            }} style={{
                height:"100vh",
                width:"100vw",
                position:"absolute",
                backgroundColor:"rgb(24,24,24)",
                zIndex:"10000000000000000000",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <motion.h1 initial={{
                    y:100,
                    opacity:0
                }} animate={{
                    y:0,
                    opacity:1,
                    transition:{duration:0.5,ease: [0.9, 0, 0.24, 1]}
                }} style={{
                    color:"white"
                }}>{"• "+props.name}</motion.h1>
            </motion.div>
            {props.children}
        </>
    )
}
