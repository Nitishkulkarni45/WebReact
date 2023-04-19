import React from 'react'
import "./Myblogs.css";
import MyblogsData from './MyblogsData';

function Myblogs() {
  return (
    <div className='Myblogs'>
      <h1>Recent Blogs</h1>
      <p>Get insights about your favorite destinations here</p>

      <div className="main-head-head">
        <MyblogsData
          IMGurl="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600"
          inIMGtitle="Under The Blue!"
          inIMGtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis? Ipsa, nemo natus necessitatibus iusto architecto doloremque sapiente mollitia ab aut ipsam iure maxime corporis, sequi quisquam nostrum,"
        />


        <MyblogsData
          IMGurl="https://images.pexels.com/photos/4662469/pexels-photo-4662469.jpeg?auto=compress&cs=tinysrgb&w=600"
          inIMGtitle="Yoga: The Way of Life"
          inIMGtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis? Ipsa, nemo natus necessitatibus iusto architecto doloremque sapiente mollitia ab aut ipsam iure maxime corporis, sequi quisquam nostrum,"
        />

        <MyblogsData
          IMGurl="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600"
          inIMGtitle="PEACE lies within You"
          inIMGtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis? Ipsa, nemo natus necessitatibus iusto architecto doloremque sapiente mollitia ab aut ipsam iure maxime corporis, sequi quisquam nostrum, "
        />
      </div>
    </div>

  )
}

export default Myblogs