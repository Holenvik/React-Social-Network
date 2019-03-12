import React from 'react';
import style from "./FriendsPage.module.css"

let Friend = (props) => {
    let {user} = props;
    return (
        <div>
            <img alt={`${user.name}`}
                 src={user.photos.small == null ? "https://via.placeholder.com/100" : user.photos.small}/>
            <div>{user.name}</div>
            <div>{user.status ? user.status : 'no status'}</div>
        </div>
    )
}


const FriendsPage = (props) => {

    if (!props.users.length) {
        return <div>Users not found</div>
    }
    return <div className={style.friends}> {props.users.map(user =>
        <Friend user={user} key={user.name}/>
    )}
    </div>
};

export default FriendsPage;
