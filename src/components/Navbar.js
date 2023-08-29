import React from 'react'
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

export default function Navbar() {
  return (
    <div>
<nav class="navbar navbar-dark fixed-top"  style={{ backgroundColor:"#ff8f0063"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <IconButton sx={{ p: 0 }}>
       <Avatar alt="Remy Sharp" src="assets/img/logo-2.jpg"/>
      </IconButton>
    </a>
    <button class="navbar-toggler"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" style={{color:"black"}}></span>
    </button>
    <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel"   style={{backgroundColor:"#ff8f0063"}}>

      <div style={{textAlign:"end" , marginTop:"10px" , marginRight:"10px"}}>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" style={{color:"black"}}></button>
      </div>

      <div class="offcanvas-header" style={{display:"flex" , justifyContent:"space-between"}}>
      <div className='profile container' style={{textAlign:"center"}}>
        <div style={{display:"flex" , justifyContent:"center"}}>
        <Avatar src="assets/img/logo-2.jpg" style={{width:"70px" , height:"70px"}}/>
        </div>
        <h4 style={{marginTop:"15px" , color:"white"}}>Shardul Chaudhary</h4>
        <p><a href='https://www.instagram.com/_shardul_1210/'><i class="fa-brands fa-instagram" style={{color:"white" , marginRight:"10px" }}></i></a> <a href='https://www.linkedin.com/in/shardul-chaudhary-bab4b0260/'><i class="fa-brands fa-linkedin" style={{color:"white"}}></i></a> <a href='https://www.shardul1210@gmail.com'><i class="fa-solid fa-envelope" style={{color:"white", marginLeft:"10px"}}></i></a></p>
        </div>
      </div>

      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}><i class="fa-solid fa-house" style={{marginRight:"10px" , color:"white"}}></i> Home</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link scrollto active" style={{color:"white"}}><i class="fa-solid fa-user" style={{marginRight:"10px", color:"white"}}></i> About</a>
          </li>
          <li class="nav-item">
            <a href="#facts" class="nav-link scrollto active" style={{color:"white"}}><i class="fa-solid fa-industry" style={{marginRight:"10px", color:"white"}}></i> Facts</a>
          </li>
          <li class="nav-item">
            <a href="#skills" class="nav-link scrollto active" style={{color:"white"}}><i class="fa-solid fa-computer" style={{marginRight:"10px", color:"white"}}></i> Skills</a>
          </li>
          <li class="nav-item">
            <a href="#education" class="nav-link scrollto active" style={{color:"white"}}><i class="fa-solid fa-book" style={{color:"white"}}></i> Education</a>
          </li>
          <li class="nav-item">
            <a href="#experience" class="nav-link scrollto active" style={{color:"white"}}><i class="fa-solid fa-clock" style={{color:"white"}}></i> Experience</a>
          </li>
          <li class="nav-item">
            <a href="#projects" class="nav-link scrollto active" style={{color:"white"}}><i class="fa-regular fa-file" style={{color:"white"}}></i> Projects</a>
          </li>
          <li class="nav-item">
            <a href="#resume" class="nav-link scrollto active" style={{color:"white"}}><i class="fa-solid fa-file" style={{marginRight:"8px" , marginLeft:"16px" ,color:"white"}}></i> Resume</a>
          </li>
          <li class="nav-item">
            <a href="#services" class="nav-link scrollto active" style={{color:"white"}}><i class="fa-solid fa-database" style={{marginRight:"10px", marginLeft:"20px",color:"white"}}></i> Services</a>
          </li>
          <li class="nav-item">
            <a href="#reviews" class="nav-link scrollto active" style={{color:"white"}}><i class="fa-solid fa-magnifying-glass" style={{marginRight:"10px", marginLeft:"20px",color:"white"}}></i> Reviews</a>
          </li>
          <li class="nav-item">
            <a href="#contacts" class="nav-link scrollto active" style={{color:"white"}}><i class="fa-solid fa-address-book" style={{marginRight:"10px", marginLeft:"22px",color:"white"}}></i> Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
