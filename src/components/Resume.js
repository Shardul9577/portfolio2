import { Paper } from '@mui/material'
import React from 'react'

export default function Resume() {
  return (
    <div id='resume' className='container'>
    <Paper elevation={3} style={{marginTop:"50px" , backgroundColor: "rgb(255 207 207)", borderRadius:"20px"}}>
    <section id="resume" class="resume">
      <div class="container">
        <div class="section-title">
          <h2 style={{textAlign:"initial"}} >Resume</h2>
          <p style={{textAlign:"initial"}} >I'm Shardul M Chaudhary, an 18-year-old Frontend Web Developer, Social Media Manager, and Robotics and Automation Engineering student at Government Engineering College, Gandhinagar, also interning at IIT Bombay.</p>
        </div>
        <div class="row">
          <div class="col-lg-6" data-aos="zoom-in">
            <h3 class="resume-title" style={{textAlign:"initial"}} >Sumary</h3>
            <div class="resume-item pb-0">
              <h4 style={{textAlign:"initial"}} >Shardul Chaudhary</h4>
              <p style={{textAlign:"initial"}} ><em>I'm Shardul M Chaudhary, an 18-year-old Frontend Web Developer, Social Media Manager, and Robotics and Automation Engineering student at Government Engineering College, Gandhinagar, also interning at IIT Bombay.</em></p>
              <ul>
                <li style={{textAlign:"initial"}} >Mehesana , Gujrat</li>
                <li style={{textAlign:"initial"}} >+91 7801826550</li>
                <li style={{textAlign:"initial"}} >ashardul1210@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title" style={{textAlign:"initial"}} >Education</h3>
            <div class="resume-item">
              <h4 style={{textAlign:"initial"}} >Class 12'th</h4>
              <h5 style={{textAlign:"initial"}} >2022</h5>
              <p style={{textAlign:"initial"}} ><em>Kendriya Vidhyalay , Mehesana.</em></p>
              <p style={{textAlign:"initial"}} >I secured an impressive 82% in my 12th-grade examinations, completing them in the Science stream with Mathematics.</p>
            </div>
            <div class="resume-item">
              <h4 style={{textAlign:"initial"}} >Bachelor of Robotics &amp; Automation Engineering</h4>
              <h5 style={{textAlign:"initial"}} >2022 - 2026</h5>
              <p style={{textAlign:"initial"}} ><em>Government Engineering College Gandhinagar , Gujarat.</em></p>
              <p style={{textAlign:"initial"}} >I successfully concluded my first year of Robotics and Automation studies with safety and determination.</p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <h3 class="resume-title" style={{textAlign:"initial"}} >Professional Experience</h3>
            <div class="resume-item">
              <h4 style={{textAlign:"initial"}} >Social Media Manager</h4>
              <h5 style={{textAlign:"initial"}} >2023 - Present</h5>
              <p style={{textAlign:"initial"}} ><em>Social Media Manager at Ecell GecG</em></p>
              <ul>
                <li style={{textAlign:"initial"}} >
                  My social media writing expertise revolves around crafting engaging and compelling content that resonates with diverse audiences, fostering meaningful connections and interactions.</li>
                <li style={{textAlign:"initial"}} > I adeptly blend creativity with strategic communication, ensuring messages are not only impactful but also aligned with the brand's objectives and voice.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4 style={{textAlign:"initial"}} >Web dev Mentor</h4>
              <h5 style={{textAlign:"initial"}} >2023 =>[MAY - JULY]</h5>
              <p style={{textAlign:"initial"}} ><em>At While Technologies</em></p>
              <ul>
                <li style={{textAlign:"initial"}} >In the realm of web development, my prowess lies in frontend development, where I skillfully utilize technologies like React JS, Next JS, and Vanilla JS to create seamless and visually captivating user interfaces.</li>
                <li style={{textAlign:"initial"}} > Additionally, my proficiency extends to frameworks like Bootstrap and Material UI, enabling me to design responsive and user-centric websites with a keen eye for detail.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>  
    </Paper>
    </div>
  )
}
