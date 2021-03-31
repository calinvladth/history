import {combineReducers} from "redux";
import AccountReducer from "./account/reducers";
import PersonalInfoReducer from "./personal_info/reducers";
import {AddressReducer} from "./address_book/reducers";
import ProductsReducer from "./products/reducers";
import ProductReducer from "./product/reducers";
import AlertsReducer from "./alerts/reducers";
import CartReducer from "./cart/reducers";

const allReducers = combineReducers({
    alerts: AlertsReducer,
    account: AccountReducer,
    personal_info: PersonalInfoReducer,
    address_book: AddressReducer,
    products: ProductsReducer,
    product: ProductReducer,
    cart: CartReducer
})

export default allReducers