import React from "react";

let state = {
  navbar: [
    { name: "Profile", link: "/profile" },
    { name: "Message", link: "/message" },
    { name: "News", link: "/news" },
    { name: "Music", link: "/music" },
    { name: "Settings", link: "/settings" }
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
  dialogs: [
    {
      id: 1,
      title: "Kirill",
      messages: [{}]
    }
  ],
  profilePage: {},
  dialogsPage: {},

  profileP: [
    {
      id: 1,
      name: "Kirill",
      birthday: "17 march",
      city: "Minsk",
      education: "BSUIR",
      link: "vk.com/kirill_fedosow",
      picture:
        "https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png",
      posts: [{ message: "Hi, how are you?" }, { message: "Are you ready?" }]
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
    posts: [{ message: "Hi, how are you?" }, { message: "Are you ready?" }]
  },
  sidebar: []
};

export default state;
