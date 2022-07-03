import * as type from '../Types/userType'

//Import main api as setted in another file
import {mainApi as api} from '../../Lib/api'

//Action for login
export const login = (data) =>{
    //action always return calback function that have dispacth as parameter, the dispacth comes from redux
    return async (dispatch) =>{
        //This line is used when fecthing on progress
        dispatch({type:type.USER_REQUEST})
        //fetch the data from api
        api.post("/auth/login", data).then((response)=>{
                //set token in local storage as we have token from the response, this token will not appear even the page is refreshed
                localStorage.setItem("token", response.data.access_token)
                //dispatch the data that needed in frontend and set it to the store
                dispatch({type: type.GET_USER_SUCCESS, data, token: response.data.access_token, success:"Login Success"})
            }).catch(err =>{
                //handle Error
                if (err && err.response && err.response.data) {
                    if (err.response.data.statusCode === 401) {
                        dispatch({type: type.GET_USER_FAILED, error: "Wrong email or password"})
                    } else {
                        dispatch({type: type.GET_USER_FAILED, error: err.response.data.message})
                    }
                }
            })
    }
}

//Action for clean user state
export const cleanState = () =>{
    return (dispatch) =>{
        dispatch({type:type.CLEAN_USER_STATE})
    }
}