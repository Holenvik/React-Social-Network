import {statuses} from "./STATUSES";


const SET_STATUS_LOGIN = 'network/set-status-login';
const SET_MESSAGE = 'network/set-message';

let initialState = {
    status: statuses.NOT_INITIALIZED,
    message: ''
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS_LOGIN: {
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



export const setStatusLogin = (status) => ({
    type: SET_STATUS_LOGIN,
    status
});

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    message
});

export default LoginReducer