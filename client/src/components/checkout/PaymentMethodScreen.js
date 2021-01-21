import React , { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { savePaymentMethod } from '../../JS/actions/productsActions';
import CheckoutSteps from '../checkout/CheckoutSteps';
import NavBar from '../NavBar';


const PaymentMethodScreen = (props) => {
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    };
    return (
        <div>
            <NavBar/>
         <CheckoutSteps step1 step2 step3></CheckoutSteps> 
         <form className="form3" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
        <div>
          <label />
          <Link to="/placeorder" ><button className="primary" type="submit">
            Continue
          </button></Link>
        </div>
      </form>
    </div>  
        
    )
}

export default PaymentMethodScreen