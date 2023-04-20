import React from 'react'
import "./Contactform.css";

function Contactform  (){
  return (
    <div className='Form-heading'>
        <h1>Send Us the message</h1>
        <form action="">
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <textarea placeholder='Message' rows="4"></textarea>
            <button className='buttform'>Send Message</button>
        </form>
    </div>
  )
}

export default Contactform