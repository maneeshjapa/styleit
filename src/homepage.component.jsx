import React from "react";
import './homepage.style.scss'

const Homepage = () => (
  <div className="homepage">
    <div className="menu-directory">
      <div className="menu-item">
        <div className="content">
          <h1 className='title'>HATS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className='title'>JACKETS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className='title'>SHOES</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className='title'>MEN'S</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className='title'>WOMEN'S</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
