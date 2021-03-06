import React, {FC} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import {SignupInputsType} from "../../types";

type PropsType = {
    registerNewUser: (registrationData: SignupInputsType) => void
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formWrapper: {
            padding: 15,
            maxWidth: 310,
            margin: theme.spacing(15, "auto"),
        },
        inputWrapper: {
            marginBottom: 10
        },
        formControl: {
            width: '100%'
        },
    }),
);

const SignUpForm: FC<PropsType> = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState<SignupInputsType>({
        email: '',
        password: '',
        repassword: '',
        phone: '',
        isDoctor: false,
        name: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'isDoctor') {
            setState({...state, [event.target.name]: event.target.checked});
        } else {
            setState({...state, [event.target.name]: event.target.value});
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.registerNewUser(state)
    };

    return (
        <Paper elevation={1} className={classes.formWrapper}>
            <form onSubmit={handleSubmit}>
                <div className={classes.inputWrapper}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input
                            id="name"
                            type='text'
                            name='name'
                            onChange={handleChange}
                            value={state.name}/>
                    </FormControl>
                </div>
                <div className={classes.inputWrapper}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input
                            id="email"
                            type='text'
                            name='email'
                            onChange={handleChange}
                            value={state.email}/>
                    </FormControl>
                </div>
                <div className={classes.inputWrapper}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="phone">Phone</InputLabel>
                        <Input
                            id="phone"
                            type='text'
                            name='phone'
                            onChange={handleChange}
                            value={state.phone}/>
                    </FormControl>
                </div>
                <div className={classes.inputWrapper}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="pass">Password</InputLabel>
                        <Input
                            id="pass"
                            type='password'
                            name='password'
                            onChange={handleChange}
                            value={state.password}/>
                    </FormControl>
                </div>
                <div className={classes.inputWrapper}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="repass">Confirm password</InputLabel>
                        <Input
                            id="repass"
                            type='password'
                            name='repassword'
                            onChange={handleChange}
                            value={state.repassword}/>
                    </FormControl>
                </div>
                <div className={classes.inputWrapper}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.isDoctor}
                                onChange={handleChange}
                                name="isDoctor"
                                color="primary"
                            />
                        }
                        label="I am a doctor"
                    />
                </div>
                <div className={classes.inputWrapper}>
                    <FormControl className={classes.formControl}>
                        <Button fullWidth type="submit" variant="outlined" color="primary">
                            Sign up
                        </Button>
                    </FormControl>
                </div>
            </form>
        </Paper>

    );
};

export default SignUpForm;