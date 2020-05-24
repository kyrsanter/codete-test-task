import React, {FC, useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateType} from "../redux/store";
import Preloader from "../components/preloader/preloader";
import DoctorCabinet from "../components/doctor-cabinet/doctor-cabinet";
import {getDoctorsScheduleThunk, sendDoctorsScheduleThunk} from "../redux/thunk/schedule-thunk";
import {DoctorScheduleType} from "../types";

const CabinetContainer: FC<PropsFromRedux> = (props) => {

    useEffect(() => {
            props.getDoctorsSchedule(props.id)
        } ,[]);

    if (props.isFetching) {
        return <Preloader/>
    }

    return <DoctorCabinet
                sendData={props.sendDoctorSchedule}
                docSchedule={props.docSchedule}
                isFetchingSchedule={props.isFetchingSchedule}
                />
};

const mapStateToProps = (state: RootStateType) => {
    return {
        isFetching: state.user.fetching,
        docSchedule: state.docSchedule.doctorsSchedule,
        isFetchingSchedule: state.docSchedule.fetchingDoctorSchedule
    }
};

const mapDispatchToProps = {
    sendDoctorSchedule: (doctorSchedule: DoctorScheduleType) => sendDoctorsScheduleThunk(doctorSchedule),
    getDoctorsSchedule: (id: string) => getDoctorsScheduleThunk(id)
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector> & {
    id: string
}

export default connector(CabinetContainer)