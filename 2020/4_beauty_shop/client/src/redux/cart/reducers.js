import {CART} from "./types";

const initialState = {
    success: false,
    message: '',
    data: []
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART:
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

export default CartReducer