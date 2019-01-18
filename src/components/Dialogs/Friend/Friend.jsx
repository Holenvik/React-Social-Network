import React, { Component } from "react";
import friend from "./Friend.module.css";

const Friend = () => {
  return (
    <div className={friend.dialog_person_contact}>
      <img
        src="https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
        alt="Person"
      />
      <span>Andrew</span>
    </div>
  );
};

export default Friend;
