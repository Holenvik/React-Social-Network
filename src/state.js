import {rerender} from './render';

let state = {
    navbar: [
        {name: "Profile", link: "/profile"},
        {name: "Message", link: "/message"},
        {name: "News", link: "/news"},
        {name: "Music", link: "/music"},
        {name: "Settings", link: "/settings"}
    ],
    friends: [
        {
            name: "Liza",
            picture:
                "https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
        },
        {
            name: "Vadim",
            picture:
                "https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
        },
        {
            name: "Dmitrii",
            picture:
                "https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
        }
    ],
    activeChatId: 1,
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
    chatStatus: 'not-loaded',
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
        ]
    },
    sidebar: []
};

export let addPost = postMessage => {
    let newPost = {
        id: 3,
        message: postMessage
    };
    state.profile.posts.push(newPost);
    rerender(state)
};

export let addMessage = dialogMessage => {
    let newMessage = {
        id: 7,
        content: dialogMessage
    };
    state.messages.push(newMessage);
    rerender(state)
}

export default state;
