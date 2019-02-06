import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {addMessage, addPost} from "./state";

 export let rerender = (state) => {
    //  debugger;
  ReactDOM.render(
    <App items={state} addPost={addPost} addMessage={addMessage}/>,
    document.getElementById("root")
  );
};


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
