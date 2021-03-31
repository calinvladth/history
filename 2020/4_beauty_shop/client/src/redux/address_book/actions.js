import axios from 'axios'
import {CheckToken} from "../../helpers/check_token";
import {api} from "../../config";
import {ADDRESS} from "./types";

export const GetAllAddresses = () => (dispatch, getState) => {
    const token = CheckToken(localStorage.getItem('token'))
    const headers = {
        'Authorization': `Token ${token}`
    }
    axios({
        method: 'GET',
        url: `${api}/profile/address/`,
        headers: token && headers
    })
        .then(response => dispatch({type: ADDRESS, data: response.data}))
        .catch(error => alert('ADDRESS FETCHING ERROR!'))
}

// // Probably not necessary
// export const GetAddressByPk = (id) => (dispatch, getState) => {
//     const token = CheckToken(localStorage.getItem('token'))
//     const headers = {
//         'Authorization': `Token ${token}`
//     }
//     axios({
//         method: 'GET',
//         url: `${api}/profile/address/${id}/`,
//         headers: token && headers
//     })
//         .then(response => dispatch({type: ADDRESS, data: response.data}))
//         .catch(error => alert('ADDRESS FETCHING ERROR!'))
// }
//
export const PostAddress = (data) => (dispatch, getState) => {
    const token = CheckToken(localStorage.getItem('token'))
    const headers = {
        'Authorization': `Token ${token}`
    }
    axios({
        method: 'POST',
        url: `${api}/profile/address/`,
        data: data,
        headers: token && headers
    })
        .then(response => dispatch(GetAllAddresses()))
        .catch(error => alert('ADDRESS POST ERROR!'))
}

export const PutAddress = (data) => (dispatch, getState) => {
    const token = CheckToken(localStorage.getItem('token'))
    const headers = {
        'Authorization': `Token ${token}`
    }
    axios({
        method: 'PUT',
        url: `${api}/profile/address/${data.id}/`,
        data: data,
        headers: token && headers
    })
        .then(response => dispatch(GetAllAddresses()))
        .catch(error => alert('ADDRESS PUT ERROR!'))
}

export const DeleteAddress = (id) => (dispatch, getState) => {
    const token = CheckToken(localStorage.getItem('token'))
    const headers = {
        'Authorization': `Token ${token}`
    }
    axios({
        method: 'DELETE',
        url: `${api}/profile/address/${id}`,
        headers: token && headers
    })
        .then(response => dispatch(GetAllAddresses()))
        .catch(error => alert('ADDRESS DELETE ERROR!'))
}