import React , {useState , useEffect}  from 'react'
import {useSelector , useDispatch} from "react-redux"
import {decrement , increment , DeleteCart} from "../../JS/actions/authActions"
import {Link} from "react-router-dom"
import PaypalButton from "./PaypalButton"
import "./cart.css"



const Cart = (props) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.authReducer.cart)
    const[total , setTotal] = useState(0)
    

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, product) => {
                return prev + (product.price * product.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])
    
    
    
    const tranSuccess = async(payment) => {
        console.log(payment)
        const {paymentID , address} = payment
    }
    
    const checkoutHandler = () => {
        props.history.push('/shipping?redirect=shipping');
      };
    
    
    
    if(cart.length === 0){
        return <h1 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h1> 
    }
    
    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
            {cart.map((Product) => (
                <li key={Product._id} className="detail cart">
                    <div className="row">
                        <div>
                    <img src={Product.images.url} alt="" className="small" />
                    </div>
                    <div className="min-30">
                    <h2> {Product.title}</h2>
                    </div>

                    <span>$ {Product.price * Product.quantity}</span>
                   
                    
                    
                    <div className="amount">
                        <button onClick={() => dispatch(decrement(cart , Product._id))}>-</button>
                        <span>{Product.quantity}</span>
                        <button onClick={() => dispatch(increment(cart , Product._id))}>+</button>
                        
                    </div>
                    <div onClick={() => dispatch(DeleteCart(cart , Product._id))} className="delete">X</div>
                </div>
                </li>
            
            ))
            }
            </ul>
        
            <div className="col-1">
        <div className="total">
          <ul>
            <li>
                <h5>Total: $ {total}</h5>
                <PaypalButton
                total={total}
                tranSuccess={tranSuccess}
                />
                </li>
                <li>
                <button
                type="button"
                 onClick={checkoutHandler}
                className="primary block"
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </button>
              </li>
              </ul>
              </div>
            </div>
        </div>
    )

}

export default Cart
