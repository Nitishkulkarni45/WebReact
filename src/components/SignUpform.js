import React from 'react'
import "./SignUp.css";
import img1 from "./../assets/Cheers.png";

function SignUpform() {
  return (
    <div className='SignUpFormContainer'>
      <div className="immmm"></div>
      <img src={img1} alt="fdasc" />
      <div className="originform">
        <input type="text" placeholder='First Name:' />
        <input type="text" placeholder='Last Name:' />
        <input type="email" placeholder='Email:' />
        <input type="password" placeholder='Password' />
        <div className="submitt">
        <button>Sign Up</button>
        <a href="/">Already have an account?</a>
        </div>
       
      </div>
    </div>
  )
}

export default SignUpform