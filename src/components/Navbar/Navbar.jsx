import React, {Component} from "react";
import n from "./Navbar.module.css";
import {NavLink, withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const NavList = props => {
    let {item, link} = props;
    return (
        <div className={n.nav__link}>
            <NavLink to={link} activeClassName={n.active}>
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
    let NavItems = navbar.map(el => <NavList key={el.link} item={el.name}
                                             link={el.link}/>);
    let FriendItem = friends.map(el => (
        <FriendsList key={el.name} name={el.name} picture={el.picture}/>
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

let mapStateToProps = (state) => {
    return {
        navbar: state.navbarBlock.navbar,
        friends: state.navbarBlock.friends,
    }
}

export default withRouter(connect(mapStateToProps, null)(Nav));
