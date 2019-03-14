import axiosInstance from "../DAL/AxiosInstance";
import {statuses} from "./STATUSES";
import {setIsAuth} from "./AuthReducer";

const SET_STATUS = 'network/set-status';
const SET_MESSAGE = 'network/set-message';

let initialState = {
    status: statuses.NOT_INITIALIZED,
    message: ''
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_MESSAGE: {
            return {
                ...state,
                message: action.message
            }
        }
        default: {
            return state
        }
    }
};


export const LoginThunk = (login, password, rememberMe, isAuth) => (dispatch) => {
    dispatch(setStatus(statuses.INPROGRESS));
    axiosInstance
        .post("auth/login", {
            email: login,
            password,
            rememberMe
        }).then(result => {
            if (result.data.resultCode === 0) {
                dispatch(setStatus(statuses.SUCCESS));
                dispatch(setIsAuth(true))
            } else {
                dispatch(setStatus(statuses.ERROR));
                dispatch(setMessage(result.data.messages[0]));
            }
        }
    )
};

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    message
})

export default LoginReducer