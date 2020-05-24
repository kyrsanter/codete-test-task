import {MessageType} from "../../types";
import {CombineMessageActionTypes, GetMessageActionCreatorType} from "../actions/types";

const messageState = {
    hasMessage: false,
    messages: [] as [] | Array<MessageType>
};

type MessageStateType = typeof messageState

export const messageReducer = (state = messageState, action: CombineMessageActionTypes): MessageStateType => {
    switch (action.type) {
        case "GET_MESSAGE":
            return {
                ...state,
                hasMessage: true,
                messages: [...action.payload]
            };
            case "CLEAR_MESSAGES":
                return {
                    ...state,
                    hasMessage: false,
                    messages: []
                };
        default:
            return state;
    }
};