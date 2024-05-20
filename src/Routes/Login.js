import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [IsEyeOpen, setIsEyeOpen] = useState(false);
  const passEnable = () => {
    setIsEyeOpen(!IsEyeOpen);
  };
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
          />
          <button className="eye" onClick={passEnable}>
            <i
              class={`bi ${IsEyeOpen ? "bi-eye-fill" : "bi-eye-slash-fill"}`}
            ></i>
          </button>
            </div>
       
        </div>
        <div className="login-but">
          <button className="logBut">Login</button>
        </div>
        <div className="login-but">
          <button className="logBut-12">Sign Up</button>
        </div>
        <div className="rememberPass">
          <div className="remMainPass">
            <input type="checkbox" id="rememberPass" />
            <div className="remMainPassText">Keep me signed in</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
