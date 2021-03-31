import axios from "axios";
import api from "../../env";
import {GET_SHOWCASE_FAIL, GET_SHOWCASE_LOADING, GET_SHOWCASE_SUCCESS,} from "./types";
import {NOTIFY_SHOW} from "../notify/types";
import {notify_hide} from "../notify/actions";

export const get_showcase = () => (dispatch, getState) => {
    const token = getState().check_key.key
    const header = {'Authorization': token}

    dispatch({type: GET_SHOWCASE_LOADING})

    axios.get(`${api}/showcase/`, {headers: header})
        .then(response => {
            dispatch({type: GET_SHOWCASE_SUCCESS, payload: response.data})
            // dispatch({type: NOTIFY_SHOW, payload: response.data})
        })
        .catch((error) => {
            dispatch({type: GET_SHOWCASE_FAIL, payload: error.response.data})
            dispatch({type: NOTIFY_SHOW, payload: error.response.data})
            dispatch(notify_hide())
        })

}