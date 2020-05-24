import {ClearMessagesActionCreatorType, GetMessageActionCreatorType} from "./types";
import {MessageType} from "../../types";

export const GET_MESSAGE = 'GET_MESSAGE';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export const getMessageActionCreator = (message: Array<MessageType>): GetMessageActionCreatorType => {
    return {
        type: GET_MESSAGE,
        payload: message
    }
};

export const clearMessagesActionCreator = (): ClearMessagesActionCreatorType => {
    return {
        type: CLEAR_MESSAGES,
    }
};