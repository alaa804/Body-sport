import axios from "axios"
import {LOGIN_USER_SUCCESS , REGISTER_USER_SUCCESS
, AUTH_FAIL , SET_LOADING ,
LOGOUT, GET_AUTH_USER , ADD_CART  
} from "../const"

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
        dispatch({
            type : GET_AUTH_USER,
            payload : res.data
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

//****************Shopping Cart*************** */

//add cart

export const addCart = (product , cart , isLogged) => async dispatch => {
    
    
    if(!isLogged) return alert("Please login to continue buying")
    
    const check = cart.every((item) => {
        return item._id !== product._id
    })
    
    if(check)
    dispatch({
        type : ADD_CART,
        payload:  [...cart , {...product , quantity:1}] 
        
    })
    
    else{
        alert("this product hes been added to cart. ")
    }
}

// decrement 

export const decrement = (data , id) => async dispatch => {
    const newData = [...data]
    newData.forEach(product => {
        if(product._id === id) product.quantity === 1 ? product.quantity = 1 : product.quantity -= 1
    })
    
    dispatch({
        type : ADD_CART,
        payload : newData
    })

}

// increment

export const increment = (data , id) => async dispatch => {
    const newData = [...data]
    newData.forEach(product => {
        if(product._id === id) product.quantity +=1
    })
    
    dispatch({
        type : ADD_CART,
        payload : newData
    })

}

// Delete Cart

export const DeleteCart = (data , id ) => async dispatch => {
    const newData = data.filter(product => product._id !== id)
    
    dispatch({
        type : ADD_CART,
        payload : newData
    })


}






