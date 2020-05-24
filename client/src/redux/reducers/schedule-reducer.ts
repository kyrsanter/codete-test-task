import {CombineScheduleActionTypes} from "../actions/types";
import {DoctorScheduleResponseType} from "../../types";

const scheduleReducer = {
    fetchingDoctorSchedule: false,
    doctorsSchedule: [] as [] | Array<DoctorScheduleResponseType>
};

type ScheduleStateType = typeof scheduleReducer

export const sheduleReducer = (state = scheduleReducer, action: CombineScheduleActionTypes): ScheduleStateType => {
    switch (action.type) {
        case "FETCH_DOCTOR_SCHEDULE":
            return {
                ...state,
                fetchingDoctorSchedule: true
            };
        case "GET_DOCTOR_SCHEDULE":
            return {
                ...state,
                fetchingDoctorSchedule: false,
                doctorsSchedule: [...action.payload]
            };
        default:
            return state;
    }
};