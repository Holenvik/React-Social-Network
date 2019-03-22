import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

import "./index.css";

import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import DialogPageReducer from "./redux/DialogsPageReducer";
import NavbarReducer from "./redux/NavbarReducer";
import ProfilePageReducer from "./redux/ProfilePageReducer";
import FriendsPageReducer from "./redux/FriendsPageReducer";
import thunk from "redux-thunk";
import ToDoPageReducer from "./redux/ToDoPageReducer";
import LoginReducer from "./redux/LoginReducer";
import AuthReducer, {setUserInfo} from "./redux/AuthReducer";
import axiosInstance from "./DAL/AxiosInstance";

const combinedReducers = combineReducers({
    dialogsPage: DialogPageReducer,
    navbarBlock: NavbarReducer,
    profilePage: ProfilePageReducer,
    friendsPage: FriendsPageReducer,
    toDoPage: ToDoPageReducer,
    loginPage: LoginReducer,
    auth: AuthReducer,
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

ReactDOM.render(
    <>
     loading...
    </>
    ,
    document.getElementById("root")
);

axiosInstance
    .get('auth/me')
    .then(result => {
        if (result.data.resultCode === 0){
            store.dispatch(setUserInfo(result.data.data.id, result.data.data.login, result.data.data.email))
        }

    })
    .then( () => {
        ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
            ,
            document.getElementById("root")
        );
    });




serviceWorker.unregister();
