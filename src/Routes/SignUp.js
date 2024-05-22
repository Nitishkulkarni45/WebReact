import React, { useState } from "react";
import "./SignUp.css";
const SignUp = () => {
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");
  const handleSubmit = () => {
    const trimmedpassword = password.trim();
    const trimmedconpassword = conpassword.trim();

    // if (trimmedpassword === " " || trimmedconpassword === " ") {
    // //   alert("Enter the password");
    //   window.location.href = "/SignUp";
    // }
    if (password === conpassword) {
      window.location.href = "/home";
    } else {
      alert("Password does not match");
      window.location.href = "/SignUp";
    }
  };
  return (
    <div className="signupContainer">
      <div className="signupFormContainer">
        <div className="signupFormHeader">Sign Up</div>
        <div className="maincontName">
          <div className="contName">Name</div>
          <input
            type="text"
            placeholder="E.g Nitish Kulkarni"
            className="signupInput"
          />
        </div>
        <div className="maincontName">
          <div className="contName">Mail Id</div>
          <input
            type="email"
            placeholder="E.g gully_guy123@gmail.com"
            className="signupInput"
          />
        </div>
        <div className="maincontName">
          <div className="contName">Mobile Number</div>
          <input
            type="Number"
            placeholder="E.g 9*****4587"
            className="signupInput"
          />
        </div>
        <div className="maincontName">
          <div className="contName">Password</div>
          <input
            type="password"
            placeholder="Your password"
            className="signupInput"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="maincontName">
          <div className="contName">Confirm Password</div>
          <input
            type="password"
            placeholder="Re-enter your Password"
            className="signupInput"
            onChange={(e) => setConPassword(e.target.value)}
          />
        </div>
        <button className="signupButton" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
      <div className="orOp">
        <hr className="linehr"/>
        <div className="or"> OR </div>
        <hr className="linehr"/>
      </div>
      <div className="otherOpt">
        <div className="optHead">Sign up using:</div>
        <div className="social">
            <img src="C:/Users/Admin/Desktop/KLE/Web_dev/gullyguy/src/assets/twitter.png" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
