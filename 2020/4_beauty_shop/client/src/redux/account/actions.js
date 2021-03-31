import axios from 'axios'
import {api} from "../../config";
import {CHECK_ACCOUNT, FORGOT} from "./types";
import {CheckToken} from "../../helpers/check_token";
import {ShowAlertsManager} from "../alerts/actions";
import AlertManager from "../../components/alert_manager";

export const CheckAccount = () => (dispatch, getState) => {
    // dispatch({type: CHECK_ACCOUNT_LOADING})
    const token = CheckToken(localStorage.getItem('token'))
    const headers = {
        'Authorization': `Token ${token}`
    }
    axios({
        method: 'GET',
        url: `${api}/account/check_account/`,
        headers: token && headers
    })
        .then(response => {
            dispatch({type: CHECK_ACCOUNT, data: response.data})
        })
        .catch(error => {
            dispatch({type: CHECK_ACCOUNT, data: error.response.data})
        })
}

export const Login = (data) => (dispatch, getState) => {
    axios({
        method: 'POST',
        url: `${api}/account/login/`,
        data: data
    })
        .then(response => {
            dispatch({type: CHECK_ACCOUNT, data: response.data})
            dispatch(ShowAlertsManager(response.data))
        })
        .catch(error => {
            dispatch({type: CHECK_ACCOUNT, data: error.response.data})
            dispatch(ShowAlertsManager(error.response.data))
        })
}

export const Register = (data) => (dispatch, getState) => {
    // dispatch({type: CHECK_ACCOUNT_LOADING})
    axios({
        method: 'POST',
        url: `${api}/account/register/`,
        data: data
    })
        .then(response => {
            console.log('RESPONSE: ', response.data)
            dispatch({type: CHECK_ACCOUNT, data: response.data})

        })
        .catch(error => {
            console.log('ERROR: ', error.response.data)
            dispatch({type: CHECK_ACCOUNT, data: error.response.data})
        })
}

export const Forgot = (data) => (dispatch, getState) => {
    axios({
        method: 'POST',
        url: `${api}/account/forgot/`,
        data: data
    })
        .then(response => {
            console.log('RESPONSE: ', response.data)

        })
        .catch(error => {
            console.log('ERROR: ', error.response)
        })
    dispatch({type: FORGOT})
}

export const SignOut = () => (dispatch, getState) => {
    // dispatch({type: CHECK_ACCOUNT_LOADING})
    localStorage.removeItem('token')
    localStorage.removeItem('is_authenticated')
    dispatch(CheckAccount())
}