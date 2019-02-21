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
    let newState = {...state};

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                content: newState.newMessageText
            };
            newState.messages.push(newMessage);
            newState.newMessageText = "";
            return newState;

        case UPDATE_NEW_MESSAGE_TEXT:
            newState.newMessageText = action.text;
            return newState;

        default:
            return newState
    }
};

export const updateNewMessageTextCreator = (text) => {
    return {
        type:UPDATE_NEW_MESSAGE_TEXT,
        text: text
    }
};

export const addMessageCreator = (text) => {
    return {
        type: ADD_MESSAGE,
        text: text
    }
};

export default DialogPageReducer;