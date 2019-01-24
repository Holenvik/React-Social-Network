import React, { Component } from "react";
import profile from "./Profile.module.css";
import MyPosts from "./MyPosts/Post/Post";
import Info from "./MyInfo/Info";

const Profile = ({ contact, posts }) => {
  return (
    <div className={profile.content}>
      <div className={profile.content__title}>
        <span>Profile</span>
      </div>
      <div className={profile.content__profile}>
        <Info contact={contact} />
      </div>
      <div className={profile.post}>
        <p>My Posts</p>
        <input className={profile.post__input} type="text" />
        <div className={profile.post__button}>
          <button>
            <span>Send</span>
          </button>
        </div>
        <div className={profile.post__added}>
          <MyPosts posts={posts} picture={contact.picture} />
          <MyPosts posts={posts} picture={contact.picture} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
