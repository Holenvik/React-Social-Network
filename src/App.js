import React from "react";
import "./App.css";
import Head from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsPage from "./components/Dialogs/DialogsPage";
import {Route, BrowserRouter} from "react-router-dom";

const App = props => {
    // debugger;
    let {state, store} = props;
    let {dialogsPage, navbarBlock, profilePage} = state;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Head/>

                <Nav
                    navbar={navbarBlock.navbar}
                    friends={navbarBlock.friends}/>

                <Route path="/profile"
                       render={() => <Profile
                           contact={profilePage.profile}
                           // addPost={props.store.addPost.bind(store)}
                           // updatePostText={props.store.updateNewPostText.bind(store)}
                           store={store}
                           newPostText={profilePage.profile.newPostText}/>}/>
                <Route exact path="/message"
                       render={() => <DialogsPage
                           // addMessage={props.store.addMessage.bind(store)}
                           store={store}
                           messages={dialogsPage.messages}
                           newMessageText={dialogsPage.newMessageText}/>}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
