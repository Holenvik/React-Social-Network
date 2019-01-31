import React, { Component } from "react";
import Post from "./Post.module.css";

const PostItems = ({ post, picture }) => {
  return (
    <div className={Post.post}>
      <div className={Post.post__photo}>
        <img src={picture} alt="Person" />
      </div>
      <div className={Post.post__message}>
        <span>{post}</span>
      </div>
    </div>
  );
};

const MyPosts = ({ posts, picture }) => {
  console.log(posts)
  let Post = posts.map(el => <PostItems post={el.message} picture={picture} />);
  return <div className={Post.post}>{Post}</div>;
};

export default MyPosts;
