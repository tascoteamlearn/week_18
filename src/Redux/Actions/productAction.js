import * as type from '../Types/productType'
import { mainApi as api } from '../../Lib/api'

export const getAllProduct = () =>{
    return async (dispatch) =>{
        dispatch({type: type.PRODUCT_REQUEST})
        api.get('/products').then((response)=>{
            dispatch({type: type.GET_PRODUCT_SUCCESS, products:response.data})
        }).catch(err=>{
            dispatch({type: type.GET_PRODUCT_FAILED, error:err.response})
        })
    }
} 