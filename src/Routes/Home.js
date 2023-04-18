import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../Routes/Hero';
import Destination from '../components/Destination';
import Myblogs from '../components/Myblogs';
// import Cards from '../components/Cards';

const Home = () => {
  return (
    <>
    <Navbar 
    classBoot1="nav-link active navb-linker"
    classBoot2="nav-link navb-linker"
    classBoot3="nav-link navb-linker"
    classBoot4="nav-link navb-linker"
    />
    <Hero 
    cName = "Hero"
    heroImg = "https://cdn.pixabay.com/photo/2015/07/05/13/44/beach-832346_960_720.jpg"
    title = "Your story your journey"
    text = "Choose your destinantion"
    buttonText = "Trip'in Now"
    url = "/"
    btnClass="show"
    Mainhead = "imghd"
    />
    <Destination />
    <Myblogs />
    {/* <Cards /> */}
    </>
  )
}

export default Home