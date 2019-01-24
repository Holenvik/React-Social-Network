import React, { Component } from "react";
import Navbar from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const NavbarItem = () =>{
  // И тут нужно будет замапить
}

const Nav = () => {
  return (
    <nav className={Navbar.nav}>
      <div className={`${Navbar.nav__link} ${Navbar.profile}`}>
        <NavLink  to="/profile">Profile</NavLink>
      </div>
      <div className={Navbar.nav__link}>
        <NavLink to="/message">Message</NavLink>
      </div>
      <div className={`${Navbar.nav__link} ${Navbar.active}`}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={Navbar.nav__link}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={`${Navbar.nav__link} ${Navbar.settings}`}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
