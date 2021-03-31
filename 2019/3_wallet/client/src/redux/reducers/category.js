import {
    GET_CATEGORY_FAIL,
    GET_CATEGORY_LOADING,
    GET_CATEGORY_SUCCESS,
    POST_CATEGORY_FAIL,
    POST_CATEGORY_LOADING,
    POST_CATEGORY_SUCCESS, PUT_CATEGORY_FAIL,
    PUT_CATEGORY_LOADING,
    PUT_CATEGORY_SUCCESS
} from "../actions/types";

const initialState = {
    data: [],
    full_data: [],
    pages: 0,
    page: 0,
    isLoading: false
}

const categoryReducer = (state=initialState, action) => {
    switch (action.type) {

        case GET_CATEGORY_LOADING:
        case POST_CATEGORY_LOADING:
        case PUT_CATEGORY_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                full_data: action.payload.full_data,
                pages: action.payload.pages,
                page: action.payload.page,
                isLoading: false
            }

        case GET_CATEGORY_FAIL:
        case POST_CATEGORY_SUCCESS:
        case POST_CATEGORY_FAIL:
        case PUT_CATEGORY_SUCCESS:
        case PUT_CATEGORY_FAIL:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }
}

export default categoryReducer
