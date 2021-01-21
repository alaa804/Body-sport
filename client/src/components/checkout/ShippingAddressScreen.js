import React, { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveShippingAddress } from '../../JS/actions/productsActions';
import CheckoutSteps from '../checkout/CheckoutSteps';
import './CheckoutSteps.css'


export default function ShippingAddressScreen(props) {

  
  
  
 
    const [fullName, setFullName] = useState();
    const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postalCode, setPostalCode] = useState();
  const [country, setCountry] = useState();
  const dispatch = useDispatch();
 
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
        saveShippingAddress({ fullName, address, city, postalCode, country })
      );
      props.history.push('/payment'); 
  };
    return (
        <div>
          <CheckoutSteps step1 step2></CheckoutSteps>
          <form className="form3" onSubmit={submitHandler}>
        <div>
          <h1 className="titleAddress">Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit"><Link to="/payment"  > 
            Continue</Link>
          </button>
        </div>
        </form>
        </div>
          
    );
}