import React , {useEffect , useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../checkout/CheckoutSteps';
import "../Cart/cart.css"


export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.authReducer.cart);
  
//   if (!cart.paymentMethod) {
//     props.history.push('/payment');
//   }



  
  const placeOrderHandler = () => {
   
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
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
                    
                   
                    </div>  
                </li>
                ))}
              </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  
                </div>
              </li>
             
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                   
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  
                >
                  Place Order
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}