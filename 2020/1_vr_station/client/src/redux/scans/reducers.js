import {
    GET_SCANBYPK_FAIL,
    GET_SCANBYPK_LOADING, GET_SCANBYPK_SUCCESS,
    GET_SCANS_FAIL,
    GET_SCANS_LOADING,
    GET_SCANS_SUCCESS,
} from "./types";

const initialState = {
    loading: false,
    success: false,
    message: '',
    data: [],
    scan: {
        loading: false,
        success: false,
        message: '',
        data: []
    }
}


const scansReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SCANS_LOADING:
        case GET_SCANBYPK_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_SCANS_SUCCESS:
        case GET_SCANS_FAIL:
        case GET_SCANBYPK_FAIL:
            return {
                ...state,
                ...action.payload,
                loading: false,
                scan: {}
            }

        case GET_SCANBYPK_SUCCESS:
            return {
                ...state,
                scan: action.payload,
            }

        default:
            return state
    }
}

export default scansReducer
