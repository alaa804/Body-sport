import {GET_PRODUCTS , SET_LOADING} from "../const"


const initialState = {
    products : [] ,
    isLoading : false ,
}

export default (state=initialState , {type , payload }) => {
    switch (type) {
        

        case GET_PRODUCTS:
            return {...state , isLoading: false , products : payload.products}
            
        default:
            return state
    }
}