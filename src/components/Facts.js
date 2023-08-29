import { Paper } from '@mui/material'
import React from 'react'

export default function Facts() {
  return (
    <div id='facts' style={{marginTop:"50px"}}>
      <section id="facts" class="facts">
      <div class="container">

        <div class="section-title">
          <h2 style={{textAlign:"initial" , color:"black"}}>Facts</h2>
          <p style={{textAlign:"initial" , color:"black"}}>
I am a multi-talented enthusiast excelling in web development and content creation, while also being a dedicated engineering student. My skills encompass proficiency in various areas, making me a versatile and accomplished individual.</p>
        </div>

        <div class="row no-gutters">

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
          <Paper elevation={2} style={{ backgroundColor: "rgb(255 207 207)", marginTop:"10px" , borderRadius:"20px"}}>
            <div class="count-box">
            <i class="fa-regular fa-face-smile" style={{marginTop:"20px"}}></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
              <p style={{textAlign:"initial"}}><strong>Multi-Talented Enthusiast</strong></p>
            </div>
          </Paper>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
          <Paper elevation={2} style={{ backgroundColor: "rgb(255 207 207)", marginTop:"10px" , borderRadius:"20px"}}>
            <div class="count-box">
            <i class="fa-solid fa-sitemap"  style={{marginTop:"20px"}}></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
              <p style={{textAlign:"initial"}}><strong>Proficient Web Developer</strong></p>
            </div>
          </Paper>
          </div>

          
          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
          <Paper elevation={2} style={{ backgroundColor: "rgb(255 207 207)", marginTop:"10px" , borderRadius:"20px"}}>
            <div class="count-box">
              <i class="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
              <p style={{textAlign:"initial"}}><strong>Skilled Content Creator</strong></p>
            </div>
            </Paper>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
          <Paper  elevation={2} style={{ backgroundColor: "rgb(255 207 207)", marginTop:"10px" , borderRadius:"20px"}}>
            <div class="count-box">
            <i class="fa-solid fa-graduation-cap"   style={{marginTop:"20px"}}></i>
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
              <p style={{textAlign:"initial"}}><strong>Engineering Student</strong></p>
            </div>
          </Paper>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}
