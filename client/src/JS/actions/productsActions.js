import axios from "axios"
import {GET_PRODUCTS , SET_LOADING} from "../const"

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