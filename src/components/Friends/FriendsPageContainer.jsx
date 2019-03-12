import React, {Component} from "react"
import {connect} from "react-redux";
import {getUsersThunk} from "../../redux/FriendsPageReducer";
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
        users: state.friendsPage.users,
        status: state.friendsPage.status
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () =>{
            dispatch(getUsersThunk())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPageContainer);