import React from 'react';
import style from "./FriendsPage.module.css"
import {NavLink, withRouter} from "react-router-dom";

let Friend = ((props) => {
        let {user} = props;
        let {followFriend, unfollowFriend} = props;
        let onFollowFriend = () => {
            followFriend(user.id)
        };
        let onUnfollowFriend = () => {
            unfollowFriend(user.id)
        };
        return (
            <div>
                <NavLink to={`/user/${user.id}`}>
                    <img alt={`${user.name}`}
                         src={user.photos.small == null ? "https://via.placeholder.com/100" : user.photos.small}/>
                    <div>{user.name}</div>
                    <div>{user.status ? user.status : 'no status'}</div>
                </NavLink>
                {user.followed ? <button className={style.sub_button}
                                         onClick={onUnfollowFriend}>Unfollow
                    </button> :
                    <button className={style.sub_button}
                            onClick={onFollowFriend}>Subscribe
                    </button>}
            </div>
        )
    }
);


const FriendsPage = (props) => {
    let {followFriend, unfollowFriend} = props;
    if (!props.users.length) {
        return <div>Users not found</div>
    }
    return <div className={style.friends}>
        {props.users.map(user =>
            <Friend unfollowFriend={unfollowFriend} followFriend={followFriend} user={user} key={user.name}/>
        )}
    </div>
};

export default withRouter(FriendsPage);
