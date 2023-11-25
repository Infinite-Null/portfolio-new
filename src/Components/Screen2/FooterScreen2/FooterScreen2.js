import React from 'react'

export default function FooterScreen2() {
  return (
    <div style={{
        height:"110vh",
        backgroundColor:"rgba(0,0,0,0.9)",
    }}>
      <div style={{
        height:"100px"
      }}></div>
      <div style={{
        color:"white",
        paddingLeft:"10%",
        paddingRight:"10%",
        paddingTop:"5%",
      }}>
        <div style={{
          fontSize:"600%"
        }}><img src='https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg' alt='me' style={{
          height:"60px",
          width:"60px",
          borderRadius:"100%",
          objectFit:"cover"
        }}/><span style={{
          marginLeft:"10px"
        }}>Let's Work</span></div>
        <div style={{
          fontSize:"600%"
        }}>Together</div>
      </div>
    </div>
  )
}
