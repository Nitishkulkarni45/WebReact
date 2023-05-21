import React from 'react'
import "./Myblogs.css";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

function MyblogsData(props){
  const navigate = useNavigate()
  return (
    <div className={props.totalhead}>
        <div className="cardIMG">
            <img src={props.IMGurl} alt="blogpic" />
        </div>
        <h4>{props.inIMGtitle}</h4>
        <p>{props.inIMGtext}</p>
        {/* <button type="button" class="btn btn-primary thus">Read More</button> */}
        <div className="readMore"><button onClick={()=>{navigate('/hotels')}}type="button" class="btn btn-primary">{props.read}</button></div>
    </div>
  )
}

export default MyblogsData