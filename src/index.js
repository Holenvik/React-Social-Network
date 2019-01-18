import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let state = {
  messages: [],
  posts: ["Hi, how are you now", "Good"],
  profile: {
    name: "Kirill",
    birthday: "17 march",
    city: "Minsk",
    education: "BSUIR",
    link: "vk.com/kirill_fedosow",
    picture: "https://png.icons8.com/color/1600/circled-user-male-skin-type-1-2.png"
  }
};

ReactDOM.render(<App items={state} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
