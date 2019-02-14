import React from "react";
import "./App.css";
import Head from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsPage from "./components/Dialogs/DialogsPage";
import {Route, BrowserRouter} from "react-router-dom";

const App = props => {
    // debugger;

    let {items, store} = props;
    let {profile, navbar, friends, messages} = items;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Head/>

                <Nav
                    navbar={navbar}
                    friends={friends}/>

                <Route path="/profile"
                       render={() => <Profile
                           contact={profile}
                           // addPost={props.store.addPost.bind(store)}
                           // updatePostText={props.store.updateNewPostText.bind(store)}
                           dispatch={props.store.dispatch.bind(store)}
                           newPostText={profile.newPostText}/>}/>
                <Route exact path="/message"
                       render={() => <DialogsPage
                           // addMessage={props.store.addMessage.bind(store)}
                           dispatch={props.store.dispatch.bind(store)}
                           messages={messages}/>}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
