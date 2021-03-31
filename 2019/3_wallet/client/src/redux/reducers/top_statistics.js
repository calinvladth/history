import {TOP_FAIL, TOP_LOADING, TOP_SUCCESS} from "../actions/types";

const initialState = {
    top_spending: [],
    top_revenue: [],
    total_spending: 0,
    total_revenue: 0,
    cash_flow: null,
    isLoading: false
}
const topStatisticsReducer = (state=initialState, action) => {
    switch (action.type) {
        case TOP_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case TOP_SUCCESS:
            return {
                ...state,
                top_spending: action.payload.top_spending,
                top_revenue: action.payload.top_revenue,
                total_spending: action.payload.total_spending,
                total_revenue: action.payload.total_revenue,
                cash_flow: action.payload.cash_flow,
                isLoading: false
            }

        case TOP_FAIL:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state

    }
}

export default topStatisticsReducer
