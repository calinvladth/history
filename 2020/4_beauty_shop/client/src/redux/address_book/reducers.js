import {ADDRESS} from "./types";

const initialState = {
    success: false,
    message: '',
    data: []
}

export const AddressReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDRESS:
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