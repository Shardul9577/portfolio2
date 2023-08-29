import { Paper } from '@mui/material'
import React from 'react'

export default function Skills() {
  return (
    <div id='skills' className='container' style={{marginTop:"50px", borderRadius:"20px" }}>
    <Paper elevation={3} style={{borderRadius:"20px" }}>
    <section id="skills" class="skills section-bg"  style={{ backgroundColor: "rgb(255 207 207)",borderRadius:"20px" }}>
      <div class="container">

        <div class="section-title">
          <h2 style={{textAlign:"initial"}} data-aos="zoom-in">Skills</h2>
          <p style={{textAlign:"initial"}} data-aos="zoom-in">
I bring expertise in a range of languages including React JS, Next JS, TypeScript, HTML, CSS, and Vanilla JS. I am skilled in frameworks like Bootstrap and Material UI, while also excelling in crafting engaging content for social media platforms.</p>
        </div>

        <div class="row skills-content">

          <div class="col-lg-6" data-aos="zoom-in">

            <div class="progress">
              <span class="skill" style={{textAlign:"initial"}} data-aos="fade-in">HTML <i class="val">100%</i></span>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" data-aos="slide-right" style={{width: "100%"}}></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill" style={{textAlign:"initial"}} data-aos="fade-in">CSS <i class="val">90%</i></span>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" data-aos="slide-right" style={{width: "90%"}}></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill" style={{textAlign:"initial"}} data-aos="fade-in">JavaScript <i class="val">75%</i></span>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" data-aos="slide-right" style={{width: "75%"}}></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill" style={{textAlign:"initial"}} data-aos="fade-in">Social Media Writing<i class="val">65%</i></span>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" data-aos="slide-right" style={{width: "65%"}}></div>
              </div>
            </div>

          </div>

          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">

            <div class="progress">
              <span class="skill" style={{textAlign:"initial"}} data-aos="fade-in">React JS<i class="val">80%</i></span>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" data-aos="slide-right" style={{width: "80%"}}></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill" style={{textAlign:"initial"}} data-aos="fade-in">TypeScript<i class="val">60%</i></span>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" data-aos="slide-right"  style={{width: "60%"}}></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill" style={{textAlign:"initial"}} data-aos="fade-in">Next Js <i class="val">75%</i></span>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" data-aos="slide-right" style={{width: "75%"}}></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill" style={{textAlign:"initial"}} data-aos="fade-in">Bootstrap and Material UI<i class="val">100%</i></span>
              <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" data-aos="slide-right" style={{width: "100%"}}></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    </Paper>
    </div>
  )
}
