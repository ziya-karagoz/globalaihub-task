import { useState } from "react";
import "./style.css";

import { NavLink, useLocation } from "react-router-dom";

//React Icons Imports
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  // State to check if the navbar is on hamburger menu or not
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // For styling the navbar between the pages
  const { pathname } = useLocation();
  return (
    <nav className='navigation'>
      {/* Navbar Logo */}
      <img
        src='./img/logo_quality_min.png'
        alt='logo'
        style={{ width: "90px", margin: "1rem" }}
      />
      {/* Hamburger Button */}
      <button
        className='hamburger'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <FaBars />
      </button>
      {/* Navbar Links */}
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
