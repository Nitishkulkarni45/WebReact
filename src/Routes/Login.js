import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Login.css";


function Login() {
  const [IsEyeOpen, setIsEyeOpen] = useState(false);
  const [username, Setusername] = useState('');
  const [password, Setpassword] = useState('');
  const passEnable = () => {
    setIsEyeOpen(!IsEyeOpen);
  };
  const handleSubmit = () => {
   const trimmedusername = username.trim();
   const trimmedpassword = password.trim();

   if(trimmedusername === "" || trimmedpassword === ""){
    alert("Enter a username and password");
   }
   else{
    window.location.href = "/home";
   }
   
  }

  const toSignUp = ()=>{
    window.location.href = "/SignUp";
  }


  return (
    <div className="Main-cont-1">
      <div className="back-Ground"></div>
      <div className="ccontainer">
        <div className="enterName">
          <div className="mainMainName">
            <div className="nameMain">E-mail Id/ Mobile number</div>
            <input
              type="text"
              id="userName-1"
              placeholder="Username, E-mail or Mobile number"
              onChange={(e)=>Setusername(e.target.value)}
              />
          </div>
        </div>
        <div className="enterPass">
          <div className="mainMainPass">
            <div className="passMain">Password</div>
            <input
              type={IsEyeOpen ? "text" : "password"}
              id="Password-1"
              placeholder="Enter your password"
              onChange={(e)=>Setpassword(e.target.value)}
            />
            <button className="eye" onSubmit={passEnable}>
              <i
                class={`bi ${IsEyeOpen ? "bi-eye-fill" : "bi-eye-slash-fill"}`}
              ></i>
            </button>
          </div>
        </div>
        <div className="login-but">
          <button  className="logBut"  onClick={handleSubmit}>Login</button>
        </div>
        <div className="login-but">
          <button className="logBut-12" onClick={toSignUp}>Sign Up</button>
        </div>
        <div className="rememberPasss">
          <div className="remMainPass">
            <input type="checkbox" id="rememberPass" />
            <div className="remMainPassText">Keep me signed in</div>
          </div>
        </div>
        <div className="main-forget">
          <div className="forgetPass"><Link>Forgot Password?</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
