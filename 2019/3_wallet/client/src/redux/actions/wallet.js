import axios from 'axios'
import {ALERT_SHOW, GET_WALLET_FAIL, GET_WALLET_LOADING, GET_WALLET_SUCCESS} from "./types";
import store from "../../store";
import api from "../../env";
import {alertHide} from "./alets";

export const get_wallet = () => (dispatch, getState) => {
    const token = getState().auth.token
    const header = {'Authorization': `Token ${token}`}

    dispatch({type: GET_WALLET_LOADING})

    axios.get(`${api}/wallet/`, {headers: header})
        .then(response => dispatch({type: GET_WALLET_SUCCESS, payload: response.data}))
        .catch(error => {
            dispatch({type: GET_WALLET_FAIL})
            dispatch({type: ALERT_SHOW, payload: error.response.data})
            store.dispatch(alertHide())
        })
}
