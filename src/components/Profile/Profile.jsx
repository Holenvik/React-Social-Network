import React from "react";
import profile from "./Profile.module.css";
import MyPosts from "./MyPosts/Post/Post";
import Info from "./MyInfo/Info";
import {addPostCreator, updateNewPostTextCreator} from "../../redux/ProfilePageReducer";

const Profile = ({contact, store}) => {
    debugger;
    let {posts, newPostText} = contact;
    let newPostElement = React.createRef();
    let addPost = () => {
        let action = addPostCreator();
        store.dispatch(action);
    };
    let updatePostText = () => {
        let newText = newPostElement.current.value;
        let action = updateNewPostTextCreator(newText);
        store.dispatch(action);
    };
    
    return (
        <div className={profile.content}>
            <div className={profile.content__title}>
                <span>Profile</span>
            </div>
            <div className={profile.content__profile}>
                <Info contact={contact}/>
            </div>
            <div className={profile.post}>
                <p>My Posts</p>
                <input
                    className={profile.post__input}
                    type="text"
                    ref={newPostElement}
                    onChange={updatePostText}
                    value={newPostText}
                />
                <div className={profile.post__button}>
                    <button onClick={addPost}>
                        <span>Send</span>
                    </button>
                </div>
                <div className={profile.post__added}>
                    <MyPosts posts={posts} picture={contact.picture}/>
                </div>
            </div>
        </div>
    );
};

export default Profile;
