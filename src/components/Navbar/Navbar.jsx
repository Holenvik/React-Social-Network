import React, {Component} from "react";
import n from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const NavList = props => {
    let {item, link} = props;
    return (
        <div className={n.nav__link}>
            <NavLink to={link} activeClassName={n.active} exact>
                {item}
            </NavLink>
        </div>
    );
};
const FriendsList = props => {
    let {name, picture} = props;
    return (
        <div className={n.friendItem}>
            <img src={picture} alt="friend"/>
            <p>{name}</p>
        </div>
    );
};

const Nav = ({navbar, friends}) => {
        // let navbar = {name: "Profile", link: "/profile"},
        // {name: "Message", link: "/message"},
        // {name: "News", link: "/news"},
        // {name: "Music", link: "/music"},
        // {name: "Settings", link: "/settings"}
        // ];
    let NavItems = navbar.map(el => <NavList item={el.name}
                                             link={el.link}/>);
    let FriendItem = friends.map(el => (
        <FriendsList name={el.name} picture={el.picture}/>
    ));
    return (
        <nav className={n.nav}>
            {NavItems}
            <p>Friends:</p>
            <div className={n.nav__friends}>
                {FriendItem}
            </div>
        </nav>
    );
};

Nav.propTypes = {
    navbar: PropTypes.array
};

export default Nav;
