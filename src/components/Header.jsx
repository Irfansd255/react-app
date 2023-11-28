import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const currentRoute = location.pathname
  
  return (
    <div className="header-wrapper">
      <header>
        <div className="header-logo">
          <span>LOGO</span>
        </div>
        <div className="header-menus">
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "red", fontWeight: "700" } : {};
            }}
            to="/home"
            className="menu"
          >
            Home
          </NavLink>
          <NavLink to="/product" className="menu" style={({ isActive }) => {
              return isActive ? { color: "red", fontWeight: "700" } : {};
            }}>
            Product
          </NavLink>
          <NavLink to="/about" className="menu" style={({ isActive }) => {
              return isActive ? { color: "red", fontWeight: "700" } : {};
            }}>
            About Us
          </NavLink>
        </div>
        <div className="header-auth">
          {
            currentRoute === "/home" || currentRoute === "/about" ? <Link to="/login">Login/SignUp</Link> :<></>
          }
          
        </div>
      </header>
    </div>
  );
};

export default Header;
