import React, {FC} from "react";
import {DoctorScheduleResponseType} from "../../types";
import Grid from "@material-ui/core/Grid";
import {Box, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import './doctor-schedule-list.css'
import Popup from "../popup/popup";

type PropsType = {
    docSchedule: Array<DoctorScheduleResponseType>
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        boxStyle: {
            background: '#fff'
        },
    }),
);

const DoctorScheduleList: FC<PropsType> = (props) => {

    const classes = useStyles();

    const timeConverter = (patients: number, from: string, to: string) => {
        let h;
        let m;
        const convertPercentsToMinutes = (float: number | string): number => {
            return (60 * (+float * 10)) / 100;
        };
        let regExpForCombined = /([0-0][0-9]|[1-1][0-9]|[2-2][0-4]|[0-9])\.([0-9])/;
        let regExpforInpurValues = /([0-0][0-9]|[1-1][0-9]|[2-2][0-4])\:([0-5][0-9])/;
        let fromUNIX = (3 * 60 * 60 * 60 * 1000) + Date.parse(from);
        let toUNIX = (3 * 60 * 60 * 60 * 1000) + Date.parse(to);
        let fixedFrom = fromUNIX + 3 * 60 * 60 * 60 * 1000;
        let fixedTo = toUNIX + 3 * 60 * 60 * 60 * 1000;
        let broot = ((((fixedTo - fixedFrom) / 1000) / 60) / 60).toFixed(1);
        let timeArr = broot.match(regExpForCombined);
        if (timeArr !== null) {
            h = +timeArr[1] && +timeArr[1] > 8 ? +timeArr[1] - 1 : +timeArr[1] > 12 ? +timeArr[1] - 2 : +timeArr[1]; //for dinner and rest
            m = convertPercentsToMinutes(timeArr[1])
        }
        let prettyFromArr = from.match(regExpforInpurValues);
        let prettyToArr = to.match(regExpforInpurValues);
        let prettyFrom = prettyFromArr !== null ? prettyFromArr[0] : null;
        let prettyTo = prettyToArr !== null ? prettyToArr[0] : null;
        if (h && m) {
            let hoursForOne = h * 60 / patients; // minutes for one patient
            let minutesForOne = m > patients ? m / patients : 0;
            let totalForOne:number = Math.floor(hoursForOne + minutesForOne);
            return {
                totalForOne,
                prettyFrom,
                prettyTo
            }
        }
    };

    const dateBuilder = (date: string) => {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Th', 'Fr', 'Sat'];
        let day = days[new Date(date).getDay()];
        let dateGetter = new Date(date).getDate();
        let dateSch = dateGetter < 10 ? `0${dateGetter}` : dateGetter;
        let monthGetter = new Date(date).getMonth() + 1;
        let month = monthGetter < 10 ? `0${monthGetter}` : monthGetter;
        let year = new Date(date).getFullYear();
        return (
            <div className='date-wrapper'>
                <div className='date-item'>
                    {day}
                </div>
                <div className='date-item'>
                    {`${dateSch}.${month}.${year}`}
                </div>
            </div>
        )
    };



    return (
          <Grid container spacing={3}>
              {
                  props.docSchedule.map( (item, i) => {
                      let pretty = timeConverter(item.patientsCount, item.time.from, item.time.to);
                      return (
                          <Grid key={i} item xs={6}>
                              <Box borderRadius={5} className={classes.boxStyle}>
                                {
                                   dateBuilder(item.date)
                                }
                                <Popup countPatients={item.patientsCount} pretty={pretty}/>
                              </Box>
                          </Grid>
                      )
                  })
              }
          </Grid>
    )
};

export default DoctorScheduleList;