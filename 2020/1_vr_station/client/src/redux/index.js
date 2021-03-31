import {combineReducers} from "redux";
import checkKeyReducer from "./check_key/reducers";
import notifyReducer from "./notify/reducers";
import scansReducer from "./scans/reducers";
import showcaseReducer from "./showcase/reducers";


const allReducers = combineReducers({
    notify: notifyReducer,
    check_key: checkKeyReducer,
    scans: scansReducer,
    showcase: showcaseReducer
})

export default allReducers
