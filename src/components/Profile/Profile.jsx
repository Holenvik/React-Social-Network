import React from "react";
import profile from "./Profile.module.css";
import MyPosts from "./MyPosts/Post";
import Info from "./MyInfo/Info";

const Profile = ({contact, addPost, updatePostText}) => {
    let {newPostText} = contact;
    let onAddPost = () => {
        addPost()
    };
    let onUpdatePostText = (e) => {
        updatePostText(e.target.value)
    };
    
    return (
        <div className={profile.content}>
            <div className={profile.content__title}>
                <span>Profile</span>
            </div>
            <div className={profile.content__profile}>
                <Info />
            </div>
            <div className={profile.post}>
                <p>My Posts</p>
                <input
                    className={profile.post__input}
                    type="text"
                    onChange={onUpdatePostText}
                    value={newPostText}
                />
                <div className={profile.post__button}>
                    <button onClick={onAddPost}>
                        <span>Send</span>
                    </button>
                </div>
                <div className={profile.post__added}>
                    <MyPosts/>
                </div>
            </div>
        </div>
    );
};

export default Profile;
