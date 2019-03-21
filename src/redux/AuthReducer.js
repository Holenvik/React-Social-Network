import axiosInstance from "../DAL/AxiosInstance";
import {statuses} from "./STATUSES";
import {setMessage, setStatusLogin} from "./LoginReducer";

const SET_IS_AUTH = 'network/set-isauth';
const SET_USER_INFO = 'network/set-user-info';

let initialState = {
    isAuth: false,
    userInfo: {
        userId: null,
        userName: null,
        email: null,
    }
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH: {
            return {
                ...state,
                isAuth: action.value
            }
        }
        case SET_USER_INFO: {
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userId: action.userId,
                    userName: action.userName,
                    email: action.userEmail
                }
            }
        }
        default: {
            return state
        }
    }
};

export const meThunk = () => (dispatch) => {
    axiosInstance
        .get('auth/me')
        .then(result => {
            if (result.data.resultCode === 0) {
                dispatch(setIsAuth(true));
                dispatch(setUserInfo(result.data.data.id, result.data.data.login, result.data.data.email));
            }
        })
};

export const logOutThunk = () => (dispatch) => {
    dispatch(setIsAuth(false));
    axiosInstance
        .post('auth/logout')
        .then(result => {
            if (result.data.resultCode === 0) {
                dispatch(setUserInfo(null, null, null));
                dispatch(setStatusLogin(statuses.SUCCESS))
            }
        })
};


export const LoginThunk = (login, password, rememberMe, isAuth) => (dispatch) => {
    dispatch(setStatusLogin(statuses.INPROGRESS));
    axiosInstance
        .post("auth/login", {
            email: login,
            password,
            rememberMe
        }).then(result => {
            if (result.data.resultCode === 0) {
                axiosInstance
                    .get('auth/me')
                    .then(result => {
                        if (result.data.resultCode === 0) {
                            dispatch(setIsAuth(true));
                            dispatch(setUserInfo(result.data.data.id, result.data.data.login, result.data.data.email));
                        }
                    })
            } else {
                dispatch(setStatusLogin(statuses.ERROR));
                dispatch(setMessage(result.data.messages[0]));
            }
        }
    )
};


export const setIsAuth = (value) => ({
    type: SET_IS_AUTH,
    value
});

export const setUserInfo = (userId, userName, userEmail) => ({
    type: SET_USER_INFO,
    userId,
    userName,
    userEmail
});


export default AuthReducer