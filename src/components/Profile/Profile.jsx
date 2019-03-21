import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/Post";
import Info from "./MyInfo/Info";

const Profile = (props) => {
    console.log(props)
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
            <div className={style.content}>
                <div className={style.content__title}>
                    <span>Profile</span>
                </div>
                <div className={style.content__profile}>
                    <Info/>
                </div>
                <div className={style.social__edit}>
                    {isOwner && <button onClick={onEditClick}>Edit</button>}
                </div>
                <div className={style.social}>
                    {
                        Object.keys(profileInfo.contacts).map(key => {
                            return <div className={style.social__items} key={key}>
                                <b>{key.toUpperCase()}:</b> {editMode ? <input value={profileInfo.contacts[key]}
                                                                               type="text"
                                                                               onChange={(e) => {
                                                                                   let newValue = e.target.value;
                                                                                   onContactChange(newValue, key)
                                                                               }}/> :
                                <span>{profileInfo.contacts[key]}</span>}

                            </div>
                        })
                    }
                </div>
                <div className={style.social__button}>
                    {editMode && <button onClick={onSaveClick}>Save</button>}
                </div>
                {isOwner && <div className={style.post}>
                    <p>My Posts</p>
                    <input
                        className={style.post__input}
                        type="text"
                        onChange={onUpdatePostText}
                        value={newPostText}
                    />
                    <div className={style.post__button}>
                        <button onClick={onAddPost}>
                            <span>Send</span>
                        </button>
                    </div>
                    <div className={style.post__added}>
                        <MyPosts/>
                    </div>
                </div>}

            </div>
        )
    } else {
        return <div>Loading...</div>
    }
};

export default Profile;
