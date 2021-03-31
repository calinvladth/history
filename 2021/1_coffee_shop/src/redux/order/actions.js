import axios from 'axios'
import {api} from "../../config";
import {RenderCartData} from "../cart/actions";
import {OrderSuccessPath} from "../../pages/order_success/path";

export const CreateOrder = (orderData, history) => (dispatch, getState) => {
    axios.post(`${api}/order/`, orderData)
        .then(response => {
            localStorage.removeItem('cart')
            dispatch(RenderCartData())
            history.push({
                pathname: OrderSuccessPath,
                state: response.data.data.id
            })
        })
        .catch(err => console.log('ERROR CREATE ORDER: ', err.response.data))
}