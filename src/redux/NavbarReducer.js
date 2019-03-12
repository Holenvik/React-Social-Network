let initialState = {
    navbar: [
        {name: "Profile", link: "/profile"},
        {name: "Message", link: "/message"},
        {name: "News", link: "/news"},
        {name: "Music", link: "/music"},
        {name: "Settings", link: "/settings"},
        {name: "Friends", link: "/friends"},
        {name: "ToDo", link: "/todo"},
        {name: "LogIn", link: "/login"},
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

};

let NavbarReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state
        }
    }
};

export default NavbarReducer