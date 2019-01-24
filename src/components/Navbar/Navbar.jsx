import React, { Component } from "react";
import Navbar from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const NavbarItem = props => {
  return (
    <div className={`${Navbar.nav__link} ${Navbar.active}`}>
      <NavLink to="/news">{props.name}</NavLink>
    </div>
  );
};

const Nav = props => {
  // debugger;
  let { navbar } = props;
  console.log(navbar);
  let NavList = navbar.map(el => <NavbarItem item={el.name} link={el.link} />);
  return (
    <nav className={Navbar.nav}>
      <div className={`${Navbar.nav__link} ${Navbar.profile}`}>
        <NavList />
      </div>
      <div className={Navbar.nav__link}>
        <NavLink to="/message">{NavbarItem}</NavLink>
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
