import {
    CHECK_AUTH_FAIL,
    CHECK_AUTH_LOADING,
    CHECK_AUTH_SUCCESS,
    LOGIN_FAIL, LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS
} from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    profile_settings: {},
    currency: {},
    error: ''
};

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                isAuthenticated: false,
                isLoading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registered: true,
                user: action.payload
            }

        case REGISTER_FAIL:
            return {
                ...state,
                registered: false,
                error: action.payload
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }

        case LOGIN_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('isAuthenticated');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false
            };

        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            localStorage.removeItem('isAuthenticated');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false
            };



        case CHECK_AUTH_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case CHECK_AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                profile_settings: action.payload.profile_settings,
                currency: action.payload.profile_settings.currency,
                isLoading: false
            }

        case CHECK_AUTH_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}

export default authReducer
