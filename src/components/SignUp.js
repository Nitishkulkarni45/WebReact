import React from 'react'
import "./SignUp.css";
import Navbar from './Navbar';
import Hero from '../Routes/Hero';
import SignUpform from './SignUpform';

function SignUp  ()  {
  return (
    <>
    <Navbar 
    classBoot1="nav-link navb-linker Boot"
    classBoot2="nav-link navb-linker Boot"
    classBoot3="nav-link navb-linker Boot"
    classBoot4="nav-link navb-linker Boot"
    classBoot5="nav-link active navb-linker Boot2"
    />
    <SignUpform />
    </>
    
  )
}

export default SignUp