import { Paper } from '@mui/material'
import React from 'react'
import './Projects.module.css'

const fadeIn = (event)=>{
   event.target.style.opacity = 1
   event.target.style.transition = "opacity 0.5s"
}
const fadeOut = (event)=>{
   event.target.style.opacity = 0
   event.target.style.transition = "opacity 0.4s"
}

export default function Projects() {
  return (
    <div id='projects' className='container'>
      <div className='section-title container' style={{marginTop:"50px" , textAlign:"initial"  }} >
         <h2>Projects</h2>
      </div>
      <div className='row container' style={{marginTop:"20px"}}>

      <div class="card text-bg-dark container" style={{borderRadius:"20px" , border:"4px solid white"}}>
          <h2 style={{textAlign:"initial"}}>Baznazar</h2>
          <img src="assets/img/Proj1.jpg" class="card-img" alt="..." style={{width:"100%" , height:"100%"}}></img>
          <div onMouseOver={fadeIn} onMouseLeave={fadeOut} >
          <p className='container' style={{ marginTop:"10px" , backgroundColor:"#742271" , border:"2px solid white" , borderRadius:"20px" , fontSize:"12px"}}>Introducing "Baznazar" – your ultimate news web app. Stay updated with daily news articles spanning diverse topics such as business, health, sports, technology, entertainment, science, and general news. With the convenience of infinite scroll, you'll have access to a continuous stream of information. Baznazar aggregates news from various reputable sources, offering you a comprehensive view of current events. Log in to Baznazar for a one-stop solution to your daily news needs, including essential geopolitical updates</p>
          <p className='container' style={{textAlign:"initial" , marginTop:"10px" , backgroundColor:"#742271" , border:"2px solid white" , borderRadius:"20px" }}>
          
            <ul style={{display:"flex" , justifyContent:"space-evenly"}}>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-html5 fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-css3-alt fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-square-js fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-react fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-bootstrap fa-2xl"></i></li>
            </ul>
          </p>
          </div>
      </div> 

      </div>
      <div className='row container' style={{marginTop:"20px"}}>

      <div class="card text-bg-dark container" style={{borderRadius:"20px" , border:"4px solid white"}}>
          <h2 style={{textAlign:"initial"}}>TEXT APP</h2>
          <img src="assets/img/Proj4.jpg" class="card-img" alt="..." style={{width:"100%" , height:"100%"}}></img>
          <div onMouseOver={fadeIn} onMouseLeave={fadeOut} >
          <p className='container' style={{ marginTop:"10px" , backgroundColor:"#742271" , border:"2px solid white" , borderRadius:"20px" , fontSize:"12px"}}>
Introducing TextUtils, the versatile text manipulation app that puts you in control. With TextUtils, you have the power to tailor your text precisely to your requirements. You can seamlessly transform text to uppercase for an impactful statement or to lowercase for a more casual vibe. Rid your text of excess spaces with the click of a button, ensuring clarity and neatness.

But that's not all – TextUtils offers a suite of advanced features. Wondering about your text's composition? Just paste it in, and TextUtils will tell you the word count, character count, sentence count, and paragraph count in an instant. And for those on the go, TextUtils even estimates how long it will take to read the entire passage.

TextUtils isn't just about editing; it's about empowering you to harness the potential of your text. Whether you're composing an essay, crafting a message, or working on a document, TextUtils is your partner in achieving text perfection.</p>
          <p className='container' style={{textAlign:"initial" , marginTop:"10px" , backgroundColor:"#742271" , border:"2px solid white" , borderRadius:"20px" }}>
          
            <ul style={{display:"flex" , justifyContent:"space-evenly"}}>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-html5 fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-css3-alt fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-square-js fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-react fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-bootstrap fa-2xl"></i></li>
            </ul>
          </p>
          </div>
      </div>      
      </div>
      <div className='row container' style={{marginTop:"20px"}}>

      <div class="card text-bg-dark container" style={{borderRadius:"20px" , border:"4px solid white"}}>
          <h2 style={{textAlign:"initial"}}>FOOD APP</h2>
          <img src="assets/img/Proj2.jpg" class="card-img" alt="..." style={{width:"100%" , height:"100%"}}></img>
          <div onMouseOver={fadeIn} onMouseLeave={fadeOut} >
          <p className='container' style={{ marginTop:"10px" , backgroundColor:"#742271" , border:"2px solid white" , borderRadius:"20px" , fontSize:"12px"}}>
Introducing our Food Delivery App – your gateway to a seamless dining experience, right at your fingertips. With a singular goal of bringing deliciousness to your doorstep, our app simplifies food delivery like never before.

Picture this: you're craving your favorite meal from a local restaurant. Instead of the hassle of going out, just open our app on your mobile device. Browse through an enticing array of food items, each a delectable masterpiece waiting to be savored. Once you've made your choices, effortlessly add them to your cart. The cart is your culinary canvas; feel free to tweak your order until it's absolutely perfect.

Ready to proceed? A few taps, and you're prompted to fill in your details. Address, contact information – just the basics we need to find you and ensure timely delivery. The cherry on top? We've integrated a secure payment system, allowing you to settle the bill right then and there. It's the epitome of convenience, with no need to scramble for cash or cards.

In a world where time is of the essence, our Food Delivery App redefines dining. Satisfy your cravings, support local eateries, and relish the flavors of your choice – all with the simplicity of a single tap. Enjoy the art of dining, delivered.</p>
          <p className='container' style={{textAlign:"initial" , marginTop:"10px" , backgroundColor:"#742271" , border:"2px solid white" , borderRadius:"20px" }}>
          
            <ul style={{display:"flex" , justifyContent:"space-evenly"}}>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-html5 fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-css3-alt fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-square-js fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-react fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-bootstrap fa-2xl"></i></li>
            </ul>
          </p>
          </div>
      </div>      
      </div>
      <div className='row container' style={{marginTop:"20px"}}>

      <div class="card text-bg-dark container" style={{borderRadius:"20px" , border:"4px solid white"}}>
          <h2 style={{textAlign:"initial"}}>SPOTIFY CLONE</h2>
          <img src="assets/img/Proj3.jpg" class="card-img" alt="..." style={{width:"100%" , height:"100%"}}></img>
          <div onMouseOver={fadeIn} onMouseLeave={fadeOut} >
          <p className='container' style={{ marginTop:"10px" , backgroundColor:"#742271" , border:"2px solid white" , borderRadius:"20px" , fontSize:"12px"}}>Introducing my debut React project: a fully functional Spotify clone. With meticulous attention to detail, I've managed to recreate the essence of Spotify's user interface and functionality. Users will find themselves navigating through a familiar environment that mirrors the beloved music streaming platform.

My Spotify clone allows users to log in securely, bringing their personalized music experience to life.</p>
          <p className='container' style={{textAlign:"initial" , marginTop:"10px" , backgroundColor:"#742271" , border:"2px solid white" , borderRadius:"20px" }}>
          
            <ul style={{display:"flex" , justifyContent:"space-evenly"}}>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-html5 fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-css3-alt fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-square-js fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-react fa-2xl"></i></li>
              <li style={{listStyle:"none", paddingTop:"10px"}}><i class="fa-brands fa-bootstrap fa-2xl"></i></li>
            </ul>
          </p>
          </div>
      </div>      
      </div>
 
    </div>
  )
}
