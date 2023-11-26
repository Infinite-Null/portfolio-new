import React from 'react'
import "./FooterScreen2.css"
import Me from "../../../assets/mepro.jpeg"
import Tilt from 'react-parallax-tilt'
import { Social } from '../../../Links/SocialMedia';
export default function FooterScreen2() {
  var today = new Date();   


function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
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
       {/* Contact Info  */}
      <div className='Screen2FooterInfo'>
          <span style={{
            cursor:"pointer"
          }} onClick={()=>{
            navigator.clipboard.writeText("ankit.kum.sha9933@gmail.com")
            alert("Email Copied to Clipboard")
          }}>ankit.kum.sha9933@gmail.com</span>
          <span style={{
            cursor:"pointer"
          }} onClick={()=>{
            navigator.clipboard.writeText("7478856289")
            alert("Phone Number Copied to Clipboard")
          }}>+91 7478856289</span>
      </div>
      {/* bottom section */}
      <div className='BottomScreen2Info'>
        <div className='BottomScreen2TimeAndVersion'>
          <EachScreen2Info Heading={"NAME"} Info={"Ankit Kumar Shah"}/>
          <EachScreen2Info Heading={"TIME"} Info={formatAMPM(today)}/>
        </div>

        <div className='BottomScreen2Socials'>
               <h1 style={{
                color:"white"
               }}>SOCIAL</h1>
               <div>
                <a href={Social.Linkedin} target='_blank' rel="noreferrer">Linkedin</a>
                <a rel="noreferrer" target='_blank' href={Social.Instagram}>Instagram</a>
                <a rel="noreferrer" target='_blank' href={Social.Github}>Github</a>
               </div>
          </div>
        </div>
      </div>
  )
}
function EachScreen2Info({Heading,Info}){
  return <div>
    <h1>{Heading}</h1>
    <h1>{Info}</h1>
  </div>
}