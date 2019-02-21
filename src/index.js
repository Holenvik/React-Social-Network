import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {combineReducers, createStore} from "redux";
import DialogPageReducer from "./redux/DialogsPageReducer";
import NavbarReducer from "./redux/NavbarReducer";
import ProfilePageReducer from "./redux/ProfilePageReducer";

let combinedReducers = combineReducers({
    dialogsPage: DialogPageReducer,
    navbarBlock: NavbarReducer,
    profilePage: ProfilePageReducer,
});


let store = createStore(combinedReducers);

store.subscribe(() => {
    let state = store.getState();
    rerenderPage(state)
});

const rerenderPage = () => {
    ReactDOM.render(
        <App state={store.getState()}
             store={store}/>,
        document.getElementById("root")
    );
};

rerenderPage(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
