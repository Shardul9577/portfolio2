import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Paper } from '@mui/material';

export default function Testimonials() {
  return (
    <>
    <div id='reviews' className='container '>
      <Paper elevation={3} style={{marginTop:"35px" ,backgroundColor: "rgb(255 207 207)", borderRadius:"20px"}} data-aos="flip-up">
      <div class="section-title container">
          <h2 style={{textAlign:"initial"}} >Reviews</h2>
    </div>
     <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style={{backgroundColor:"black"}}></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" style={{backgroundColor:"black"}}></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" style={{backgroundColor:"black"}}></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div style={{ display:"flex" , justifyContent:"center" , marginBottom:"120px" }}>
    <Avatar src="/broken-image.jpg" style={{width:"260px" , height:"260px" }} />
    </div>
      <div className='carousel-caption d-none d-md-block'>
        <h5 style={{color:"black"}}>Manav Chaudhary</h5>
        <p style={{color:"black"}}>Shardul is best at the skills of frontend web devlopment.</p>
      </div>
    </div>
    <div class="carousel-item">
    <div style={{ display:"flex" , justifyContent:"center", marginBottom:"120px"  }}>
    <Avatar src="/broken-image.jpg" style={{width:"260px" , height:"260px" }} />
    </div>
      <div className='carousel-caption d-none d-md-block'>
        <h5 style={{color:"black"}} >Shagun Mahajan</h5>
        <p style={{color:"black"}}>Shardul is very good at the skills of content writing.</p>
      </div>
    </div>
    <div class="carousel-item">
    <div style={{ display:"flex" , justifyContent:"center" , marginBottom:"120px" }}>
    <Avatar src="/broken-image.jpg" style={{width:"260px" , height:"260px" }} />
    </div>
      <div className='carousel-caption d-none d-md-block'>
        <h5 style={{color:"black"}}>Aaditya Chaturvedi</h5>
        <p style={{color:"black"}}>Shardul is best at social media management and social media writing.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:"black", borderRadius:"60px"}}></span>
    <span class="visually-hidden" style={{color:"black"}}>Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:"black", borderRadius:"60px"}}></span>
    <span class="visually-hidden" style={{color:"black"}}>Next</span>
  </button>
    </div> 
    </Paper>
    </div>
    </>
  )
}
