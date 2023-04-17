import React from 'react'
import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img className="HeroImg" src={props.heroImg} alt="bkgImg" />
      </div>
      <div className="imghd">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
       <button><a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a></button> 
      </div>
    </>

  )
}

export default Hero