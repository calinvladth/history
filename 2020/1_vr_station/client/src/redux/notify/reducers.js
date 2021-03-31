import {NOTIFY_HIDE, NOTIFY_SHOW} from "./types";

const initialState = {
    show: false,
    success: undefined,
    message: ''
}

const notifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTIFY_SHOW:
            return {
                ...state,
                show: true,
                success: action.payload.success,
                message: action.payload.message
            }

        case NOTIFY_HIDE:
            return {
                ...state,
                show: false,
                success: undefined,
                message: ''
            }

        default:
            return state
    }
}

export default notifyReducer
