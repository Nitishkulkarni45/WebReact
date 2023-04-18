import React from 'react'
import "./Myblogs.css";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function MyblogsData(props){
  return (
    <div className='Myblog-cardMain'>
        <div className="cardIMG">
            <img src={props.IMGurl} alt="blogpic" />
        </div>
        <h4>{props.inIMGtitle}</h4>
        <p>{props.inIMGtext}</p>
        {/* <button type="button" class="btn btn-primary thus">Read More</button> */}
        <div className="readMore"><button type="button" class="btn btn-primary">Read More</button></div>
    </div>
  )
}

export default MyblogsData