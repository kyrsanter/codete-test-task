import React, {FC} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SignInForm from "../sign-in-form/sign-in-form";
import SignUpForm from "../sign-up-form/sign-up-form";
import './login.css'
import {SigninInputsType, SignupInputsType} from "../../types";

type TabPanelProps = {
    children?: React.ReactNode
    index: any
    value: any
}

type PropsType = {
    registerNewUser: (registrationData: SignupInputsType) => void
    signInUser: (loginData: SigninInputsType) => void
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography variant='h6'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        height: 'calc(100vh - 74px)',
        backgroundColor: theme.palette.background.paper,
    },
    buttonFlexContainer: {
        maxWidth: '50%',
        justifyContent: 'center'
    }
}));

const Login: FC<PropsType> = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div data-id="1" className={classes.root}>
            <AppBar data-id="2" position="static">
                <Tabs data-id="3" value={value} onChange={handleChange}>
                    <Tab data-id="4" label="Sign in" {...a11yProps(0)} />
                    <Tab label="Sign up" {...a11yProps(1)} />
                </Tabs>

            </AppBar>
            <TabPanel value={value} index={0}>
                <SignInForm signInUser={props.signInUser}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUpForm registerNewUser={props.registerNewUser}/>
            </TabPanel>
        </div>
    );
};

export default Login;