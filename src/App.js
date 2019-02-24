import React from "react";
import "./App.css";
import Head from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogPageContainer from "./components/Dialogs/DialogPageContainer";

const App = () => {
    // debugger;
    return (

            <div className="app-wrapper">
                <Head/>

                <Nav/>

                <Route path="/profile" component={ProfileContainer}/>

                <Route exact path="/message" component={DialogPageContainer}/>
            </div>

    );
};

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

export default withRouter(connect(mapStateToProps, null)(App));
