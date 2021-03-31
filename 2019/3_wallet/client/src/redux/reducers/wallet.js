import {GET_WALLET_FAIL, GET_WALLET_LOADING, GET_WALLET_SUCCESS} from "../actions/types";

const initialState = {
    account: 0,
    isLoading: false
}

const walletReducer = (state=initialState, action) => {
    switch (action.type) {

        case GET_WALLET_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case GET_WALLET_SUCCESS:
            return {
                ...state,
                account: action.payload[0].account,
                isLoading: false
            }

        case GET_WALLET_FAIL:
            return {
                ...state,
                account: 0,
                isLoading: false
            }

        default:
            return state
    }
}

export default walletReducer
