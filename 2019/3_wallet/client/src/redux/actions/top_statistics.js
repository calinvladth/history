import axios from 'axios'
import {ALERT_SHOW, TOP_FAIL, TOP_LOADING, TOP_SUCCESS} from "./types";
import store from "../../store";
import api from "../../env";
import {alertHide} from "./alets";


export const top_statistics = () =>(dispatch, getState) => {
    const token = getState().auth.token
    const header = {'Authorization': `Token ${token}`}

    dispatch({type: TOP_LOADING})

    axios.get(`${api}/wallet/activity/top/`, {headers: header})
        .then(response => dispatch({
                type: TOP_SUCCESS,
                payload: response.data
            }))
        .catch(error => {
            dispatch({type: TOP_FAIL})
            dispatch({type: ALERT_SHOW, payload: error.response.data})
            store.dispatch(alertHide())
        })


}
