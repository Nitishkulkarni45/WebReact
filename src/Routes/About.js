import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'

const About = () => {
  return (
    <>
     <Navbar />
    <Hero 
    cName = "Hero"
    heroImg = "https://cdn.pixabay.com/photo/2016/08/18/20/05/light-bulbs-1603766_960_720.jpg"
    title = "Your story your journey"
    text = "Choose your destinantion"
    // buttonText = "Trip'in Now"
    // url = "/"
    // btnClass="show"
    butHide = "button-hide"
    />
    {/* <h1>This is About</h1> */}
    </>
  )
}

export default About