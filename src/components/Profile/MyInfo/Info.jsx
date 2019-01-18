import React, { Component } from "react";
import profile from "./Info.module.css";

const Info = ({ contact }) => {
  // debugger;
  return (
    <div className={profile.content__profile}>
      <div className={profile.profile__photo}>
        <img src={contact.picture} alt="Person" />
      </div>
      <div className={profile.profile__info}>
        <div className={profile.profile__name}>
          <p>{contact.name}</p>
        </div>
        <div className={profile.profile__add}>
          <p>Date of Birth: {contact.birthday}</p>
          <p>City: {contact.city}</p>
          <p>Education: {contact.education}</p>
          <p>Web Site: {contact.link}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
