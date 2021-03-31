import {PERSONAL_INFO} from "./types";

const initialState = {
    success: false,
    message: '',
    data: {
        username: '',
        phone: ''
    }
}

const PersonalInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERSONAL_INFO:
            return {
                ...state,
                ...action.data
            }

        default:
            return {
                ...state
            }
    }
}

export default PersonalInfoReducer