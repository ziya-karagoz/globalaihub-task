// Navbar.js
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.css";
import { FaBars } from "react-icons/fa";
export const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { pathname } = useLocation();
  return (
    <nav className='navigation'>
      <img
        src='./img/logo_quality_min.png'
        alt='logo'
        style={{ width: "90px", margin: "1rem" }}
      />
      <button
        className='hamburger'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <FaBars />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink to='/' onClick={() => setIsNavExpanded(false)}>
              All Courses
              {pathname == "/" ? <hr /> : null}
            </NavLink>
          </li>
          <li>
            <NavLink to='my-courses' onClick={() => setIsNavExpanded(false)}>
              My Courses{pathname == "/my-courses" ? <hr /> : null}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
