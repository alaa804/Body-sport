import {GET_PRODUCTS , ADD_PRODUCTS ,SET_LOADING ,  CART_SAVE_SHIPPING_ADDRESS,CART_SAVE_PAYMENT_METHOD,} from "../const"


const initialState = {
    products : [] ,
    isLoading : false ,
}

export default (state=initialState , {type , payload }) => {
    switch (type) {
        

        case GET_PRODUCTS:
            return {...state , isLoading: false , products : payload.products}
        
            case ADD_PRODUCTS :
                return {...state , products : [payload , ...state.products]}
                case CART_SAVE_SHIPPING_ADDRESS:
                    return { ...state, shippingAddress: payload.type };  
                    case CART_SAVE_PAYMENT_METHOD:
                        return { ...state, paymentMethod: payload.type };
        default:
            return state
    }
}