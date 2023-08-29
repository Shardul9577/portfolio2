import React from 'react'

export default function Experience() {
  return ( 
    <div id='experience' >
       <div class="section-title container" style={{textAlign:"initial" , marginTop:"50px"}}>
        <h2>Experience</h2>
       </div>
       <div className='main' style={{display:"flex" , justifyContent:"space-evenly" }}>
       <div className='img'>
       <img src='https://cdn-icons-png.flaticon.com/512/6214/6214253.png' style={{width:"80%" , height:"80%"}}/>
       </div>
       <div style={{marginTop:"80PX"}}>

        <div class="card container"  style={{marginTop:"50px" , backgroundColor: "rgb(255 207 207)"}}>
            <h5 class="card-header">Intern At IIT BOMBAY</h5>
            <div class="card-body">
                <h5 class="card-title">So I am appointed as Campus Executive.</h5>
            </div>
        </div>

        <div class="card container" style={{marginTop:"50px", backgroundColor: "rgb(255 207 207)"}}>
            <h5 class="card-header">Social Media Manager</h5>
            <div class="card-body">
                <h5 class="card-title">I am a Social Media Manager at Ecell GecG</h5>
            </div>
        </div> 
        <div class="card container" style={{marginTop:"50px", backgroundColor: "rgb(255 207 207)"}}>
            <h5 class="card-header">Web Development Mentor</h5>
            <div class="card-body">
                <h5 class="card-title">I was a Web Dev Mentor at While Technologies</h5>
            </div>
        </div> 

        </div>
       </div>
    </div>
  )
}
