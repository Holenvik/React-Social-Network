import React, {Component} from "react";
import Post from "./Post.module.css";
import {connect} from "react-redux";

const PostItems = ({post, picture}) => {
    return (
        <div className={Post.post}>
            <div className={Post.post__photo}>
                <img src={picture} alt="Person"/>
            </div>
            <div className={Post.post__message}>
                <span>{post}</span>
            </div>
        </div>
    );
};

const MyPosts = ({posts, picture}) => {
    let Post = posts.map(el => <PostItems post={el.message} picture={picture}/>);
    return <div className={Post.post}>{Post}</div>;
};


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        picture: state.profilePage.picture,
    }
};

export default connect(mapStateToProps)(MyPosts);
