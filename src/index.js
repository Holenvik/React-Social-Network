import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {store} from "./state";

const rerenderPage = (store) => {
    ReactDOM.render(
        <App items={store.getState()}
             store={store}/>,
        document.getElementById("root")
    );
};

rerenderPage(store);

store.subscribe(rerenderPage);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
