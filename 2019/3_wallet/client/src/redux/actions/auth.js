import api from '../../env'
import axios from 'axios'
import store from '../../store'
import {
    ALERT_SHOW,
    CHECK_AUTH_FAIL,
    CHECK_AUTH_LOADING,
    CHECK_AUTH_SUCCESS,
    LOGIN_FAIL, LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS
} from './types'
import {alertHide} from "./alets";

export const checkUser = () => (dispatch, getState) => {
    const token = getState().auth.token
    const header = {'Authorization': `Token ${token}`}

    dispatch({type: CHECK_AUTH_LOADING})

    axios.get(`${api}/auth/check_user/`, {headers: header})
        .then(response => {
            setTimeout(function() {
                dispatch({type: CHECK_AUTH_SUCCESS, payload: response.data})
                dispatch({type: ALERT_SHOW, payload: response.data})
            }, 2500)
        })
        .catch(error => {
            dispatch({type: CHECK_AUTH_FAIL})
            if (!error.response) {
                dispatch({type: ALERT_SHOW, payload: {success: false, 'message': 'Connection refused'}})
            } else{
                dispatch({type: ALERT_SHOW, payload: error.response.data})
            }
        })
    store.dispatch(alertHide())

}

export const login = (data) => dispatch => {
    dispatch({type: LOGIN_LOADING})
    axios.post(`${api}/auth/login/`, data).then(response => {
        dispatch({type: LOGIN_SUCCESS, payload: response.data})
        dispatch({type: ALERT_SHOW, payload: response.data})
        store.dispatch(checkUser())


            // setTimeout(function() {
            //          dispatch({
            //         type: LOGIN_SUCCESS,
            //         payload: response.data
            //     })
            //     store.dispatch(checkUser())
            // }, 2000)

        })
        .catch((error) => {
            dispatch({type: LOGIN_FAIL})
            dispatch({type: ALERT_SHOW, payload: error.response.data})
            store.dispatch(alertHide())
        })
}

export const register = (data) => dispatch => {
    axios.post(`${api}/auth/register/`, data)
        .then(response => {
            dispatch({type: REGISTER_SUCCESS, payload: response})
            dispatch({type: ALERT_SHOW, payload: response.data})
        })
        .catch(error => {
            dispatch({type: REGISTER_FAIL})
            dispatch({type: ALERT_SHOW, payload: error.response.data})
        })
        store.dispatch(alertHide())
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    })
    dispatch({type: ALERT_SHOW, payload: {'success': true, 'message': 'You just logged out'}})
    store.dispatch(alertHide())
}
