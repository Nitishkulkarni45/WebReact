import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'

function Contact(){
  return (
    <>
         <Navbar 
    classBoot4="nav-link active navb-linker"
    classBoot2="nav-link navb-linker"
    classBoot3="nav-link navb-linker"
    classBoot1="nav-link navb-linker"
    />
    <Hero 
    cName = "Hero"
    heroImg = "https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&w=600"
    title = "Contact"
    butHide = "button-hide"
    Mainhead = "AboutHead"
    />
    </>
  )
}

export default Contact