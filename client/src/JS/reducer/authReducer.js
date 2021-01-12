import {LOGIN_USER_SUCCESS , REGISTER_USER_SUCCESS , AUTH_FAIL , SET_LOADING , LOGOUT , GET_AUTH_USER} from "../const"


const initialState = {
    token : null ,
    user : null ,
    isLoading : false ,
    isAuth : false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING :
            return {...state , isLoading : true}
        
        case REGISTER_USER_SUCCESS:
                return {
                ...state,
                isLoading: false,
                isAuth :true ,
                token : payload.token ,
                user: payload.user
                };
        
        case LOGIN_USER_SUCCESS :
            return {
                ...state ,
                isLoading : false , 
                isAuth : true , 
                token : payload.token , 
                user : payload.user ,
            }
        
        
        
        case GET_AUTH_USER :
            return {...state , isAuth : true , isLoading : false , user : payload.user }
        
        case AUTH_FAIL :
        case LOGOUT :
            return {...state , isAuth : false , isLoading : false , token : null , user : null}
        
        default:
        return state
    }
}
