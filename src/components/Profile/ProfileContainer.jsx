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

        let userIdFromUrl = this.props.match.params.userID;
        this.props.getUserInfo(userIdFromUrl);
        if (this.props.contact.me.id === +userIdFromUrl) {
            this.props.setOwner(true)
        }

    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        contact: state.profilePage
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


