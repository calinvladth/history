import {
    ALERT_SHOW,
    CURRENCIES_FAIL,
    CURRENCIES_LOADING,
    CURRENCIES_SUCCESS
} from "./types";
import axios from "axios"
import store from "../../store";
import api from "../../env";
import {alertHide} from "./alets";

export const currencies = () => (dispatch, getState) => {
    const token = getState().auth.token
    let headers
    if (token) {
        headers = {headers: {'Authorization': `Token ${token}`}}
    }

    dispatch({type: CURRENCIES_LOADING})
    axios.get(`${api}/auth/currencies/`, headers)
        .then(response => dispatch({type: CURRENCIES_SUCCESS, payload: response.data}))
        .catch(error => {
            dispatch({type: CURRENCIES_FAIL})
            if (!error.response) {
                dispatch({type: ALERT_SHOW, payload: {success: false, message: 'Connection refused'}})
            } else {
                dispatch({type: ALERT_SHOW, payload: error.response.data})
            }
            store.dispatch(alertHide())
        })

}
