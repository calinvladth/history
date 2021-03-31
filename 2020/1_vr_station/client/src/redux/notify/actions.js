import {NOTIFY_HIDE} from "./types";

export const notify_hide = () => dispatch => {

    setTimeout(function() {
        dispatch({type: NOTIFY_HIDE})
    }, 5000)

}
