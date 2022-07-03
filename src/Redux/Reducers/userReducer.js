import * as type from '../Types/userType'

// Init the state to use it in the reducer
const initialUserState = {
    data: null,
    token: null,
    success: null,
    error:null,
    loading: false,
}

/*
    - Reducer use to manipulate the state
    - state should have initial value as initial state
    - action is any action that sent from dispatch
*/
const userReducer = (state = initialUserState, action) =>{

    switch(action.type) {
        //This case use when fetching through api, when fetching data, there is duration, so need loading as true
        // also need to set success and error as null because there is no response from api yet in this situation
        case type.USER_REQUEST:
            return Object.assign({}, state,{
                loading: true,
                success: null,
                error: null,
            });
        // When fetching success, manipulate the state based on received data from api that sent from action
        case type.GET_USER_SUCCESS:
            return Object.assign({}, state,{
                loading: false,
                data: action.data,
                success: action.success,
                token: action.token,
            });

        // When fetching error, manipulate the state based on received data from api that sent from action
        case type.GET_USER_FAILED:
            return Object.assign({}, state,{
                loading: false,
                success: null,
                error: action.error,
            });

        //This case use when the state need to be reset, this is optional, but sometimes very useful
        case type.CLEAN_USER_STATE:
            return Object.assign({}, state,{
                loading: false,
                success: null,
                error: null,
            });

        //Should set the default in every switch 
        default:
            return state;
    }
}

export default userReducer