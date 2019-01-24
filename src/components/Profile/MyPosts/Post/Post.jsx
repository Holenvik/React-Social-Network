import React, { Component } from "react";
import Post from "./Post.module.css";

const MyPosts = ({ posts, picture }) => {
  console.log(posts); 
  return (
    <div className={Post.post}>
      <div className={Post.post__photo}>
        <img src={picture} alt="Person" />
      </div>
      <div className={Post.post__message}>
        <span>{posts[0].message}</span>
      </div>
    </div>
  );
};

export default MyPosts;
