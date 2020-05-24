import {SigninInputsType, SigninResponseType, SignupInputsType} from "../../types";
import Service from "../../service/Service";
import {
    fetchAuthActionCreator,
    getOneUserActionCreator,
    getUserActionCreator,
    getUsersListActionCreator
} from "../actions/user-action";

import cookie from 'cookie';


let service = new Service();

export const SignupUserThunk = (registrationData: SignupInputsType) => async (dispatch: any) => {
    let response = await service.postRequest(registrationData, '/signup');
    console.log(response, 'thunk')
};

export const SigninUserThunk = (loginData: SigninInputsType) => async (dispatch: any) => {
    dispatch(fetchAuthActionCreator());
    let response = await service.postRequest(loginData, '/signin');
    debugger
    let {token, id} = response;
    localStorage.setItem('token', token)
};

export const getUsersThunk = () => async (dispatch: any) => {
    dispatch(fetchAuthActionCreator());
    let token = localStorage.getItem('token');
    let response = await service.getRequest(null || token, '/users/all');
    dispatch(getUsersListActionCreator(response));
};

export const getUserByIdThunk = (id: string) => async (dispatch: any) => {
    dispatch(fetchAuthActionCreator());
    let token = localStorage.getItem('token');
    let response = await service.getRequest(null || token, `/users/${id}`);
    dispatch(getOneUserActionCreator(response));
};