import axios from 'axios'
import {CheckToken} from "../../helpers/check_token";
import {api} from "../../config";
import {CART} from "./types";
import {ShowAlertsManager} from "../alerts/actions";

export const GetCartItems = () => (dispatch, getState) => {
    const token = CheckToken(localStorage.getItem('token'))
    const headers = {
        'Authorization': `Token ${token}`
    }
    axios({
        method: 'GET',
        url: `${api}/profile/cart/`,
        headers: token && headers
    })
        .then(response => dispatch({type: CART, data: response.data}))
        .catch(error => dispatch(ShowAlertsManager(error.response.data)))
}

export const PostCartItem = (product_id) => (dispatch, getState) => {
    const token = CheckToken(localStorage.getItem('token'))
    const headers = {
        'Authorization': `Token ${token}`
    }
    axios({
        method: 'POST',
        url: `${api}/profile/cart/`,
        data: {product: product_id},
        headers: token && headers
    })
        .then(response => {
            dispatch(GetCartItems())
            dispatch(ShowAlertsManager(response.data))
        })
        .catch(error => dispatch(ShowAlertsManager(error.response.data)))
}

export const RemoveCartItem = (product_id) => (dispatch, getState) => {
    const token = CheckToken(localStorage.getItem('token'))
    const headers = {
        'Authorization': `Token ${token}`
    }
    axios({
        method: 'DELETE',
        url: `${api}/profile/cart/${product_id}/`,
        headers: token && headers
    })
        .then(response => dispatch(GetCartItems()))
        .catch(error => dispatch(ShowAlertsManager(error.response.data)))
}