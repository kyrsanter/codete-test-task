import {
    FETCH_AUTH,
    GET_ONE_USER,
    GET_USER,
    GET_USERS_LIST
} from "./user-action";
import {DoctorScheduleResponseType, MessageType, UserType} from "../../types";
import {CLEAR_MESSAGES, GET_MESSAGE} from "./message-action";
import {FETCH_DOCTOR_SCHEDULE, GET_DOCTOR_SCHEDULE} from "./schedule-action";
import {CLOSE_POPUP, SHOW_POPUP} from "./popup-action";

export type fetchAuthActionCreatorType = {
    type: typeof FETCH_AUTH
}

export type getUserActionCreatorType = {
    type: typeof GET_USER
    payload: UserType
}

export type getUsersListActionCreatorType = {
    type: typeof GET_USERS_LIST
    payload: Array<UserType>
}

export type getOneUserActionCreatorType = {
    type: typeof GET_ONE_USER
    payload: UserType
}

export type CombineUsersActionTypes = fetchAuthActionCreatorType | getUserActionCreatorType | getUsersListActionCreatorType | getOneUserActionCreatorType | fetchDoctorScheduleActionCreatorType

export type GetMessageActionCreatorType = {
    type: typeof GET_MESSAGE
    payload: Array<MessageType>
}

export type ClearMessagesActionCreatorType = {
    type: typeof CLEAR_MESSAGES
}

export type CombineMessageActionTypes = GetMessageActionCreatorType | ClearMessagesActionCreatorType;


export type fetchDoctorScheduleActionCreatorType = {
    type: typeof FETCH_DOCTOR_SCHEDULE
}

export type getDoctorScheduleActionCreatorType = {
    type: typeof GET_DOCTOR_SCHEDULE,
    payload: Array<DoctorScheduleResponseType>
}

export type CombineScheduleActionTypes = fetchDoctorScheduleActionCreatorType | getDoctorScheduleActionCreatorType;

export type ShowPopupActionCreatorType = {
    type: typeof SHOW_POPUP
}

export type ClosePopupActionCreatorType = {
    type: typeof CLOSE_POPUP
}

export type CombinePopupActionCreatorsTypes = ShowPopupActionCreatorType | ClosePopupActionCreatorType;