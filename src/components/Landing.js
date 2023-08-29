import React, { useEffect } from 'react'
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Landing() {

  useEffect(()=>{
     
    const typed = new Typed(".auto",{
      strings:['Web Developer' , 'Content Creator' , 'Freelancer'],
      typeSpeed:150,
      backSpeed:150,
      loop:true
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };

  },[])

  return (
    <>
    <div id='hero' data-aos="zoom-in" >
      <div data-aos="slide-right" data-aos-delay="110"s>
      <h1 style={{color:"white"}}>Shardul Chaudhary</h1>
      <p style={{ color:"white"}} >I'm <span className='auto'></span></p>
      </div>
    </div>
    </>
  )
}
