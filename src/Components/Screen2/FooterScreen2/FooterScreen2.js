import React from 'react'
import "./FooterScreen2.css"
import Me from "../../../assets/mepro.jpeg"
import Tilt from 'react-parallax-tilt'
export default function FooterScreen2() {
  return (
    <div style={{
        height:"110vh",
        backgroundColor:"rgba(0,0,0,0.9)",
    }}>
      <div style={{
        height:"100px"
      }}></div>
      <div className='Screen2FooterContainer'>
        <div className='LetsWorkScreen2'><img className='MyImageFooter' src={Me} alt='me'/><span style={{
          marginLeft:"10px"
        }}>Let's Work</span></div>
        <div className='TogatherScreen2'>Together
        <Tilt tiltEnable={true} tiltReverse={true} transitionSpeed={2000} scale={1} perspective={160} className='CircularTiltGetInTouch'>
        <button className='CircularButtonGetInTouch'>  
            Get In Touch
        </button></Tilt>
        </div>
      </div>


      <div className='Screen2FooterInfo'>
          <span >ankit.kum.sha9933@gmail.com</span>
          <span >+91 7478856289</span>
      </div>
    </div>
  )
}
