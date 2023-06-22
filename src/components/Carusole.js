import React from 'react'
import "./Carusole.css";

const Carusole = () => {
  return (
    <div>
        <div className="car-sole">
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://hokkaidoguide.com/wp-content/uploads/2020/07/126A0393-scaled.jpg" class="d-block w-100" alt="A chinese restaurant"/>
      <div class="carousel-caption d-none d-md-block">
        <h4>Spicy Chinese</h4>
        <p>Explore the chinese related restaurants near you.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://static.theprint.in/wp-content/uploads/2019/08/indian-cuisine.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h4>The desi Indian delight.</h4>
        <p>Fulfil your cravings with the authentic indian dishes.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JoY15-z0gb065L6Ik6lo4TtJHK-l3KB2KK2T0rxPQQ&usqp=CAU&ec=48665698" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h4>The royal Italian</h4>
        <p>Try something new .</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </div>
  )
}

export default Carusole