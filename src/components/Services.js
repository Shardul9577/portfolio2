import { Paper } from '@mui/material'
import React from 'react'

export default function Services() {
  return (
    <div id='services' className='container'>
      <Paper style={{marginTop:"50px" , backgroundColor: "rgb(255 207 207)", borderRadius:"20px"}}>
       <section id="services" class="services">
      <div class="container">
        <div class="section-title">
          <h2 style={{textAlign:"initial"}} >Services</h2>
          <p style={{textAlign:"initial"}} >My portfolio encompasses a diverse array of professional services, including web development, interactive UI design, content creation, social media management, thumbnail design, and web development mentoring.</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div class="icon"><i class="fa-solid fa-terminal"></i></div>
            <h4 class="title" style={{textAlign:"initial"}} ><a href="">WEB DEVELOPMENT</a></h4>
            <p class="description" style={{textAlign:"initial"}} >As I have learnt some of the languages used to make proffesional websites so I have a great skill set in making websites.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div class="icon"><i class="bi bi-card-checklist"></i></div>
            <h4 class="title" style={{textAlign:"initial"}} ><a href="">INTERACTIVE UI DESIGNES</a></h4>
            <p class="description" style={{textAlign:"initial"}} >As I have achived a great experice with CSS and React JS so over a course of time I have made a great skills which can help you in making great interactive websites.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div class="icon"><i class="bi bi-bar-chart"></i></div>
            <h4 class="title" style={{textAlign:"initial"}} ><a href="">CONTENT CREATOR</a></h4>
            <p class="description" style={{textAlign:"initial"}} >So i am a content creator for a club called ECELL GECG where my main work is to promote Entrepreneurship using my content writing skills.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div class="icon"><i class="fa-solid fa-bars-progress"></i></div>
            <h4 class="title" style={{textAlign:"initial"}} ><a href="">SOCIAL MEDIA MANAGEMENT</a></h4>
            <p class="description" style={{textAlign:"initial"}} >So as i am a content creator for ECELL GECG other than that i also manage the social media accounts of that club.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div class="icon"><i class="fa-solid fa-pen"></i></div>
            <h4 class="title" style={{textAlign:"initial"}}  ><a href="">THUMBNAIL DESIGN</a></h4>
            <p class="description" style={{textAlign:"initial"}} >As to make the post more attractive the various kinds of designing skills are also required and also for yt videos of that club i create thumbnail for that page.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div class="icon"><i class="fa-brands fa-elementor"></i></div>
            <h4 class="title" style={{textAlign:"initial"}} ><a href="">WEB DEVELOPMENT MENTOR</a></h4>
            <p class="description" style={{textAlign:"initial"}} >As I was a part of internship in While technologies then there i was teaching students about frontend Web devlopment.</p>
          </div>
        </div>
      </div>
    </section>
    </Paper>
    </div>
  )
}
