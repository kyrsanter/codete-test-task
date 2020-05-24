import {fetchDoctorScheduleActionCreatorType, getDoctorScheduleActionCreatorType} from "./types";
import {DoctorScheduleResponseType} from "../../types";

export const FETCH_DOCTOR_SCHEDULE = 'FETCH_DOCTOR_SCHEDULE';
export const GET_DOCTOR_SCHEDULE = 'GET_DOCTOR_SCHEDULE';

export const fetchDoctorScheduleActionCreator = (): fetchDoctorScheduleActionCreatorType => {
    return {
        type: FETCH_DOCTOR_SCHEDULE
    }
};

export const getDoctorScheduleActionCreator = (doctorsSchedule: Array<DoctorScheduleResponseType>): getDoctorScheduleActionCreatorType => {
    return {
        type: GET_DOCTOR_SCHEDULE,
        payload: doctorsSchedule
    }
};