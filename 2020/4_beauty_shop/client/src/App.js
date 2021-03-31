import React from 'react';
import RouterSystem from "./router";
import {useDispatch} from "react-redux";
import {CheckAccount} from "./redux/account/actions";
import {BrowserRouter as Router} from "react-router-dom";
import AlertManager from "./components/alert_manager";

const App = () => {
    const dispatch = useDispatch()
    dispatch(CheckAccount())
    return (
        <div>
            <AlertManager/>
            <Router>
                <RouterSystem/>
            </Router>
        </div>
    )
}
export default App;
