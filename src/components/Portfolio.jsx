import React from 'react';

const Portfolio = () => {
  return (
    <div id="Portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src="/image/galaxy.jpeg" alt="galaxy" />
            <div className="layer">
              <h3>GALAXY</h3>
              <p>wertyui sdfghj xcvbn dfbhb dcv jnb dcv</p>
              <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src="/image/sun.jpeg" alt="sun" />
            <div className="layer">
              <h3>SUN</h3>
              <p>wertyui sdfghj xcvbn dfbhb dcv jnb dcv</p>
              <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src="/image/th.jpeg" alt="moon" />
            <div className="layer">
              <h3>MOON</h3>
              <p>wertyui sdfghj xcvbn dfbhb dcv jnb dcv</p>
              <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">See More</a>
      </div>
    </div>
  );
};

export default Portfolio;
