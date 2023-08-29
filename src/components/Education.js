import React from 'react'

export default function Education() {
  return (
    <div id='education'>
       <div class="section-title container" style={{textAlign:"initial" , marginTop:"50px"}}>
        <h2>Education</h2>
       </div>
       <div className='education' style={{display:"flex" , justifyContent:"space-evenly" }}>
       <div>

        <div class="card container"  style={{marginTop:"50px" , backgroundColor: "rgb(255 207 207)"}}>
            <h5 class="card-header">Class 10'th</h5>
            <div class="card-body">
                <h5 class="card-title">I secured 77% in my 10th-grade examinations</h5>
            </div>
        </div> 

        <div class="card container" style={{marginTop:"50px", backgroundColor: "rgb(255 207 207)"}}>
            <h5 class="card-header">Class 12'th</h5>
            <div class="card-body">
                <h5 class="card-title">Science Stream with Maths</h5>
                <p class="card-text">I secured an impressive 82% in my 12th-grade examinations, completing them in the Science stream with Mathematics.</p>
            </div>
        </div> 

        <div class="card container" style={{marginTop:"50px", backgroundColor: "rgb(255 207 207)"}}>
            <h5 class="card-header">Bachelors</h5>
            <div class="card-body">
                <h5 class="card-title">In Robotics and Automation Engineering</h5>
                <p class="card-text">Still pursuing this and succesfully completed the first year in this feild</p>
            </div>
        </div> 

        </div>
        <div className='img'>
        <img src='https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-studying-clipart-young-boy-reading-at-the-table-in-flat-design-vector-png-image_6825675.png' style={{width:"100%" , height:"100%"}}/>
        </div>
       </div>
    </div>
  )
}
