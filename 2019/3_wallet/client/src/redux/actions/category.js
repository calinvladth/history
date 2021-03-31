import api from '../../env'
import axios from 'axios'
import {
    ALERT_SHOW,
    GET_CATEGORY_FAIL,
    GET_CATEGORY_LOADING,
    GET_CATEGORY_SUCCESS, POST_CATEGORY_FAIL,
    POST_CATEGORY_LOADING,
    POST_CATEGORY_SUCCESS, PUT_CATEGORY_FAIL, PUT_CATEGORY_LOADING, PUT_CATEGORY_SUCCESS
} from "./types";
import store from "../../store";
import {get_wallet_activity} from "./wallet_activity";
import {top_statistics} from "./top_statistics";
import {alertHide} from "./alets";

export const get_category = (active_page = null) => (dispatch, getState) => {
    const token = getState().auth.token
    const header = {'Authorization': `Token ${token}`}
    const query = {page: active_page || 1}

    dispatch({type: GET_CATEGORY_LOADING})

    axios.get(`${api}/category/`, {headers: header, params: query})
        .then(response => {
            dispatch({type: GET_CATEGORY_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: GET_CATEGORY_FAIL})
            dispatch({type: ALERT_SHOW, payload: error.response.data})
            store.dispatch(alertHide())
        })
}

export const post_category = (data) => (dispatch, getState) => {
    const token = getState().auth.token
    const header = {'Authorization': `Token ${token}`}

    dispatch({type: POST_CATEGORY_LOADING})
    axios.post(`${api}/category/`, data, {headers: header})
        .then(response => {
            dispatch({type: POST_CATEGORY_SUCCESS})
            dispatch({type: ALERT_SHOW, payload: response.data})
            store.dispatch(get_category())
        })
        .catch(error => {
            dispatch({type: POST_CATEGORY_FAIL})
            dispatch({type: ALERT_SHOW, payload: error.response.data})
        })
        store.dispatch(alertHide())
}

export const put_category = (data) => (dispatch, getState) => {
    const token = getState().auth.token
    const header = {'Authorization': `Token ${token}`}

    dispatch({type: PUT_CATEGORY_LOADING})
    axios.put(`${api}/category/${data.id}/`, data, {headers: header})
        .then(response => {
            dispatch({type: PUT_CATEGORY_SUCCESS})
            dispatch({type: ALERT_SHOW, payload: response.data})
            store.dispatch(get_category())
            store.dispatch(get_wallet_activity())
            store.dispatch(top_statistics())
        })
        .catch(error => {
            dispatch({type: PUT_CATEGORY_FAIL})
            dispatch({type: ALERT_SHOW, payload: error.response})
        })
        store.dispatch(alertHide())
}
