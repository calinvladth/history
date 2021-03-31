import {CHECK_KEY_FAIL, CHECK_KEY_LOADING, CHECK_KEY_SUCCESS, LOGOUT_SUCCESS} from "./types";

const initialState = {
    loading: false,
    success: false,
    message: '',
    key: localStorage.getItem('key'),
    match: localStorage.getItem('match')
}

const checkKeyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_KEY_LOADING:
            return {
                ...state,
                loading: true
            }

        case CHECK_KEY_SUCCESS:
            localStorage.setItem('key', action.payload.key)
            localStorage.setItem('match', action.payload.match)
            return {
                ...state,
                ...action.payload,
                loading: false
            }

        case CHECK_KEY_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('key')
            localStorage.removeItem('match')
            return {
                ...state,
                ...action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default checkKeyReducer
