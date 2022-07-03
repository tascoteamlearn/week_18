import { combineReducers } from "redux";

//All reducers in the app
import userReducer from "./Reducers/userReducer";
import productReducer from "./Reducers/productReducer";

//Combine all reducers in the app to have one root reducer
const rootReducers = combineReducers({
    user: userReducer,
    product: productReducer
    // product: productReducer,
})

//export its as default
export default rootReducers
