import React,{ useState } from "react";
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
          <input
            type="text"

            id="userName-1"
            placeholder="Username, E-mail or Mobile number"
          />
        </div>
        <div className="enterPass">
          <input
            type={IsEyeOpen? "text" : "password"}
            id="Password-1"
            placeholder="Enter your password"
          /><button className="eye" onClick={passEnable}>
          <i class={`bi ${IsEyeOpen?"bi-eye-fill": "bi-eye-slash-fill"}`}></i>

        </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
