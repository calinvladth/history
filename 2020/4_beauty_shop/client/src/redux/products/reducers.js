import {PRODUCTS_GET} from "./types";

const initialState = {
    success: false,
    message: '',
    data: [],
    pagination: {}
}

const ProductsReducer = (state, action) => {
    switch (action.type) {
        case PRODUCTS_GET:
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

export default ProductsReducer