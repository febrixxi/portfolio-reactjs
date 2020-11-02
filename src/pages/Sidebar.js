import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import ThemeSwitcher from '../pages/ThemeSwitcher';

function Sidebar() {
  const [count, setCount] = useState(22);
  const { theme } = useContext(ThemeContext);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div id="sidebar" bg="{theme}" variant="{theme}">
      <div className="sidebar-title">
        <div className="sidebar-title-img">
          <img
            src="assets/img/nonformal.jpg"
            alt="Profile"
            className="img-fluid"
          />
        </div>
        <div className="sidebar-title-text">Febrian Aji Pangestu</div>
      </div>
      <div className="state">
        <button onClick={decrementCount}>-</button>
        <span>Umur saya {count} tahun</span>
        <button onClick={incrementCount}>+</button>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="/Intro">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Skills">Skills</a>
          </li>
          <li>
            <a href="/Education">Education</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <ThemeSwitcher />
      <div className="copyright">© 2020 All Right Reserved</div>
    </div>
  );
}
export default Sidebar;
