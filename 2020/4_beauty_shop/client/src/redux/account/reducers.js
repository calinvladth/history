import {CHECK_ACCOUNT, CHECK_ACCOUNT_LOADING} from "./types";

const initialState = {
    success: false,
    message: '',
    loaded: false,
    data: {
        token: '',
        is_authenticated: false
    }
}

const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        // case CHECK_ACCOUNT_LOADING:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        case CHECK_ACCOUNT:
            const is_authenticated = localStorage.getItem('is_authenticated')
            if (is_authenticated !== action.data.data.is_authenticated) {
                localStorage.setItem('is_authenticated', action.data.data.is_authenticated)
                localStorage.setItem('token', action.data.data.token)
            }

            return {
                ...state,
                ...action.data,
                loaded: true
            }

        default:
            return state
    }
}

export default AccountReducer