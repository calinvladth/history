import {PRODUCT_GET} from "./types";

const initialState = {
    success: false,
    message: '',
    data: {}
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_GET:
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


export default ProductReducer