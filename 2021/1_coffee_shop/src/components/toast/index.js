import React, {useEffect} from "react";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useSelector} from "react-redux";

const ToastComponent = () => {
    const alerts = useSelector(state => state.alerts)

    const notify = () => {
        if (alerts.success) toast.success(<p className="font__paragraph">{alerts.message}</p>)
        else toast.error(<p className="font__paragraph">{alerts.message}</p>)
    }

    useEffect(() => {
        if (alerts.message) {
            notify()
        }
    }, [alerts.message])


    return (
        <div>
            <ToastContainer/>
        </div>
    )
}

export default ToastComponent