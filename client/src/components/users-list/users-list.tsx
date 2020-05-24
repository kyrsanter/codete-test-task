import React, {FC} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {UserType} from "../../types";
import Preloader from "../preloader/preloader";
import OwnLink from "../OwnLink/OwnLink";
import {Box} from "@material-ui/core";
import UserContacts from "../user-contacts/user-contacts";
import UserInfo from "../user-info/user-info";


type PropsType = {
    isFetching: boolean
    users?: Array<UserType>
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: '80ch',
            margin: '0 auto',
        },
        listItem: {
            marginBottom: 10,
            backgroundColor: theme.palette.background.paper,
        }
    }),
);

const UsersList: FC<PropsType> = (props) => {
    const classes = useStyles();
    if (props.isFetching) {
        return <Preloader/>
    }
    return (
        <List className={classes.root}>
            {
                props.users && props.users.map((person) => {
                    return (
                        <div key={person._id}>
                            <ListItem alignItems="flex-start" className={classes.listItem}>
                                <UserContacts email={person.email} phone={person.phone}/>
                                <UserInfo _id={person._id} name={person.name}/>
                            </ListItem>
                        </div>
                    )
                })
            }

        </List>
    )
};

export default UsersList;