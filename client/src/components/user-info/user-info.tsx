import React, {FC} from "react";
import Typography from "@material-ui/core/Typography";
import OwnLink from "../OwnLink/OwnLink";
import {Box, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

type PropsType = {
    _id: string
    name: string
    item?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            color: '#1938FF',
            textNecoration: "none"
        },
        info: {
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center'
        }

    }),
);

const UserInfo: FC<PropsType> = (props) => {
    const classes = useStyles();

    return (
        <Box display='flex' className={classes.info}>
            <Typography variant="h4" component="h1">
                <OwnLink className={classes.text} href={`users/${props._id}`}>{props.name}</OwnLink>
            </Typography>
            <Typography variant="h4" component="h1">
                Doctor
            </Typography>
        </Box>
    )
};

export default UserInfo