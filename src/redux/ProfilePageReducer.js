let initialState = {
    profile: {
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
        newPostText: null
    },
};

const ADD_POST = "network/profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "network/profile/UPDATE-NEW-POST-TEXT";

const ProfilePageReducer = (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: newState.profile.newPostText
            };
            newState.profile.posts.push(newPost);
            newState.profile.newPostText = "";
            return newState
        case UPDATE_NEW_POST_TEXT:
            newState.profile.newPostText = action.text;
            return newState
        default:
            return newState
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