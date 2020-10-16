import React from 'react';

function Sidebar() {
  return (
    <div id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-title-img">
          <img src="assets/img/nonformal.jpg" alt="Profile" className="img-fluid" />
        </div>
        <div className="sidebar-title-text">
          Febrian Aji Pangestu
        </div>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#intro-area">Home</a></li>
          <li><a href="#about-us">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="copyright">
        © 2020 All Right Reserved
      </div>
    </div>
  );
}
export default Sidebar;
