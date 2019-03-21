import React from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    // debugger
    let {isAuth, userInfo} = props;
    let {logOut} = props;
    let onLogoutClick = () => {
        logOut();
    };
    return (
        <header className={style.header}>
            <img alt="header" src="https://angolrahangolva.com/wp-content/uploads/2015/04/ghost_halloween-1969px.png"/>
            {isAuth && <div className={style.header_sign_in}>
                {`${userInfo.userName} `}
                <NavLink to="/login"><span onClick={onLogoutClick}>Log Out</span></NavLink>
            </div>}
            {!isAuth && <div className={style.header_sign_in}>
                <NavLink to="/login">Sign In</NavLink>
            </div>}


        </header>
    );
};

export default Header
