import React, {FC} from "react";
import {UserType} from "../../types";
import Preloader from "../preloader/preloader";
import {createStyles, Paper, Theme} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UserContacts from "../user-contacts/user-contacts";
import UserInfo from "../user-info/user-info";
import CabinetContainer from "../../containers/cabinet-container";

type PropsType = {
    currentUser: null | UserType
    isFetching: boolean
    id: string
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
    }),
);

const ProfileUser: FC<PropsType> = (props) => {

    const classes = useStyles();

    if (props.isFetching) {
        return <Preloader/>
    }

    return (

        <>
            <Grid container spacing={3}>
                <Grid item sm={4} xs={12}>
                    <Paper className={classes.paper}>
                            {
                                props.currentUser ? (

                                    <>
                                    <Typography variant="h3" component="h2">
                                        {
                                            props.currentUser.name
                                        }
                                    </Typography>
                                        <Grid container>
                                            <UserContacts
                                                item
                                                email={props.currentUser.email}
                                                phone={props.currentUser.phone}/>
                                            <Typography variant="h5" component="h2">
                                                Doctor
                                            </Typography>
                                        </Grid>

                                    </>

                                ) : null
                            }
                    </Paper>
                </Grid>
                <Grid item sm={8} xs={12}>
                    <Paper className={classes.paper}>
                        <CabinetContainer id={props.id}/>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
};

export default ProfileUser;