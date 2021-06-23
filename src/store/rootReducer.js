// tüm statelerin topandığı yer 

import { combineReducers } from "redux";
import cartReducer from "./reducers/cardReducer";

const rootReducer = combineReducers({
        cart: cartReducer,
        // user: userReducer

})

export default rootReducer;