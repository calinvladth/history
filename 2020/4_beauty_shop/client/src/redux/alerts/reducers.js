import {CLOSE_ALERT, SHOW_ALERT} from "./types";

const initialState = {
    show: false,
    success: false,
    message: ''
}

const AlertsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                show: true,
                success: action.data.success,
                message: action.data.message
            }

        case CLOSE_ALERT:
            return {
                ...initialState
            }

        default:
            return {
                ...state
            }
    }
}

export default AlertsReducer