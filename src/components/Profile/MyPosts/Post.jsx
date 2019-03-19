import React from "react";
import Post from "./Post.module.css";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

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

const MyPosts = (props) => {
    let {posts, picture} = props;
    let Post = posts.map(el => <PostItems key={el.id} post={el.message} picture={picture}/>);
    return <div className={Post.post}>{Post}</div>;
};


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        picture: state.profilePage.picture,
    }
};

export default withRouter(connect(mapStateToProps)(MyPosts));
