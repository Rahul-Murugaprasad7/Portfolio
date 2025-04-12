import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const sidemenu = document.getElementById('sidemenu');

    window.openmenu = function () {
      if (sidemenu) sidemenu.style.right = '0';
    };

    window.closemenu = function () {
      if (sidemenu) sidemenu.style.right = '-200px';
    };
  }, []);

  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src="/image/logo.png" className="logo" alt="Logo" />
          <ul id="sidemenu">
            <li><a href="#header" onClick={() => window.closemenu()}>Home</a></li>
            <li><a href="#About" onClick={() => window.closemenu()}>About</a></li>
            <li><a href="#Services" onClick={() => window.closemenu()}>Services</a></li>
            <li><a href="#Portfolio" onClick={() => window.closemenu()}>Portfolio</a></li>
            <li><a href="#Contact" onClick={() => window.closemenu()}>Contact</a></li>
            <i className="fa-solid fa-xmark" onClick={() => window.closemenu()}></i>
          </ul>
          <i className="fa-solid fa-bars" onClick={() => window.openmenu()}></i>
        </nav>
        <div className="header-text">
          <p>Software Developer</p>
          <h1>
            Hi, I'm <span>Rahul</span>
            <br />
            from Coimbatore, Tamil Nadu
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
