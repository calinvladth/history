import axios from 'axios'
import {api} from "../../config";
import {PRODUCT_GET} from "./types";


export const GetProductById = (id) => (dispatch, getState) => {
    axios({
        method: 'GET',
        url: `${api}/products/${id}/`
    })
        .then(response => dispatch({type: PRODUCT_GET, data: response.data}))
        .catch(error => alert('PRODUCT FETCHING ERROR!'))
}
