import {createStore, applyMiddleware, combineReducers} from "redux";
import {messageReducer, userReducer, sheduleReducer} from "./reducers";
import thunk from "redux-thunk";
import {popupReducer} from "./reducers/popup-reducer";

let rootReducer = combineReducers({
    user: userReducer,
    messages: messageReducer,
    docSchedule: sheduleReducer,
    popup: popupReducer
});

export type RootStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

