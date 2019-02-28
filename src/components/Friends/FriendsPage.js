import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import {setStatus, statuses, setUsers} from "../../redux/FriendsPageReducer";

const FriendsPage = (props) => {
    debugger
    if (props.status === statuses.NOT_INITIALIZED) {
        props.setStatus(statuses.INPROGRESS);
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users?count=6")
            .then((result) => {
                props.setStatus(props.status.SUCCESS);
                props.setUsers(result.data.items);
            })
    }

    if (!props.users.length) {
        return <div>Users not found</div>
    }

    return <div> {props.users.map(user =>
        <div>
            <img alt={`${user.name}`} src={user.photos.small == null ? "https://via.placeholder.com/100" : user.photos.small}/>
            <div>{user.name}</div>
            <div>{user.status ? user.status : 'no status'}</div>
        </div>
    )
    }
    </div>
}

let mstp = (state) => {
    return {
        users: state.friendsPage.users,
        status: state.friendsPage.status
    }
}
let mdtp = (dispatch) => {
    return {
        setUsers: (users) => {
            let action = setUsers(users);
            dispatch(action);
        },
        setStatus: (status) => {
            let action = setStatus(status);
            dispatch(action);
        }
    }
}


export default connect(mstp, mdtp)(FriendsPage);
