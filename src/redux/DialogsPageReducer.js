let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Kirill",
            logoUrl: "asdasd",
        },
        {
            id: 2,
            name: "Jenya",
            logoUrl: "asdasd"
        },
        {
            id: 3,
            name: "Liza",
            logoUrl: "asdasd",
        }
    ],
    messages: [
        {
            id: 1,
            content: "privet",
            addedTime: '2019-02-10 21:00',
            author: {
                id: 3,
                name: "Dmitrii",
                avatar: "https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
            },
            status: 'read', //unread, sent,loading
        },
        {
            id: 2,
            content: "Po pivu?",
            addedTime: '2019-02-10 21:00',
            author: {
                id: 3,
                name: "Dmitrii",
                avatar: "https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
            },
            status: 'read', //unread, sent,loading
        },
    ],
    newMessageText: "",
};

const ADD_MESSAGE = "network/dialog/ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "network/dialog/UPDATE-NEW-MESSAGE-TEXT";

const DialogPageReducer = (state = initialState, action) => {
    let copyState;

    switch (action.type) {

        case ADD_MESSAGE:
            copyState = {...state};
            let newMessage = {
                id: 7,
                content: state.newMessageText
            };
            copyState.messages.push(newMessage);
            copyState.newMessageText = "";
            return copyState;

        case UPDATE_NEW_MESSAGE_TEXT:
            copyState = {...state};
            copyState.newMessageText = action.text;
            return copyState;

        default:
            return state;
    }
};

export const updateNewMessageTextCreator = (text) => {
    return {
        type:UPDATE_NEW_MESSAGE_TEXT,
        text: text
    }
};

export const addMessageCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
};

export default DialogPageReducer;