import React, { Component } from "react";
import "./App.css";
import Head from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsPage from "./components/Dialogs/DialogsPage";
import { Route, BrowserRouter } from "react-router-dom";

const App = ({ items }) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Head />
        <Nav />
        {/* <DialogsPage /> */}
        {/* <Route component={DialogsPage} /> */}
        <Route
          path="/profile"
          render={() => <Profile contact={items.profile} posts={items.posts} />}
        />
        <Route exact path="/message" render={() => <DialogsPage />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
