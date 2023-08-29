import { Paper } from '@mui/material';
import * as React from 'react';


export default function About() {
  return (
    <div id='about' className='container' data-aos="fade-up" style={{alignContent:"end" , marginTop:"50px"}}>
    <Paper elevation={10} style={{ backgroundColor: "rgb(255 207 207)", borderRadius:"20px"}}>
       <section id="about" class="about">
      <div class="container">
        <div class="section-title">
          <h2 style={{textAlign:"initial"}}>About</h2>
          <p style={{textAlign:"initial"}}>I am <span style={{color:"#2c00ff"}}>Shardul M Chaudhary</span>, an 18-year-old enthusiast with a strong passion for various pursuits. Professionally, I excel as a <span style={{color:"#2c00ff"}}>Frontend Web Developer</span> and adeptly manage <span style={{color:"#2c00ff"}}>social media platforms</span>. Currently, I am also gaining valuable experience as an <span style={{color:"#2c00ff"}}>intern at IIT Bombay</span>. Alongside these roles, I am pursuing a degree in <span style={{color:"#2c00ff"}}>Robotics and Automation Engineering at Government Engineering College, Gandhinagar</span>.</p>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="slide-up">
            <img src="assets/img/logo.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="slide-up">
            <h3 style={{textAlign:"initial"}} data-aos="zoom-in" >Frontend Web Developer &amp; Social Media Manager.</h3>
            <p class="fst-italic" style={{textAlign:"initial"}} data-aos="zoom-in">I'm Shardul M Chaudhary, an 18-year-old Frontend Web Developer, Social Media Manager, and Robotics and Automation Engineering student at Government Engineering College, Gandhinagar, also interning at IIT Bombay.</p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li data-aos="zoom-in" ><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span style={{color:"#2c00ff"}}>12 october 2004</span></li>
                  <li data-aos="zoom-in"><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span style={{color:"#2c00ff"}}>shardul1210@gmail.com</span></li>
                  <li data-aos="zoom-in"><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span style={{color:"#2c00ff"}}>+917801826550</span></li>
                  <li data-aos="zoom-in"><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span style={{color:"#2c00ff"}}>Mehesana,Gujrat.</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li data-aos="zoom-in"><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span style={{color:"#2c00ff"}}>18</span></li>
                  <li data-aos="zoom-in"><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span style={{color:"#2c00ff"}}>Bachelors in RAA</span></li>
                  <li data-aos="zoom-in"><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span style={{color:"#2c00ff"}}>shardul1210@gmail.com</span></li>
                  <li data-aos="zoom-in"><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span style={{color:"#2c00ff"}}>Available</span></li>
                </ul>
              </div>
            </div>
            <p style={{textAlign:"initial"}} data-aos="zoom-in">
             
I'm Shardul M Chaudhary, and at 18 years old, I'm already deeply engrossed in a range of exciting endeavors. My primary expertise lies in the realm of Frontend Web Development, where I craft engaging and user-friendly digital experiences. Simultaneously, I take on the role of a skilled Social Media Manager, utilizing my knack for effective communication and content strategy to connect and engage with online audiences.

Adding to my accomplishments, I'm thrilled to be contributing as an intern at IIT Bombay, an opportunity that exposes me to cutting-edge research and real-world applications. Amidst all of this, I am diligently pursuing a degree in Robotics and Automation Engineering at Government Engineering College, Gandhinagar, which allows me to explore my passion for technological innovation and problem-solving. My journey embodies a fusion of creativity, technical prowess, and a relentless thirst for knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
    </Paper>
    </div>
  )
}
