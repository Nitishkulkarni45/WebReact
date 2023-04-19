import React from 'react'
import "./Footer.css";

function Footer  () {
  return (
    <div className='Footer'>
        <div className="upperrow">
            <div className="right">
                <h1>Ssdsvdsvsv</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque.</p>
            </div>
            <div className="left">
                <a href="/">
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-whatsapp-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-youtube-square'></i>
                </a>
            </div>
        </div>
        <div className="lowerrow">
            <div className="column1">
                <h4>Project</h4>
                <a href="/" className="subhead1">Vlog</a>
                <a href="/" className="subhead2">Status</a>
                <a href="/" className="subhead3">Lisence</a>
                <a href="/" className="subhead4">All versions</a>
            </div>
            <div className="column">
                <h4>Community</h4>
                 <a href="/" className="subhead1">GitHub</a>
                <a href="/" className="subhead2">Issues</a>
                <a href="/" className="subhead3">Project</a>
                <a href="/" className="subhead4">Twitter</a>
            </div>
            <div className="column">
                <h4>Help</h4>
                 <a href="/" className="subhead1">Support</a>
                <a href="/" className="subhead2">Trouble Shooting</a>
                <a href="/" className="subhead3">Contact Us</a>
            </div>
            <div className="column">
                <h4>Others</h4>
                 <a href="/" className="subhead1">Terms of Service</a>
                <a href="/" className="subhead2">Privacy Policy</a>
                <a href="/" className="subhead3">Feedback</a>
                
            </div>
        </div>
    </div>
  )
}

export default Footer