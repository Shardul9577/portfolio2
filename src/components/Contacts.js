import { Paper } from '@mui/material'
import React from 'react'

export default function Contacts() {
  return (
    <div id='contacts' className='container' style={{marginTop:"50px" , marginBottom:"50px" }} >
      <Paper elevation={3} style={{marginTop:"50px" , backgroundColor: "rgb(255 207 207)", borderRadius:"20px"}} data-aos="fade">
        <div>
      <div class="section-title container">
          <h2 style={{textAlign:"initial"}} >Contacts</h2>
      </div>
      <p className='container' style={{textAlign:"initial", color:"black" , marginTop:"-36px"}}>Should my profile resonate with your needs and aspirations, I invite you to take a moment to fill out the provided form. Your interest in connecting or considering me for any prospective endeavors is greatly appreciated. Your decision to connect or explore potential collaborations holds the promise of a mutually rewarding partnership.</p>
      </div>
      <form action="https://formsubmit.co/shardul1210@gmail.com" method="POST" className='container'>
      <div class="row">
      <div class="col">
          <input type="text" name='firstname' class="form-control" placeholder="First name" aria-label="First name"/>
        </div>
        <div class="col">
          <input type="text" name='lastname' class="form-control" placeholder="Last name" aria-label="Last name"/>
        </div>
      </div>
      <div class="mb-3" style={{marginTop:"20px"}}>
        <input type="email" name='email' class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div class="row g-3">
        <div class="col">
          <input type="number" name='phone' class="form-control" placeholder="Phone" aria-label="Phone"/>
        </div>
        <div class="col">
          <input type="text" name='profile' class="form-control" placeholder="Linkdin" aria-label="Linkdin"/>
        </div>
      </div>
      <div class="mb-3" style={{marginTop:"20px"}}>
        <textarea class="form-control" name='textarea'  placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="col-12" style={{textAlign:"initial" ,paddingBottom:"16px"}}>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      </form>
      </Paper>
    </div>
  )
}
