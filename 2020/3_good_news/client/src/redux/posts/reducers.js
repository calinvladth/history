import {CLEAR_POSTS, GET_POSTS, GET_POSTS_E, GET_POSTS_R, GET_POSTS_S, SET_FILTERS} from "./types";

const initialState = {
    loading: false,
    data: [],
    success: false,
    pagination: {
        current_page: 1
    },
    filters: {
      title: '',
      order_by: 1
    },
    message: '',
    top: false
}

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                loading: true
            }

        case GET_POSTS_S:
            return {
                ...state,
                loading: false,
                success: action.data.success,
                message: action.data.message,
                pagination: action.data.pagination,
                data: [...action.data.current_state, ...action.data.data],
                top: false
            }

        case GET_POSTS_R:
            return {
                ...state,
                loading: false,
                success: action.data.success,
                message: action.data.message,
                pagination: action.data.pagination,
                data: action.data.data,
                top: false
            }

        case GET_POSTS_E:
            return {
                ...state,
                loading: false,
                success: action.data.success,
                message: action.data.message
            }

        case CLEAR_POSTS:
            return {
                ...state,
                data: []
            }

        case SET_FILTERS:
            return {
                ...state,
                filters: action.data,
                top: true
            }

        default:
            return {
                ...state
            }
    }
}

export default PostsReducer