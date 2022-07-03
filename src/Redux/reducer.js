import { combineReducers } from "redux";

//All reducers in the app
import userReducer from "./Reducers/userReducer";

//Combine all reducers in the app to have one root reducer
const rootReducers = combineReducers({
    user: userReducer
})

//export its as default
export default rootReducers
