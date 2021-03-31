import {
    DELETE_WALLETACTIVITY_FAIL,
    DELETE_WALLETACTIVITY_LOADING, DELETE_WALLETACTIVITY_SUCCESS,
    GET_WALLETACTIVITY_FAIL,
    GET_WALLETACTIVITY_LOADING,
    GET_WALLETACTIVITY_SUCCESS,
    POST_WALLETACTIVITY_FAIL,
    POST_WALLETACTIVITY_LOADING,
    POST_WALLETACTIVITY_SUCCESS, PUT_WALLETACTIVITY_FAIL,
    PUT_WALLETACTIVITY_LOADING, PUT_WALLETACTIVITY_SUCCESS
} from "../actions/types";

const initialState = {
    isLoading: false,
    page: 0,
    pages: 0,
    data: []
}

const walletActivityReducer = (state=initialState, action) => {
    switch (action.type) {

        case GET_WALLETACTIVITY_LOADING:
        case POST_WALLETACTIVITY_LOADING:
        case PUT_WALLETACTIVITY_LOADING:
        case DELETE_WALLETACTIVITY_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case GET_WALLETACTIVITY_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                page: action.payload.page,
                pages: action.payload.pages,
                isLoading: false
            }

        case GET_WALLETACTIVITY_FAIL:
        case POST_WALLETACTIVITY_SUCCESS:
        case POST_WALLETACTIVITY_FAIL:
        case PUT_WALLETACTIVITY_SUCCESS:
        case PUT_WALLETACTIVITY_FAIL:
        case DELETE_WALLETACTIVITY_SUCCESS:
        case DELETE_WALLETACTIVITY_FAIL:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }
}

export default walletActivityReducer
