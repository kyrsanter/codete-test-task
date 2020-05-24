import React, {FC} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateType} from "../redux/store";
import Login from "../components/login/login";
import {SigninInputsType, SignupInputsType} from "../types";
import {SigninUserThunk, SignupUserThunk} from "../redux/thunk/user-thunk";

const LoginPageContainer: FC<PropsFromRedux> = (props) => {

    return <Login signInUser={props.signInUser} registerNewUser={props.registerNewUser}/>
};

const mapStateToProps = (state: RootStateType) => {
    return {}
};

const mapDispatchToProps = {
    registerNewUser: (registrationData: SignupInputsType) => SignupUserThunk(registrationData),
    signInUser: (loginData: SigninInputsType) => SigninUserThunk(loginData)
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(LoginPageContainer)