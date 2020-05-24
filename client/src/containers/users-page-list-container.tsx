import React, {FC, useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootStateType} from "../redux/store";
import {getUsersThunk} from "../redux/thunk/user-thunk";
import UsersList from "../components/users-list/users-list";

const UsersPagelistContainer: FC<PropsFromRedux> = (props) => {

    useEffect(() => {
        props.getUsers()
    } ,[]);

    return <UsersList
        isFetching={props.isFetching}
        users={props.users}
    />
};

const mapStateToProps = (state: RootStateType) => {
    return {
        isFetching: state.user.fetching,
        users: state.user.users
    }
};

const mapDispatchToProps = {
    getUsers: () => getUsersThunk()
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UsersPagelistContainer)