import React, {useEffect, useState} from 'react';
import Routes from "./pages/routes";
import './assets/style/index.sass'
import {useDispatch} from "react-redux";
import {GetProducts} from "./redux/products/actions";
import {RenderCartData} from "./redux/cart/actions";
import axios from "axios";
import {api} from "./config";
import ServerErrorPage from "./pages/server_error";
import ToastComponent from "./components/toast";
import {GetConfig} from "./redux/config/actions";

function App() {
    const [server, setServer] = useState(null)
    useEffect(() => {
        axios.get(`${api}/check_server/`).then(handleSuccess, handleError)
    },[server])


    function handleSuccess() {
        setServer(true)
    }

    function handleError() {
        setServer(false)
    }

    if (typeof server === 'boolean') {
        if (server) return <AppStore/>
        else return <ServerErrorPage/>
    } else return <p>Loading ...</p>
}

const AppStore = () => {
    const dispatch = useDispatch()
    dispatch(GetConfig())
    dispatch(GetProducts())
    dispatch(RenderCartData())

    const style = {
        overflowX: 'hidden'
    }

    return (
        <div style={style}>

            <Routes/>
            <ToastComponent/>
        </div>
    );
}

export default App;
