import axios from 'axios'
import {api} from "../../config";
import {PRODUCTS_GET} from "./types";

export const GetProducts = (page = 1) => (dispatch, getState) => {
    axios({
        method: 'GET',
        url: `${api}/products?page=${page}`
    })
        .then(response => dispatch({type: PRODUCTS_GET, data: response.data}))
        .catch(error => alert('PRODUCTS FETCHING ERROR!'))
}