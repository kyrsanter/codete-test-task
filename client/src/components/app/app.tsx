import React, {FC} from 'react';
import Header from "../header/header";
import LoginPageContainer from "../../containers/Login-page-container";
import {Route} from 'react-router-dom';
import UsersPagelistContainer from "../../containers/users-page-list-container";
import ProfilePageContainer from "../../containers/profile-page-container";
import CabinetScale from "../cabinet-scale/cabinet-scale";
import Popup from "../popup/popup";

const App: FC = () => {

    return (
        <>
            <Header />
            <Route path='/' exact render={() => <h1>Home</h1>} />
            <Route path='/login' render={() => <LoginPageContainer/>} />
            <Route path='/users/' exact render={() => <UsersPagelistContainer />} />
            <Route path='/users/:id' render={({match}) => {
                let id = match.params.id;
                return <ProfilePageContainer id={id}/>
            }} />
            {/*<Popup/>*/}
        </>
    )
};

export default App