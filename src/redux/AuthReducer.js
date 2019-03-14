import axiosInstance from "../DAL/AxiosInstance";

const SET_IS_AUTH = 'network/set-isauth';
const SET_USER_INFO = 'network/set-user-info';

let initialState = {
    isAuth: false,
    userInfo: {
        userId: null,
        userName: null,
        avatarUrl: ''
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
            debugger
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userId: action.userId,
                    userName: action.userName
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
                dispatch(setUserInfo(result.data.data.userId, result.data.data.login));
            }
        })
};

export const logOutThunk = () => (dispatch) => {
    axiosInstance
        .post('auth/logout')
        .then(result => {
            if (result.data.resultCode === 0) {
                dispatch(setIsAuth(false));
                dispatch(setUserInfo(null, null));

            }
        })
};

export const setIsAuth = (value) => ({
    type: SET_IS_AUTH,
    value
});

export const setUserInfo = (userId, userName) => ({
    type: SET_USER_INFO,
    userId,
    userName
});


export default AuthReducer