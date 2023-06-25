import React, { Component } from 'react'
import "./Destination.css";
import {Link} from "react-router-dom";

class DestinationData extends Component {
  render (){
    return(
        <div className="destiMain">
        <div className={this.props.firstdes}>
          <div className={this.props.destititle}>
          <Link class={this.props.headClass} to={this.props.linkTitle}><h2>{this.props.heading}</h2></Link>
            <p>{this.props.text}</p>
          </div>
          <div className="immm">
            <img src={this.props.img1} alt="pic" />
            <img src={this.props.img2} alt="pic" />
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationData