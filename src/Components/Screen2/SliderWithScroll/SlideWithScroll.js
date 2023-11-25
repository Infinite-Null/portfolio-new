import React, { useRef } from 'react'
import "./SlideWithScroll.css"
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'

export default function SlideWithScroll() {
   const images=[
        "https://res.cloudinary.com/practicaldev/image/fetch/s--4BjMqsdN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4anecy5mdl4pho8w7519.jpg",
        "https://mariosfakiolas.com/uploads/react.jpeg",
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/React_Native_Tutorial.jpg",
        "https://uploads-ssl.webflow.com/5f841209f4e71b2d70034471/60bb4a2e143f632da3e56aea_Flutter%20app%20development%20(2).png",
  ]
  const images2=[
    "https://fossa.com/blog/content/images/2022/03/CC--.png",
    "https://res.cloudinary.com/practicaldev/image/fetch/s--KkP4AuFt--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png",
    "https://www.bigscal.com/wp-content/uploads/2022/09/Features-of-Mern-stack-development-services-You-Should-Know.png",
    "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-social.png"
  ]
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target:container,
    offset:["start end","end start"]
  })
  const x1 = useTransform(scrollYProgress,[0,1],[0,150])
  const x2 = useTransform(scrollYProgress,[0,1],[0,-150])
  const height = useTransform(scrollYProgress,[0,1],[900,50])
  return (
    <>
    <div style={{
      marginTop:'100px',
    }} ref={container} >
    <motion.div style={{x:x1}} className='Screen2SlideWithScroll'>
      {images.map((e,i)=><EachImage src={e} key={i}/>)}
    </motion.div>
    <motion.div style={{x:x2}} className='Screen2SlideWithScroll2'>
      {images2.map((e,i)=><EachImage src={e}/>)}
    </motion.div>
    <motion.div style={{height:height}}  className='CircleContainer'>
        <div className='Circle' style={{
          position:"absolute"
        }}></div>
    </motion.div>
    </div>
    </>
  )
}
function EachImage({src}){
    return <div className='Screen2SlideWithScrollEachImage'>
        <img src={src} alt='no'/>
    </div>
}