import * as type from '../Types/productType'

// Init the state to use it in the reducer
const initialProductState = {
    listProduct:[],
    loading:false,
    error:null,
}

/*
    - Reducer use to manipulate the state
    - state should have initial value as initial state
    - action is any action that sent from dispatch
*/
const productReducer = (state = initialProductState, action) =>{

    switch(action.type) {
        case type.PRODUCT_REQUEST:
            return Object.assign({}, state,{
                loading: true,
                error: null,
            });
        case type.GET_PRODUCT_SUCCESS:
            return Object.assign({}, state,{
                loading: false,
                error: null,
                listProduct: action.products
            });
        case type.GET_PRODUCT_FAILED:
            return Object.assign({}, state,{
                loading: false,
                error: action.error,
            });
        case type.CLEAN_PRODUCT_STATE:
            return Object.assign({}, state,{
                loading: false,
                error: null,
            });
        default:
            return state;
    }
}

export default productReducer