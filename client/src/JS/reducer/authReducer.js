import {LOGIN_USER_SUCCESS , REGISTER_USER_SUCCESS , AUTH_FAIL , SET_LOADING , LOGOUT , GET_AUTH_USER , ADD_CART} from "../const"


const initialState = {
    token : null ,
    user : null ,
    isLoading : false ,
    isAuth : false ,
    isAdmin : false ,
    isLogged : false ,
    cart : [],
    
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
                user : payload.user,
                
            }
        
            case GET_AUTH_USER :
            return {...state ,  isAuth : true , isLoading : false , user : payload.user , isLogged : true , isAdmin : payload.user.name === "Admin" ? { isAdmin : true} : false }
        
            case ADD_CART :
                return {...state , cart : payload}
        
        case AUTH_FAIL :
        case LOGOUT :
            return {...state , isAuth : false , isLoading : false , token : null , user : null , isAdmin : false , isLogged : false}
        
        
        
        default:
        return state
    }
}
