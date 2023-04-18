import React from 'react'
import "./Myblogs.css";

function MyblogsData(props){
  return (
    <div className='Myblog-cardMain'>
        <div className="cardIMG">
            <img src={props.IMGurl} alt="blogpic" />
        </div>
        <h4>{props.inIMGtitle}</h4>
        <p>{props.inIMGtext}</p>
    </div>
  )
}

export default MyblogsData