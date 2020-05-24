import {ClosePopupActionCreatorType, ShowPopupActionCreatorType} from "./types";

export const SHOW_POPUP = 'SHOW_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export const showPopupActionCreator = (): ShowPopupActionCreatorType => {
    return {
        type: SHOW_POPUP
    }
};

export const sclosePopupActionCreator = (): ClosePopupActionCreatorType => {
    return {
        type: CLOSE_POPUP
    }
};
