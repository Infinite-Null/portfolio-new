import "./NavBar.css"
import Tilt from 'react-parallax-tilt';
import {useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {AnimatePresence} from "framer-motion";
import { motion } from 'framer-motion';
import {menuSlide} from "../Header/anime";
import {HamburgerLinks} from "./HamburgerLinks";
import {BottomSocial} from "./BottomSocial";

export const NavBar = () => {
    const [isActive, setIsActive] = useState(false);
    const burger = useRef(null)
    const navItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Work",
            href: "/work",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ]
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
               <Tilt tiltEnable={true}  transitionSpeed={3000} scale={1.2} perspective={60} style={{
                   padding:2
               }}>
                   <li>Work</li>
               </Tilt>
               <Tilt tiltEnable={true}  transitionSpeed={3000} scale={1.2} perspective={60} style={{
                   padding:2
               }}>
                   <li>About</li>
               </Tilt>
               <Tilt tiltEnable={true}  transitionSpeed={3000} scale={1.2} perspective={60} style={{
                   padding:2
               }}>
                   <li>Contact</li>
               </Tilt>
           </ul>
           <ul className={"NavBarRightMenuMobile"}>
               <Tilt tiltEnable={true}  transitionSpeed={3000} scale={1.5} perspective={50} style={{
                   padding:2
               }}>
                   <li onClick={()=>{
                       setIsActive(true)
                   }}>Menu</li>
               </Tilt>
           </ul>
          <div ref={burger} style={{
              scale:0,
              position:"fixed",
              right:"20px",
              top:"20px",
              zIndex:"999",
          }}>
              <Tilt tiltEnable={true} tiltReverse={true} transitionSpeed={2000} scale={1.2} perspective={40} style={{
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
                   <Tilt tiltEnable={true}  tiltReverse={true} transitionSpeed={2000} scale={1.2} perspective={40} style={{
                       height:80,
                       width:100,
                       borderRadius:"100%",
                       display:"flex",
                       alignItems:"center",
                       justifyContent:"center",
                       position:"absolute",
                       right:"20px",
                       top:"30px",
                       zIndex:"100000"
                   }}>
                       <button onClick={()=>{
                           setIsActive(false)
                       }} className={"NavBarButton"}><p>x</p></button>
                   </Tilt>
                   <div style={{
                       position:"absolute",
                       top:"90px",
                       color:"gray",
                       borderBottom:"1px solid gray",
                       width:"80%",
                       marginLeft:"20px",
                       padding:"20px"
                   }}>
                       Navigation
                   </div>
                       {navItems.map((e,i)=><HamburgerLinks Link={e.href} Name={e.title} key={i} index={i}/>)}
                   <BottomSocial/>
                   </motion.div>}
           </motion.div>}
           </AnimatePresence>
       </>
    )
}
