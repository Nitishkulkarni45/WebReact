import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Aboutbody from '../components/Aboutbody'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
       <Navbar 
    classBoot2="nav-link active navb-linker"
    classBoot1="nav-link navb-linker"
    classBoot3="nav-link navb-linker"
    classBoot4="nav-link navb-linker"
    />
    <Hero 
    cName = "Hero"
    heroImg = "https://cdn.pixabay.com/photo/2016/08/18/20/05/light-bulbs-1603766_960_720.jpg"
    title = "About"
    butHide = "button-hide"
    Mainhead = "AboutHead"
    />
    <Aboutbody 
    titleHead = "HeadEr"
    />
    <Footer />
    
    </>
  )
}

export default About