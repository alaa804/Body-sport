import axios from "axios"
import {LOGIN_USER_SUCCESS , REGISTER_USER_SUCCESS , AUTH_FAIL , SET_LOADING , LOGOUT, GET_AUTH_USER} from "../const"

//GET AUTH USER
export const getAuthUser = () => async (dispatch) => {
    dispatch({
        type : SET_LOADING
    })
    const config = {
        headers : {
            Authorization : localStorage.getItem("token")
        },
    }
    try {
    const res = await axios.get("/api/auth/me" , config)
    
    
    dispatch({
        type : GET_AUTH_USER ,
        payload : res.data,
    })
    
    
        
    } catch (error) {
        dispatch({
            type : AUTH_FAIL
        })
    }


}





//LOGIN USER

export const login = (formData) => async (dispatch) => {
    //formData = {email , password}
    dispatch({
        type : SET_LOADING ,
    })
    
    try{
        const res = await axios.post("/api/auth/login" , formData)
        localStorage.setItem("token" , res.data.token)
        dispatch({
            type : LOGIN_USER_SUCCESS,
            payload : res.data,
        })
    } catch(error){
        const response = error.response.data
        if(Array.isArray(response)){
            response.forEach((err) => {
                alert(err.msg)
            })
        }
        
        dispatch({
            type : AUTH_FAIL,
        })
    }
}


export const logout = () =>  dispatch => {
    localStorage.removeItem("token")
    dispatch({
        type : LOGOUT
    })
}

//register user

export const register = (user) => async dispatch => {
    dispatch({
        type : SET_LOADING ,
    })

    try {
        const res = await axios.post("/api/auth/register" , user)
        dispatch({
            type : REGISTER_USER_SUCCESS,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type: AUTH_FAIL,
            payload: error.response.data.errors
        });
        
    }
}