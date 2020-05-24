import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app/app";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux'
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import store from "./redux/store";

ReactDOM.render(
    <Router>
        <CssBaseline>
            <Provider store={store}>
                <Container maxWidth="lg">
                    <App />
                </Container>
            </Provider>
        </CssBaseline>
    </Router>, document.getElementById('root')
);
