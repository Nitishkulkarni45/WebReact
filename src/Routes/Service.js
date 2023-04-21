import React from 'react'
import Hero from './Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Myservices from '../components/Myservices'
function Service (){
  return (
    <>
          <Navbar 
    classBoot3="nav-link active navb-linker"
    classBoot2="nav-link navb-linker"
    classBoot1="nav-link navb-linker"
    classBoot4="nav-link navb-linker"
    classBoot5="nav-link navb-linker Boot"
    />
    <Hero 
    cName = "Hero"
    heroImg = "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600"
    title = "Service"
    butHide = "button-hide"
    Mainhead = "ServiceHead"
    />
    <Myservices />
    <Footer />
    </>
  )
}

export default Service