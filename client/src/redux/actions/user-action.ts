import {
    fetchAuthActionCreatorType, fetchDoctorScheduleActionCreatorType,
    getOneUserActionCreatorType,
    getUserActionCreatorType,
    getUsersListActionCreatorType
} from "./types";
import {SigninResponseType, UserType} from "../../types";

export const FETCH_AUTH = 'FETCH_AUTH';
export const GET_USER = 'GET_USER';
export const GET_USERS_LIST = 'GET_USERS_LIST';
export const GET_ONE_USER = 'GET_ONE_USER';
export const GET_TEMPORARY_USER = 'GET_TEMPORARY_USER';

export const fetchAuthActionCreator = (): fetchAuthActionCreatorType => {
    return {
        type: FETCH_AUTH
    }
};

export const getUserActionCreator = (user: UserType): getUserActionCreatorType => {
    return {
        type: GET_USER,
        payload: user
    }
};

export const getUsersListActionCreator = (users: Array<UserType>): getUsersListActionCreatorType => {
    return {
        type: GET_USERS_LIST,
        payload: users
    }
};

export const getOneUserActionCreator = (user: UserType): getOneUserActionCreatorType => {
    return {
        type: GET_ONE_USER,
        payload: user
    }
};
