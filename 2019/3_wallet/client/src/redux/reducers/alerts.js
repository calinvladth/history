import {ALERT_HIDE, ALERT_SHOW} from "../actions/types";

const initialState = {
    show: false,
    success: null,
    message: ''
}

const alertsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ALERT_SHOW:
            return {
                ...state,
                show: true,
                success: action.payload.success,
                message: action.payload.message
            }

        case ALERT_HIDE:
            return {
                ...state,
                show: false,
                success: null,
                message: ''
            }

        default:
            return state
    }
}

export default alertsReducer
