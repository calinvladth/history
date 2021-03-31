import {ALERT_HIDE} from "./types";

export const alertHide = () => dispatch => {

    setTimeout(function() {
        dispatch({type: ALERT_HIDE})
    }, 7000)

}

