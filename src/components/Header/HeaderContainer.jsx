import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logOutThunk, meThunk} from "../../redux/AuthReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.me()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    userInfo: state.auth.userInfo,
    isAuth: state.auth.isAuth
});

let mapDispatchToProps = (dispatch) => ({
    me: () => {
        dispatch(meThunk())
    },
    logOut: () => {
        dispatch(logOutThunk())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
