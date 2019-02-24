import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {combineReducers, createStore} from "redux";
import DialogPageReducer from "./redux/DialogsPageReducer";
import NavbarReducer from "./redux/NavbarReducer";
import ProfilePageReducer from "./redux/ProfilePageReducer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const combinedReducers = combineReducers({
    dialogsPage: DialogPageReducer,
    navbarBlock: NavbarReducer,
    profilePage: ProfilePageReducer,
});


const store = createStore(combinedReducers);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
);


// rerenderPage(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
