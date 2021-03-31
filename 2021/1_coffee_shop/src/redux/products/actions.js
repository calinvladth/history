import axios from 'axios'
import {PRODUCTS_GET_FAIL, PRODUCTS_GET_SUCCESS} from "./types";
import {api} from "../../config";


export const GetProducts = (page = 1) => (dispatch, getState) => {
    axios({
        method: 'GET',
        url: `${api}/products/?is_active=true`
    })
        .then(response => {
            const {config: {data: {pagination}}} = getState()
            dispatch({type: PRODUCTS_GET_SUCCESS, data: response.data, page: page, limit: pagination.items_store})
        })
        .catch(error => dispatch({type: PRODUCTS_GET_FAIL, data: error.response.data}))
}

