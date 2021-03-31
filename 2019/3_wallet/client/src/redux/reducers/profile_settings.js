import {
    CURRENCIES_FAIL,
    CURRENCIES_LOADING,
    CURRENCIES_SUCCESS
} from "../actions/types";

const initialState = {
    data: [],
    isLoading: false
}

const profileSettingsReducer = (state=initialState, action) => {
    switch (action.type) {

        case CURRENCIES_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case CURRENCIES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }

        case CURRENCIES_FAIL:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }
}

export default profileSettingsReducer
