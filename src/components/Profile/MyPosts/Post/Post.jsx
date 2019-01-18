import React, { Component } from "react";
import Post from "./Post.module.css";

const MyPosts = ({ posts, picture }) => {
  return (
    <div className={Post.post}>
      <div className={Post.post__photo}>
        <img src={picture} alt="Person" />
      </div>
      <div className={Post.post__message}>
        <span>{posts[0]}</span>
      </div>
    </div>
  );
};

export default MyPosts;
