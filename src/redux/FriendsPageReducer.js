import {statuses} from "./STATUSES";
import axiosInstance from "../DAL/AxiosInstance";

const SET_FRIENDS = 'SN/FRIENDS/SET_FRIENDS';
const SET_STATUS = 'SN/FRIENDS/SET_STATUS';
const SET_FOLLOW_FRIEND = 'SN/FRIENDS/SET_FOLLOW_FRIEND';
const SET_UNFOLLOW_FRIEND = 'SN/FRIENDS/SET_UNFOLLOW_FRIEND';

let initialState = {
    status: statuses.NOT_INITIALIZED,
    users: [],
};

const FriendsPageReducer = (state = initialState, action) => {
    let copyState
    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SET_FRIENDS: {
            let friends = [];
            action.users.forEach(u => {
                friends[u.id] = u
            });
            console.log(friends)
            return {
                ...state,
                users: friends
            }
        }

        case SET_FOLLOW_FRIEND: {
            let filteredFriend = state.users.filter((friend) => {
                return friend.id === action.id
            });
            filteredFriend[0].followed = true;
            return {
                ...state
            }
        }

        case SET_UNFOLLOW_FRIEND: {
            let filteredFriend = state.users.filter((friend) => {
                return friend.id === action.id
            });
            filteredFriend[0].followed = false;
            return {
                ...state
            }
        }

        default: {
            return state
        }
    }
};

export const followFriendThunk = (userId) => (dispatch) => {
    axiosInstance
        .post(`follow/${userId}`)
        .then(result => {
            if (result.data.resultCode == 0) {
                dispatch(followFriendsAC(userId))
            }
        })
};

export const unfollowFriendThunk = (userId) => (dispatch) => {
    axiosInstance
        .delete(`follow/${userId}`)
        .then(result => {
            if (result.data.resultCode == 0) {
                dispatch(unfollowFriendsAC(userId))
            }
            else{
                axiosInstance
                    .post(`follow/${userId}`)
                    .then(result => {
                        if (result.data.resultCode == 0) {
                            dispatch(followFriendsAC(userId))
                            return true
                        }
                    })
                    .then( result => {
                        if(result === true){
                            axiosInstance
                                .delete(`follow/${userId}`)
                                .then(result => {
                                    if (result.data.resultCode == 0) {
                                        dispatch(unfollowFriendsAC(userId))
                                    }
                                })
                        }
                    })
            }
        })
};


export const getUsersThunk = () => (dispatch) => {
    dispatch(setStatusAC(statuses.INPROGRESS));
    axiosInstance
        .get("users")
        .then((result) => result.data.totalCount)
        .then((totalCount) => axiosInstance.get(`users?count=${totalCount}`))
        .then((result) => {
            console.log(result.data.items)
            dispatch(setStatusAC(statuses.SUCCESS));
            dispatch(setUsersAC(result.data.items));
        })
};

export const followFriendsAC = (id) => {
    return {
        type: SET_FOLLOW_FRIEND,
        id
    }
};

export const unfollowFriendsAC = (id) => {
    return {
        type: SET_UNFOLLOW_FRIEND,
        id
    }
};

export const setUsersAC = (users) => {
    return {
        type: SET_FRIENDS,
        users
    }
};

export const setStatusAC = (status) => {
    return {
        type: SET_STATUS,
        status
    }
};

export const friendsSelector = (state) => {
    let friends = state.friendsPage.users;
    let friendsAsArray = Object.keys(friends).map(key => friends[key]);
    return friendsAsArray
};

export default FriendsPageReducer;