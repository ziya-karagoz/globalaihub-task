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
            {pathname === "/" ? (
              <NavLink
                style={{ color: "orange" }}
                to='/'
                onClick={() => setIsNavExpanded(false)}
              >
                All Courses
                <hr />
              </NavLink>
            ) : (
              <NavLink to='/' onClick={() => setIsNavExpanded(false)}>
                All Courses
              </NavLink>
            )}
          </li>
          <li>
            {pathname === "/my-courses" ? (
              <NavLink
                style={{ color: "orange" }}
                to='my-courses'
                onClick={() => setIsNavExpanded(false)}
              >
                My Courses
                <hr />
              </NavLink>
            ) : (
              <NavLink to='my-courses' onClick={() => setIsNavExpanded(false)}>
                My Courses
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
