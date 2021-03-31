import {CLOSE_ALERT, SHOW_ALERT} from "./types";

export const ShowAlertsManager = (data) => (dispatch, getState) => {
    dispatch({type: SHOW_ALERT, data: data})
    setTimeout(() => {
        dispatch({type: CLOSE_ALERT})
    }, 5000)

}

