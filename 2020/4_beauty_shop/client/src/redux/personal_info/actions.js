import axios from 'axios'
import {CheckToken} from "../../helpers/check_token";
import {api} from "../../config";
import {PERSONAL_INFO, PERSONAL_INFO_PUT} from "./types";

export const GetPersonalInfo = () => (dispatch, getState) => {
    const token = CheckToken(localStorage.getItem('token'))
    const headers = {
        'Authorization': `Token ${token}`
    }
    axios({
        method: 'GET',
        url: `${api}/profile/personal_info/`,
        headers: token && headers
    })
        .then(response => dispatch({type: PERSONAL_INFO, data: response.data}))
        .catch(error => alert('PERSONAL INFO ERROR!'))
}

export const UpdatePersonalInfo = (data) => (dispatch, getState) => {
    const token = CheckToken(localStorage.getItem('token'))
    const headers = {
        'Authorization': `Token ${token}`
    }

    axios({
        method: 'PUT',
        url: `${api}/profile/personal_info/`,
        headers: token && headers,
        data: data
    })
        .then(response => {
            dispatch(GetPersonalInfo())
            alert('PERSONAL INFO UPDATE SUCCESS')
        })
        .catch(error => alert('PERSONAL INFO UPDATE ERROR'))
}