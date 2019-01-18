import React, { Component } from "react";
import Navbar from './Navbar.module.css';

const Nav = () => {
  return (
    <nav className={Navbar.nav}>
      <div className={Navbar.nav__link_profile}>
        <a href="/profile">Profile</a>
      </div>
      <div className={Navbar.nav__link}>
        <a href="/message">Message</a>
      </div>
      <div className={Navbar.nav__link}>
        <a href="/news">News</a>
      </div>
      <div className={Navbar.nav__link}>
        <a href="/music">Music</a>
      </div>
      <div className={Navbar.nav__link_settings}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
