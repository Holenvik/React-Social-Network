import axiosInstance from "../DAL/AxiosInstance";

let initialState = {
    name: "Kirill",
    birthday: "17 march",
    city: "Minsk",
    education: "BSUIR",
    link: "vk.com/kirill_fedosow",
    picture:
        "https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png",
    posts: [
        {id: 1, message: "Hi, how are you?"},
        {id: 2, message: "Are you ready?"},
    ],
    newPostText: "",

    profileInfo: null,
    editMode: false,
    me: false,
    isOwner: false
};

const ADD_POST = "network/profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "network/profile/UPDATE-NEW-POST-TEXT";
const SET_PROFILE_INFO = "network/profile/SET-PROFILE-INFO";
const SET_ME_INFO = "network/profile/SET-ME-INFO";
const SET_IS_OWNER = "network/profile/SET-IS-OWNER";
const SET_EDIT_MODE = "network/profile/SET-EDIT-MODE";
const SET_NEW_PROFILE_INFO = "network/profile/SET-NEW-PROFILE-INFO";

const ProfilePageReducer = (state = initialState, action) => {
    let copyState;

    switch (action.type) {
        case ADD_POST:
            copyState = {...state};
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            copyState.posts.unshift(newPost);
            copyState.newPostText = "";
            return copyState;

        case UPDATE_NEW_POST_TEXT:
            copyState = {...state};
            copyState.newPostText = action.text;
            return copyState;

        case SET_PROFILE_INFO:
            return {
                ...state, profileInfo: action.profileInfo
            };

        case SET_ME_INFO:
            return {
                ...state, me: action.me
            };

        case SET_IS_OWNER:
            return {
                ...state, isOwner: action.bool
            };

        case SET_EDIT_MODE:
            return {
                ...state, editMode: action.bool
            };

        case SET_NEW_PROFILE_INFO:
            copyState = {...state};
            copyState.profileInfo.contacts[action.contactKey] = action.newValue;
            return copyState;

        default:
            return state

    }
};

export const updateUserInfoThunk = () => (dispatch, getState) => {
    let state = getState();
    let profileInfo = state.profilePage.profileInfo;
    console.log(profileInfo)
    axiosInstance
        .put('profile', profileInfo)
        .then(result => {
            console.log(result)
        })
}

export const getUserInfoThunk = (userIdFromUrl) => (dispatch) => {
    axiosInstance
        .get('profile/' + userIdFromUrl)
        .then(result => {
            dispatch(setProfileInfoCreator(result.data))
        })
};

export const getMeInfoThunk = () => (dispatch) => {
    axiosInstance
        .get('auth/me')
        .then(result => {
            dispatch(setMeCreator(result.data.data))
        });
};

export const setNewProfileInfoCreator = (newValue, contactKey) => {
    return {
        type: SET_NEW_PROFILE_INFO,
        newValue,
        contactKey
    }
}

export const setEditModeCreator = (bool) => {
    return {
        type: SET_EDIT_MODE,
        bool
    }
}

export const setIsOwnerCreactor = (bool) => {
    return {
        type: SET_IS_OWNER,
        bool
    }
}

export const setMeCreator = (me) => {
    return {
        type: SET_ME_INFO,
        me
    }
};

export const setProfileInfoCreator = (profileInfo) => {
    return {
        type: SET_PROFILE_INFO,
        profileInfo
    }
};

export const updateNewPostTextCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: newText
    }
};

export const addPostCreator = () => {
    return {type: ADD_POST}
};

export default ProfilePageReducer;