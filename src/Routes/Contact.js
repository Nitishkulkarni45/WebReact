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
    heroImg = "https://cdn.pixabay.com/photo/2016/08/18/20/05/light-bulbs-1603766_960_720.jpg"
    title = "About"
    butHide = "button-hide"
    Mainhead = "AboutHead"
    />
    </>
  )
}

export default Contact