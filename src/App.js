import React, { Component } from "react";
import "./App.css";
import Head from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsPage from "./components/Dialogs/DialogsPage";
import { Route, BrowserRouter } from "react-router-dom";

const App = props => {
  let { items } = props;
  let { profile, navbar, friends } = items;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Head />
        <Nav navbar={navbar} friends = {friends} />
        <Route
          path="/profile"
          render={() => <Profile contact={profile} />}
        />
        <Route exact path="/message" render={() => <DialogsPage />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
