import {SET_ALERT} from "./types";

export const SetAlert = ({success, message}) => (dispatch, getState) => {
    dispatch({type: SET_ALERT, data: {success, message}})
}