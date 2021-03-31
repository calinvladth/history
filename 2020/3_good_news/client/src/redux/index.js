import {combineReducers} from "redux";
import PostsReducer from "./posts/reducers";

const allReducers = combineReducers({
    posts: PostsReducer
})

export default allReducers