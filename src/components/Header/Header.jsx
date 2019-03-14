import React from "react";
import Header from './Header.module.css';
import {NavLink} from "react-router-dom";

const Head = (props) => {
    let {isAuth, userInfo} = props;
    let {logOut} = props;
    let onLogoutClick = () => {
        logOut();
    };
    return (
        <header className={Header.header}>
            <img alt="header" src="https://angolrahangolva.com/wp-content/uploads/2015/04/ghost_halloween-1969px.png"/>
            {isAuth && <div className={Header.header_sign_in}>
                {userInfo.userName} - <span onClick={onLogoutClick}>Log Out</span>
            </div>} -
            {!isAuth && <div className={Header.header_sign_in}>
                <NavLink to="login">Sign In</NavLink>
            </div>}


        </header>
    );
};

export default Head
