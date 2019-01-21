import React, { Component } from "react";
import dialog from "./DialogsPage.module.css";
import Friend from "./Friend/Friend";

const Message = ({message}) => {
  return (
    <div className={dialog.dialog_message_me}>
      <span>COAJSHDJKAHSDJJK</span>
    </div>
  );
};

const DialogsPage = ({ props }) => {
  return (
    <div className={dialog.dialog}>
      <div className={dialog.dialog_title}>Dialogs</div>
      <div className={dialog.dialog_person}>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        {/* <div className="dialog_person_contact contact-active">
          <img
            src="https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
            alt="Person"
          />
          <span>Andrew</span>
        </div> */}
      </div>
      <div className="dialog_message">
        <Message />
        <div className="dialog_message_friend">
          <span>ASD:NKJDSFHBJKHSDF</span>
        </div>
        <div className="dialog_message_me">
          <span>Take me to the moon, my dear friend</span>
        </div>
        <div className="dialog_message_friend">
          <span>Okay, friend</span>
        </div>
      </div>
    </div>
  );
};

export default DialogsPage;
