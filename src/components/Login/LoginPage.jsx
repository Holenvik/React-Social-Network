import React from "react"
import {connect} from "react-redux";
import {statuses} from "../../redux/STATUSES";
import {Redirect} from "react-router-dom";
import {LoginThunk} from "../../redux/AuthReducer";

let LoginPage = (props) => {
    let {login} = props;
    let {status, isAuth} = props;

    if (isAuth) {
        return <Redirect to="/profile"/>
    }

    let loginRef = React.createRef();
    let passwordRef = React.createRef();
    let rememberMeRef = React.createRef();

    let onLogin = () => {
        login && login(loginRef.current.value,
            passwordRef.current.value,
            rememberMeRef.current.checked)
    };

    let errorMessageBlock = status === statuses.ERROR &&
        <div className='error'>
            {props.message}
        </div>;

    return (
        <div>
            <div><input ref={loginRef}
                        type="text"
                        defaultValue="mandarinkajok@gmail.com"/>
            </div>
            <div><input ref={passwordRef}
                        type="password"
                        defaultValue="200999"/>
            </div>
            <div><input ref={rememberMeRef}
                        type="checkbox"/>
            </div>
            <div>
                <button onClick={onLogin}
                        disabled={status === statuses.INPROGRESS}>
                    LogIn
                </button>
            </div>
            {errorMessageBlock}
        </div>
    )
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    status: state.loginPage.status,
    message: state.loginPage.message,
    captcha: state.loginPage.captchaUrl,
});

let mapDispatchToProps = (dispatch) => ({
    login: (login, password, rememberMe) => {
        dispatch(LoginThunk(login, password, rememberMe))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

