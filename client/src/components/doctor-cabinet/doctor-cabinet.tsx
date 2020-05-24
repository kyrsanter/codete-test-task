import React, {FC, Props, useRef, useState} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DatePicker from "../date-picker/date-picker";
import TimePicker from "../time-picker/time-picker";
import InputRange from "../input-range/input-range";
import {Button} from "@material-ui/core";
import {Simulate} from "react-dom/test-utils";
import {DoctorScheduleResponseType, DoctorScheduleType} from "../../types";
import DoctorScheduleList from "../doctor-schedule-list/doctor-schedule-list";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

type PropsType = {
    sendData: (doctorSchedule: DoctorScheduleType) => void
    docSchedule: Array<DoctorScheduleResponseType>
    isFetchingSchedule: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        buttonWrap: {
            margin: 'auto'
        },
        scheduleWrap: {
            paddingTop: 20,
            paddingBottom: 20,
        }
    }),
);

const DoctorCabinet: FC<PropsType> = (props) => {
    let formRef = useRef<HTMLFormElement>(null);
    const classes = useStyles();
    let [state, setState] = useState<any>({
        date: '',
        timeFrom: '',
        timeTo: '',
        patientsCount: 5,
        errors: []
    });

    const validator = (name: string, value: Date | null): Array<string | null> => {
        let errors = [];
        switch (name) {
            case 'date':
                if (value && new Date() > value) {
                    errors.push('Incorrect date')
                } else {
                    setState({...state, [name]: value})
                }
                break;
            case 'timeFrom':
                if (value && +state.timeTo < +value) {
                    setState({...state, [name]: value})
                } else {
                    errors.push('Incorrect date');
                    break;
                }
                if (value && +state.timeFrom < +value) {
                    setState({...state, [name]: value})
                } else {
                    errors.push('Incorrect date');
                }
                break;
            case 'timeTo':
                if (value && +state.timeFrom < +value) {
                    setState({...state, [name]: value})
                } else {
                    errors.push('Incorrect time')
                }
                break;
            case 'patientsCount':

                break;
        }
        return errors;
    };

    const handleChange = (name: string, value: Date | null) => {
        let errorsValid = validator(name, value);
        if (errorsValid.length !== 0) {
            setState((state: any) => {
                return {
                    ...state,
                    errors: [...errorsValid]
                }
            })
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.errors.length !== 0 || state.date === '' || state.timeFrom === '' || state.timeTo === '') {
            // error
            console.log(state.errors)
        } else {
            let {errors, ...data} = state;

            props.sendData(data)
            //send data
        }

    };

    const func = (e: React.ChangeEvent<{}>, value: number | number[]) => {
        setState((state: any) => {
            return {
                ...state,
                patientsCount: state.patientsCount + value - 5
            }
        })
    };

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <DatePicker
                                    change={handleChange}
                                    name="date"/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper}>
                                <TimePicker
                                    change={handleChange}
                                    label='from'
                                    name="timeFrom"/>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper}>
                                <TimePicker
                                    change={handleChange}

                                    label='to'
                                    name="timeTo"/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <InputRange
                                    onBlur={func}
                                    name="patientsCount"/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.buttonWrap}>
                            <Paper className={classes.paper}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary">
                                    Submit
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </form>
            <div className={classes.scheduleWrap}>
                {
                    !props.isFetchingSchedule ? (
                        <DoctorScheduleList
                            docSchedule={props.docSchedule}/>
                    ) : null
                }
            </div>
        </>
    );
};


export default DoctorCabinet;