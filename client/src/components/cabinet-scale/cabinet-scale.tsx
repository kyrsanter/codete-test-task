import React, {FC} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type PropsType = {
    onShow: () => void
    count: number
    pretty: {
        totalForOne: number | null
        prettyFrom: string | null
        prettyTo: string | null
    } | undefined
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

const CabinetScale: FC<PropsType> = (props) => {
    const classes = useStyles();

    const buttonsBuilder = () => {
        let buttons = [];
        for (let i = 0; i < props.count; i++) {
            if (i === 0 && props.pretty) {
                buttons.push(<Button key={i} onClick={props.onShow}>{props.pretty.prettyFrom}</Button>)
            }
            else if (i === props.count - 1 && props.pretty) {
                buttons.push(<Button key={i} onClick={props.onShow}>{props.pretty.prettyTo}</Button>)
            }
            else {
                // @ts-ignore
                buttons.push(<Button key={i} onClick={props.onShow}>{props.pretty.totalForOne}</Button>)
            }

        }
        return buttons
    };

    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                {
                    buttonsBuilder()
                }
            </ButtonGroup>
        </div>
    );
};

export default CabinetScale;