import axios from "axios";
import api from "../../env";
import store from "../../store";
import {CHECK_KEY_FAIL, CHECK_KEY_LOADING, CHECK_KEY_SUCCESS, LOGOUT_SUCCESS} from "./types";
import {NOTIFY_SHOW} from "../notify/types";
import {notify_hide} from "../notify/actions";

export const check_key = (data) => dispatch => {
    dispatch({type: CHECK_KEY_LOADING})
    let token = null
    if (data){
        token = data
    } else {
        token = localStorage.getItem('key')
    }

    const header = {'Authorization': `${token}`}

    axios.get(`${api}/check_key/`,{headers: header})
        .then(response => {
            dispatch({type: CHECK_KEY_SUCCESS, payload: response.data})
            // dispatch({type: NOTIFY_SHOW, payload: response.data})
        })
        .catch((error) => {
            dispatch({type: CHECK_KEY_FAIL, payload: error.response.data})
            dispatch({type: NOTIFY_SHOW, payload: error.response.data})
        })
    store.dispatch(notify_hide())

}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    })
    dispatch({type: NOTIFY_SHOW, payload: {'success': true, 'message': 'You just logged out'}})
    store.dispatch(notify_hide())
}
