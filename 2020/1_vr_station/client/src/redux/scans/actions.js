import axios from "axios";
import api from "../../env";
import {
    GET_SCANBYPK_FAIL,
    GET_SCANBYPK_LOADING,
    GET_SCANBYPK_SUCCESS,
    GET_SCANS_FAIL,
    GET_SCANS_LOADING,
    GET_SCANS_SUCCESS
} from "./types";
import {NOTIFY_SHOW} from "../notify/types";
import {notify_hide} from "../notify/actions";

export const get_scans = () => (dispatch, getState) => {
    const token = localStorage.getItem('key')
    const header = {'Authorization': token}

    dispatch({type: GET_SCANS_LOADING})

    axios.get(`${api}/scans/`, {headers: header})
        .then(response => {
            dispatch({type: GET_SCANS_SUCCESS, payload: response.data})
            // dispatch({type: NOTIFY_SHOW, payload: response.data})
        })
        .catch((error) => {
            dispatch({type: GET_SCANS_FAIL, payload: error.response.data})
            dispatch({type: NOTIFY_SHOW, payload: error.response.data})
            dispatch(notify_hide())
        })

}

export const get_scan_by_pk = (pk) => (dispatch, getState) => {
    const token = localStorage.getItem('key')
    const header = {'Authorization': token}

    dispatch({type: GET_SCANBYPK_LOADING})

    axios.get(`${api}/scans/${pk}`, {headers: header})
        .then(response => {
            dispatch({type: GET_SCANBYPK_SUCCESS, payload: response.data})
            // dispatch({type: NOTIFY_SHOW, payload: response.data})
        })
        .catch((error) => {
            alert(error.response.data.message.toString())
            dispatch({type: GET_SCANBYPK_FAIL, payload: error.response.data})
            dispatch({type: NOTIFY_SHOW, payload: error.response.data})
            dispatch(notify_hide())
        })

}