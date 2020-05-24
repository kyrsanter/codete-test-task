import React, {FC} from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import OwnLink from "../OwnLink/OwnLink";
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: 10
        },
        link: {
            color: "#fff"
        },
        button: {
            border: '1px solid #fff',
            marginRight: 10
        }
    }),
);

const Header: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button variant="outlined"  className={classes.button} endIcon={<PersonIcon className={classes.link} />}>
                        <OwnLink href='/login'>login</OwnLink>
                    </Button>
                    <Button variant="outlined"  className={classes.button} endIcon={<PersonIcon className={classes.link} />}>
                        <OwnLink href='/users'>People</OwnLink>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Header