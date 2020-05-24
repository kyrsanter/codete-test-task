import React, {FC} from "react";
import {Box, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';

type PropsType = {
    email: string,
    phone: string
    item?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            color: '#1938FF',
            textNecoration: "none"
        },
        contacts:{
            paddingRight: 12,
            marginRight: 12
        }
    })
);

const UserContacts: FC<PropsType> = (props) => {
    const classes = useStyles();
    return (
        <Box component='div' className={classes.contacts} borderRight={1}>
            <div>
                <a className={classes.text} href={`mailto:${props.email}`}><MailOutlineIcon /></a>
            </div>
            <div>
                <a className={classes.text} href={`tel:${props.phone}`}><CallIcon /></a>
            </div>
        </Box>
    )
}

export default UserContacts