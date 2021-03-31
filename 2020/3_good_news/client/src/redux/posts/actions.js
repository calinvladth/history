import axios from 'axios'
import {CLEAR_POSTS, GET_POSTS, GET_POSTS_E, GET_POSTS_R, GET_POSTS_S, SET_FILTERS} from "./types";
import {api} from "../../config";

export const GetPosts = (page, reset = false) => (dispatch, getState) => {
    const filters = getState().posts.filters
    dispatch({type: GET_POSTS})

    let url = `${api}/posts/reddit/`
    url = url + `?page=${page || 1}`
    if (filters.title) {
        url = url + `&title=${filters.title}`
    }
    if (typeof filters.order_by === 'number') {
        url = url + `&newest=${filters.order_by}`
    }


    axios({
        method: 'GET',
        url: url
    })
        .then(response => {
            const posts = getState().posts.data
            let data = response.data
            data.current_state = posts
            if (reset) {
                dispatch({type: GET_POSTS_R, data: response.data})
            } else {
                dispatch({type: GET_POSTS_S, data: response.data})
            }

        })
        .catch(error => {
            if (error.name === 'Error' || error.name === 'NetworkError') {
                const data = {
                    success: false,
                    message: 'Network Error'
                }
                console.log('NETWORK ERROR')
                dispatch({type: GET_POSTS_E, data: data})
            } else {
                dispatch({type: GET_POSTS_E, data: error})
                console.log('ERROR: ', error.name)
            }
        })
}

export const ClearPosts = () => (dispatch, getState) => {
    dispatch({type: CLEAR_POSTS})
}

export const SetPostsFilters = (filters) => (dispatch, getState) => {
    dispatch({type: SET_FILTERS, data: filters})
    dispatch(GetPosts(1, true))
}