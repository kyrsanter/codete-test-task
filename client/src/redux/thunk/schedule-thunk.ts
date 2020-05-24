import {getMessageActionCreator} from "../actions/message-action";
import Service from "../../service/Service";
import jwtDecode from 'jwt-decode';
import {DoctorScheduleType} from "../../types";
import {fetchDoctorScheduleActionCreator, getDoctorScheduleActionCreator} from "../actions/schedule-action";
import store from "../store";

let service = new Service();

export const sendDoctorsScheduleThunk = (docSchedule: DoctorScheduleType) => async (dispatch: any) => {
    let token = localStorage.getItem('token');
    // @ts-ignore
    let decoded = await jwtDecode(token);
    console.log(docSchedule);
    let response = await service.postRequest(docSchedule, `/schedule/add/${decoded.userId}`);
    dispatch(getDoctorScheduleActionCreator(response));
};

export const getDoctorsScheduleThunk = (id: string) => async (dispatch: any) => {
    dispatch(fetchDoctorScheduleActionCreator());
    let token = localStorage.getItem('token');
    let response = await service.getRequest(token || null, `/schedule/doctor/${id}`);
    dispatch(getDoctorScheduleActionCreator(response));
};