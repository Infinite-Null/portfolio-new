import "./NavBar.css"
import Tilt from 'react-parallax-tilt';
import {useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {AnimatePresence} from "framer-motion";
import { motion } from 'framer-motion';
import {menuSlide} from "../Header/anime";

export const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
    const burger = useRef(null)
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(burger.current,{
            scrollTrigger:{
                trigger: document.documentElement,
                start:0,
                end: 50,
                onLeave:()=>{
                        gsap.to(burger.current,{scale:1})
                },
                onEnterBack:()=>{
                    gsap.to(burger.current,{scale:0})
                }
            }
        })
    }, []);
    return (
       <>
           <ul className={"NavBarRightMenu"}>
               <Tilt tiltEnable={true}  transitionSpeed={3000} scale={1.5} perspective={90} style={{
                   padding:2
               }}>
                   <li>Work</li>
               </Tilt>
               <Tilt tiltEnable={true}  transitionSpeed={3000} scale={1.5} perspective={90} style={{
                   padding:2
               }}>
                   <li>About</li>
               </Tilt>
               <Tilt tiltEnable={true}  transitionSpeed={3000} scale={1.5} perspective={90} style={{
                   padding:2
               }}>
                   <li>Contact</li>
               </Tilt>
           </ul>
          <div ref={burger} style={{
              scale:0,
              position:"fixed",
              right:"20px",
              top:"20px",
              zIndex:"999",
          }}>
              <Tilt tiltEnable={true}  transitionSpeed={3000} scale={1.2} perspective={90} style={{
                  height:80,
                  width:100,
                  borderRadius:"100%",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
              }}>
                  <button onClick={()=>{
                      setIsActive(true)
                  }} className={"NavBarButton"}><p>=</p></button>
              </Tilt>

          </div>
           <AnimatePresence  mode="wait">
           {isActive&&<motion.div key={99} initial={{
               backdropFilter:"blur(0px)"
           }} animate={{
               backdropFilter:"blur(8px)",
               transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
           }} exit={{
                   backdropFilter:"blur(0px)",
                   transition:{duration: 0.8, ease: [0.76, 0, 0.24, 1]}
               }} style={{
               position:"fixed",
               height:"100%",
               width:"100%",
               zIndex:"10000",
           }} onClick={()=>{
               setIsActive(false)
           }}>

                   {isActive&& <motion.div onClick={()=>{
                       setIsActive(false)
                   }} key={100} variants={menuSlide} initial="initial" animate="enter" exit={
                     "exit"
                   } className={"HamburgerMenu"}>

                   </motion.div>}

           </motion.div>}
           </AnimatePresence>
       </>
    )
}
