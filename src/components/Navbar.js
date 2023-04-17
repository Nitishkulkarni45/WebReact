import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary navi">
     <div className="container-fluid">
      <a class="navbar-brand" href="/">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse Nav-top" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item nov">
            <Link class="nav-link active navb-linker" aria-current="page" to="/"><i class="fa-solid fa-house i"></i>Home</Link>
          </li>
          <li class="nav-item nov">
            <Link class="nav-link navb-linker" to="/About"><i class="fa-solid fa-info i"></i>About</Link>
          </li>
          <li class="nav-item nov">
            <Link class="nav-link navb-linker" to="/Service"><i class="fa-solid fa-briefcase i"></i>Service</Link>
          </li>
          <li class="nav-item nov">
            <Link class="nav-link navb-linker" to="/Contact"><i class="fa-solid fa-address-book i"></i>Contact</Link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
          <div className="signup"><button class="btn btn-outline-black butsignup" type="submit">Sign up</button></div>
          
        </form>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar