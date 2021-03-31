import axios from 'axios'
import store from '../../store'
import {
    ALERT_SHOW,
    DELETE_WALLETACTIVITY_FAIL,
    DELETE_WALLETACTIVITY_LOADING, DELETE_WALLETACTIVITY_SUCCESS,
    GET_WALLET_FAIL,
    GET_WALLETACTIVITY_LOADING,
    GET_WALLETACTIVITY_SUCCESS,
    POST_WALLETACTIVITY_FAIL,
    POST_WALLETACTIVITY_LOADING,
    POST_WALLETACTIVITY_SUCCESS,
    PUT_WALLETACTIVITY_FAIL,
    PUT_WALLETACTIVITY_LOADING,
    PUT_WALLETACTIVITY_SUCCESS
} from "./types";
import {get_wallet} from "./wallet";
import {top_statistics} from "./top_statistics";
import api from "../../env";
import {alertHide} from "./alets";


export const get_wallet_activity = (active_page = null) => (dispatch, getState) => {

    const token = getState().auth.token
    const header = {'Authorization': `Token ${token}`}
    dispatch({type: GET_WALLETACTIVITY_LOADING})
    const query = {
        page: active_page || 1
    }
    axios.get(`${api}/wallet/activity/`, {headers: header, params: query},)
        .then(response => {
            dispatch({type: GET_WALLETACTIVITY_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: GET_WALLET_FAIL})
            dispatch({type: ALERT_SHOW, payload: error.response.data})
        })
        store.dispatch(alertHide())

}

export const post_wallet_activity = (data) => (dispatch, getState) => {

    const token = getState().auth.token
    const header = {'Authorization': `Token ${token}`}
    dispatch({type: POST_WALLETACTIVITY_LOADING})
    axios.post(`${api}/wallet/activity/`, data, {headers: header})
        .then(response => {
            dispatch({type: POST_WALLETACTIVITY_SUCCESS, payload: response.data})
            dispatch({type: ALERT_SHOW, payload: response.data})
            store.dispatch(get_wallet())
            store.dispatch(get_wallet_activity())
            store.dispatch(top_statistics())
        })
        .catch(error => {
            dispatch({type: POST_WALLETACTIVITY_FAIL})
            dispatch({type: ALERT_SHOW, payload: error.response.data})
        })
        store.dispatch(alertHide())

}

export const put_wallet_activity = (data) => (dispatch, getState) => {

    const token = getState().auth.token
    const header = {'Authorization': `Token ${token}`}

    dispatch({type: PUT_WALLETACTIVITY_LOADING})
    axios.put(`${api}/wallet/activity/${data.id}/`, data, {headers: header})
        .then(response => {
            dispatch({type: PUT_WALLETACTIVITY_SUCCESS, payload: response.data})
            dispatch({type: ALERT_SHOW, payload: response.data})
            store.dispatch(get_wallet())
            store.dispatch(get_wallet_activity())
            store.dispatch(top_statistics())
        })
        .catch(error => {
            dispatch({type: PUT_WALLETACTIVITY_FAIL})
            dispatch({type: ALERT_SHOW, payload: error.response.data})
        })
        store.dispatch(alertHide())

}

export const delete_wallet_activity = (data) => (dispatch, getState) => {

    const token = getState().auth.token
    const header = {'Authorization': `Token ${token}`}

    dispatch({type: DELETE_WALLETACTIVITY_LOADING})
    axios.delete(`${api}/wallet/activity/${data.id}/`, {headers: header})
        .then(response => {
            dispatch({type: DELETE_WALLETACTIVITY_SUCCESS})
            dispatch({type: ALERT_SHOW, payload: response.data})
            store.dispatch(get_wallet())
            store.dispatch(get_wallet_activity())
            store.dispatch(top_statistics())
        })
        .catch(error => {
            dispatch({type: DELETE_WALLETACTIVITY_FAIL})
            dispatch({type: ALERT_SHOW, payload: error.response.data})
            store.dispatch(alertHide())
        })

}
