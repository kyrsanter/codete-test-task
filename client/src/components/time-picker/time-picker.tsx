import 'date-fns';
import React, {FC} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';

type PropsType = {
    label: string
    name: string,
    change: (name: string, value: Date | null) => void
}

const TimePicker:FC<PropsType> = (props) => {
    const [selectedDate, setSelectedDate] = React.useState<Date | number>(new Date());

    const handleDateChange = (date: Date | null) => {
        // @ts-ignore
        setSelectedDate(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
        props.change(props.name, date)
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label={props.label}
                    value={selectedDate}
                    ampm={false}
                    minutesStep={15}
                    name={props.name}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
};

export default TimePicker;