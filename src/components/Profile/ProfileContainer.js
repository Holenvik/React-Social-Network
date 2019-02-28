import {connect} from "react-redux";
import {addPostCreator, updateNewPostTextCreator} from "../../redux/ProfilePageReducer";
import Profile from "./Profile";

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
        }

    }
};

let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer


