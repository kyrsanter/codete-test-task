import {CombinePopupActionCreatorsTypes} from "../actions/types";

const popupState = {
    isPopup: false,
};

type PopupStateType = typeof popupState

export const popupReducer = (state = popupState, action: CombinePopupActionCreatorsTypes): PopupStateType => {
    switch (action.type) {
        case "CLOSE_POPUP":
            return {
                ...state,
                isPopup: false
            };
        case "SHOW_POPUP":
            return {
                ...state,
                isPopup: true
            };
        default:
            return state;
    }
};