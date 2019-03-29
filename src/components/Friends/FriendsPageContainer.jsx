import React, {Component} from "react"
import {connect} from "react-redux";
import {followFriendThunk, friendsSelector, getUsersThunk, unfollowFriendThunk} from "../../redux/FriendsPageReducer";
import FriendsPage from "./FriendsPage.jsx";


class FriendsPageContainer extends Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return <FriendsPage {...this.props} />
    }
}


let mapStateToProps = (state) => {
    return {
        users: friendsSelector(state),
        status: state.friendsPage.status
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsersThunk())
        },
        followFriend: (userId) => {
            dispatch(followFriendThunk(userId))
        },
        unfollowFriend: (userId) => {
            dispatch(unfollowFriendThunk(userId))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPageContainer);