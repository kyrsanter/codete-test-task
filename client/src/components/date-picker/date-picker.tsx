import 'date-fns';
import React, {FC} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

type PropsType = {
    name: string,
    change: (name: string, value: Date | null) => void
}

const DatePicker: FC<PropsType> = (props) => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        props.change('date', date)
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    name={props.name}
                    format="dd.MM.yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Choose a date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>

        </MuiPickersUtilsProvider>
    );
};

export default DatePicker