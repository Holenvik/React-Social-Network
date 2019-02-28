import React from "react";
import "./App.css";
import Head from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogPageContainer from "./components/Dialogs/DialogPageContainer";
import FriendsPage from "./components/Friends/FriendsPage";

const App = () => {
    // debugger;
    return (
        <div className="app-wrapper">
            <Head/>

            <Nav/>

            <Route path="/profile" component={ProfileContainer}/>

            <Route exact path="/message" component={DialogPageContainer}/>

            <Route exact path="/friends" component={FriendsPage}/>
        </div>
    );
};

export default App;
