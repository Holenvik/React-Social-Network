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

};

const ADD_POST = "network/profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "network/profile/UPDATE-NEW-POST-TEXT";

const ProfilePageReducer = (state = initialState, action) => {
    let copyState;

    switch (action.type) {
        case ADD_POST:
            debugger
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
        default:
            return state
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