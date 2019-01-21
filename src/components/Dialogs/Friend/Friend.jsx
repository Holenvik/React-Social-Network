import React, { Component } from "react";
import friend from "./Friend.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, id }) => {
  let path = "/message/" + id;

  return (
    <NavLink to={path}>
      <div className={friend.dialog_person_contact}>
        <img
          src="https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
          alt="Person"
        />
        <span>{name}</span>
      </div>
    </NavLink>
  );
};

const Friend = () => {
  return (
    <NavLink to="/message/1">
      <div className={friend.dialog_person_contact}>
        <img
          src="https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
          alt="Person"
        />
        <span>asdasd</span>
      </div>
    </NavLink>
  );
};

export default Friend;
