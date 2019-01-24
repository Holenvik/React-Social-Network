import React from "react";

let state = {
  dialogs: [
    {
      id: 1,
      title: "Kirill",
      messages: [{}]
    }
  ],
  posts: [
    {
      id: 1,
      message: "Hi, how are you?"
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
      posts: [
        { id: 1, message: "Hi, how are you?" },
        { id: 2, message: "Hi, how are you?" }
      ]
    }
  ],

  profile: {
    name: "Kirill",
    birthday: "17 march",
    city: "Minsk",
    education: "BSUIR",
    link: "vk.com/kirill_fedosow",
    picture:
      "https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
  }
};

export default state;
