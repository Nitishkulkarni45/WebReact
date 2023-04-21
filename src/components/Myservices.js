import React from 'react'
import "./Myservices.css";
// import "./Myblogs.css";
import MyblogsData from './MyblogsData';

function Myservices() {
  return (
    <div className='Service-main-container'>
        <h1>Enjoy our world class services</h1>
        <p>All you need for travel is here!!</p>
        <div className="service-sub-conatiner">
        <MyblogsData
          IMGurl="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801__340.jpg"
          inIMGtitle="One Fine Dine"
          totalhead="Myblog-cardMain1"
          inIMGtext="Are you getting cravings ? then dont worry we have got you covered. Enjoy the best meals from the best multi-cuisine restaurants around and near you."
          read="Book Now"
        />

<MyblogsData
          IMGurl="https://cdn.pixabay.com/photo/2017/03/27/12/32/action-2178406__340.jpg"
          inIMGtitle="Rent a vehicle"
          totalhead="Myblog-cardMain1"
          inIMGtext="Renting a vehicle offers a flexible and cost-effective way to explore your destination without relying on public transportation or expensive rideshare services."
          read="Book Now"
        />

<MyblogsData
          IMGurl="https://cdn.pixabay.com/photo/2013/09/23/04/36/hostel-185156__340.jpg"
          inIMGtitle="Accomodation"
          totalhead="Myblog-cardMain1"
          inIMGtext="Book a best hostel or hotel provides a comfortable and convenient place to stay, while enhancing your overall travel experience in affordable prices "
          read="Book Now"
        />
        </div>
    </div>
  )
}

export default Myservices