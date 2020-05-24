import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value: number) {
    return `${value}`;
}

type PropsType = {
    name: string,
    onBlur: (e: React.ChangeEvent<{}>, value: number | number[]) => void
}


const InputRange: FC<PropsType> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
                How many patients can make an appointment?
            </Typography>
            <Slider
                defaultValue={5}
                onChangeCommitted={(e: React.ChangeEvent<{}>, value: number | number[]) => props.onBlur(e, value)}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={5}
                marks
                name={props.name}
                min={5}
                max={15}
            />
        </div>
    );
};

export default InputRange;