import React, {FC, useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateType} from "../redux/store";
import {getUserByIdThunk} from "../redux/thunk/user-thunk";
import ProfileUser from "../components/profile/profile";

const ProfilePageContainer: FC<PropsFromRedux> = (props) => {

    useEffect(() => {
        props.getUserById(props.id)
    } ,[]);

    return <ProfileUser id={props.id} isFetching={props.isFetching} currentUser={props.user}/>
};

const mapStateToProps = (state: RootStateType) => {
    return {
        isFetching: state.user.fetching,
        user: state.user.currentUser
    }
};

const mapDispatchToProps = {
    getUserById: (id: string) => getUserByIdThunk(id)
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector> & {
    id: string
};

export default connector(ProfilePageContainer)