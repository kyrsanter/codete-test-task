import {UserType} from "../../types";
import {CombineUsersActionTypes} from "../actions/types";

const userState = {
    fetching: false,
    currentUser: null as null | UserType,
    users: [] as [] | Array<UserType>
};

type UserStateType = typeof userState

export const userReducer = (state = userState, action: CombineUsersActionTypes): UserStateType => {
    switch (action.type) {
        case "FETCH_AUTH":
            return {
                ...state,
                fetching: true
            };
        case "GET_USER":
            return {
                ...state,
                fetching: false,
                currentUser: action.payload
            };
        case "GET_USERS_LIST":
            return {
                ...state,
                fetching: false,
                users: [...action.payload]
            };
        case "GET_ONE_USER":
            return {
                ...state,
                fetching: false,
                currentUser: action.payload
            };
        default:
            return state;
    }
};