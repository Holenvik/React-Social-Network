import React, { Component } from "react";
import "./App.css";
import Head from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsPage from "./components/Dialogs/DialogsPage";

const App = ({ items }) => {
  console.log(items.profile);
  return (
    <div className="app-wrapper">
      <Head />
      <Nav />
      <Profile contact={items.profile} posts={items.posts}/>
      {/* <DialogsPage /> */}
    </div>
  );
};

export default App;
