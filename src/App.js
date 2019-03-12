import React from "react";
import "./App.css";
import Head from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogPageContainer from "./components/Dialogs/DialogPageContainer";
import LoginPage from "./components/Login/LoginPage";
import FriendsPageContainer from "./components/Friends/FriendsPageContainer";
import ToDoContainer from "./components/ToDo/ToDoContainer";

const App = () => {
    // debugger;
    return (
        <div className="app-wrapper">
            <Head/>

            <Nav/>

            <Route path="/profile" component={ProfileContainer}/>

            <Route exact path="/message" component={DialogPageContainer}/>

            <Route exact path="/friends" component={FriendsPageContainer}/>

            <Route exact path="/login" component={LoginPage}/>

            <Route exact path="/todo" component={ToDoContainer}/>

            <Route exact path="/todo" component={LoginPage}/>
        </div>
    );
};

export default App;
