import {statuses} from "./STATUSES";
import axiosInstance from "../DAL/AxiosInstance";

const SET_USERS = 'SN/FRIENDS/SET_USERS';
const SET_STATUS = 'SN/FRIENDS/SET_STATUS';

let initialState = {
    status: statuses.NOT_INITIALIZED,
    users: [],
};

const FriendsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }

        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        default: {
            return state
        }
    }
};

export const getUsersThunk = () => (dispatch) => {
    dispatch(setStatusAC(statuses.INPROGRESS));
    axiosInstance
        .get("users")
        .then((result) => result.data.totalCount)
        .then((totalCount) => axiosInstance.get(`users?count=${totalCount}`))
        .then((result) => {
            dispatch(setStatusAC(statuses.SUCCESS));
            dispatch(setUsersAC(result.data.items));
        })
};
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setStatusAC = (status) => ({type: SET_STATUS, status});

export default FriendsPageReducer;