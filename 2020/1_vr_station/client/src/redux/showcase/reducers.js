import {GET_SHOWCASE_FAIL, GET_SHOWCASE_LOADING, GET_SHOWCASE_SUCCESS,} from "./types";

const initialState = {
    loading: false,
    success: false,
    message: '',
    data: {}
}

const showcaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SHOWCASE_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_SHOWCASE_SUCCESS:
        case GET_SHOWCASE_FAIL:
            return {
                ...state,
                ...action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default showcaseReducer
