import {combineReducers} from "redux";
import authReducer from './auth'
import walletReducer from './wallet'
import walletActivityReducer from "./wallet_activity";
import categoryReducer from './category'
import topStatisticsReducer from "./top_statistics";
import profileSettingsReducer from "./profile_settings";
import alertsReducer from "./alerts";


const allReducers = combineReducers({
    profile_settings: profileSettingsReducer,
    auth: authReducer,
    wallet: walletReducer,
    wallet_activity: walletActivityReducer,
    categories: categoryReducer,
    top: topStatisticsReducer,
    alerts: alertsReducer
})

export default allReducers
