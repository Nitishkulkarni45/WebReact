import React from 'react';
import './Shorts.css';

const Shorts = () => {
  return (
    <div>
      <div className="container">
        <div className="hed"><h3>Our top recommends</h3></div>
        <div className="outer-short-card carousel slide" data-bs-ride="carousel">

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-around">
                <div className="short-card">
                  {/* Card 1 content */}
                  <a href="https://youtu.be/_5rJAEf_KD8"></a>
                </div>
                <div className="short-card">
                  {/* Card 2 content */}
                  <a href="https://youtu.be/_5rJAEf_KD8"></a>
                </div>
                <div className="short-card">
                  {/* Card 3 content */}
                  <a href="https://youtu.be/_5rJAEf_KD8"></a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-around">
                <div className="short-card">
                  {/* Card 4 content */}
                  <a href="https://youtu.be/_5rJAEf_KD8"></a>
                </div>
                <div className="short-card">
                  {/* Card 5 content */}
                  <a href="https://youtu.be/_5rJAEf_KD8"></a>
                </div>
                <div className="short-card">
                  {/* Card 6 content */}
                  <a href="https://youtu.be/_5rJAEf_KD8"></a>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target=".outer-short-card" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target=".outer-short-card" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Shorts;
