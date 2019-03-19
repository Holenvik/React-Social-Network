import React from "react";
import "./App.css";
import Nav from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";

import ProfilePageContainer from "./components/Profile/ProfileContainer"
import DialogPageContainer from "./components/Dialogs/DialogPageContainer";
import LoginPage from "./components/Login/LoginPage";
import FriendsPageContainer from "./components/Friends/FriendsPageContainer";
import ToDoContainer from "./components/ToDo/ToDoContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>

            <Nav/>

            <Route path="/user/:userID" component={ProfilePageContainer}/>

            <Route exact path="/message" component={DialogPageContainer}/>

            <Route exact path="/friends" component={FriendsPageContainer}/>

            <Route exact path="/login" component={LoginPage}/>

            <Route exact path="/todo" component={ToDoContainer}/>

            <Route exact path="/login" component={LoginPage}/>

        </div>
    );
};

export default App;
