import React from "react"
import {connect} from "react-redux";
import {
    addPostCreator, getMeInfoThunk,
    getUserInfoThunk, setEditModeCreator, setIsOwnerCreactor, setNewProfileInfoCreator,
    updateNewPostTextCreator, updateUserInfoThunk
} from "../../redux/ProfilePageReducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";


class ProfilePageContainer extends React.Component {


    componentDidMount() {
        let userIdFromUrl;
        let match = this.props.match;
        if (match.path === "/user/:id") {
            userIdFromUrl = match.params.id;
            this.props.setOwner(false);
            this.props.setEditMode(false);
            this.props.getUserInfo(userIdFromUrl);
        } else if (match.path === "/profile"){
            debugger
            userIdFromUrl = this.props.auth.userInfo.userId;
            this.props.setOwner(true);
            this.props.getUserInfo(userIdFromUrl);
        }
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        contact: state.profilePage,
        auth: state.auth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },

        updatePostText: (text) => {
            dispatch(updateNewPostTextCreator(text))
        },

        getUserInfo: (userIdFromUrl) => {
            dispatch(getUserInfoThunk(userIdFromUrl))
        },

        getMeInfo: () => {
            dispatch(getMeInfoThunk())
        },

        setOwner: (bool) => {
            dispatch(setIsOwnerCreactor(bool))
        },

        setEditMode: (bool) => {
            dispatch(setEditModeCreator(bool))
        },

        setNewProfileInfo: (newValue, contactKey) => {
            dispatch(setNewProfileInfoCreator(newValue, contactKey))
        },

        updateUserInfo: () => {
            dispatch(updateUserInfoThunk())
        }

    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer));


