import React from "react";
import profile from "./Profile.module.css";
import MyPosts from "./MyPosts/Post";
import Info from "./MyInfo/Info";

const Profile = (props) => {
    let {contact} = props;
    let {
        addPost, updatePostText, setEditMode,
        setNewProfileInfo, updateUserInfo
    } = props;
    let {newPostText, profileInfo, isOwner, editMode} = contact;
    let onAddPost = () => {
        addPost()
    };
    let onUpdatePostText = (e) => {
        updatePostText(e.target.value)
    };

    let onEditClick = () => {
        setEditMode(!editMode)
    };

    let onContactChange = (newValue, key) => {
        setNewProfileInfo(newValue, key)
    };

    let onSaveClick = () => {
        updateUserInfo()
    };

    if (profileInfo) {
        return (
            <div className={profile.content}>
                <div className={profile.content__title}>
                    <span>Profile</span>
                </div>
                <div className={profile.content__profile}>
                    <Info/>
                </div>
                <div>
                    {isOwner && <span onClick={onEditClick}>Edit</span>}
                </div>
                <div>
                    {
                        Object.keys(profileInfo.contacts).map(key => {
                            return <div key={key}>
                                <b>{key}: {editMode ? <input value={profileInfo.contacts[key]}
                                                             type="text"
                                                             onChange={(e) => {
                                                                 let newValue = e.target.value;
                                                                 onContactChange(newValue, key)
                                                             }}/> :
                                    <span>{profileInfo.contacts[key]}</span>}
                                </b>
                            </div>
                        })
                    }
                </div>
                {editMode && <button onClick={onSaveClick}>Save</button>}
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
        )
    } else {
        return <div>Loading...</div>
    }
};

export default Profile;
