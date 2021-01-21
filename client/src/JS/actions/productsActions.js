import axios from "axios"
import {GET_PRODUCTS , ADD_PRODUCTS ,SET_LOADING ,  CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,} from "../const"


// get product

export const getProduct = () => async (dispatch) => {
    
    
    
    try {
        const res = await axios.get("/api/product")
        dispatch({
            type : GET_PRODUCTS,
            payload : res.data
        })

    } catch (error) {
        console.log(error)
    }
}

// add product 
export const addProduct = (newProduct) => async( dispatch) => {
    
    
    
    try {
        const res = await axios.post("/api/product" , newProduct)
        dispatch({
            type : ADD_PRODUCTS,
            payload : res.data
        })

    } catch (error) {
        console.log(error)
    }
}

// delete product


export const removeProduct = (id) => (dispatch) => {
    axios.delete(`/api/product/${id}`) 
    .then((res) => dispatch(getProduct()))
    
    .catch((err) => {
        alert("errore delete")
    })
}

//edit product 

export const editeProductById = (id , formeData) => (dispatch) => {
    axios.put(`/api/product/${id} ` , formeData)
    .then((res) => dispatch(getProduct()))
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
  };
  export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
  };