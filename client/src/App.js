




import Conatct from './components/Contact';
import About from './components/About';

import React , {useEffect} from "react"
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import {useDispatch , useSelector} from "react-redux"
import HOME from './components/HomePage';
import Login from "./components/AuthForms/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import {getAuthUser } from "./JS/actions/authActions"
import './App.css';
import Register from "./components/AuthForms/Register";
import ProductsList from "./components/ProductsList";
import DetailProduct from "./components/DetailProduct";
import Cart from './components/Cart/Cart';
import { CreateProduct } from './components/createProduct/CreateProduct';
import ShippingAddressScreen from './components/checkout/ShippingAddressScreen';
import PaymentMethodScreen from './components/checkout/PaymentMethodScreen'
import PlaceOrderScreen from './components/checkout/PlaceOrderScreen'




function App() {

  const dispatch = useDispatch()
  const isAdmin = useSelector((state) => state.authReducer.isAdmin)
 
  
  
  
  useEffect(() => {
      if(localStorage.getItem("token")  )
      dispatch(getAuthUser())
  },[])

  
  
  const isLoading = useSelector((state) => state.authReducer.isLoading)
  
  if(isLoading) {
    return <h1>Loading.....</h1>
  }
  

  
  return (
    <Router> 
    <Switch>
      <Route exact path="/" component={HOME}/>
     <Route path = "/contact" component={Conatct} />
        <Route path = "/about" component={About} />
      <Route  path="/login" component = {Login} />
      <Route  path="/register" component={Register}   />
      <Route path="/shipping" component={ShippingAddressScreen}></Route>
      <Route path="/payment" component={PaymentMethodScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route  path="/product" component={ProductsList}   />
      <Route  path="/detail/:id" component={DetailProduct}   />
      <Route  path="/cart" component={Cart}   />
      <Route  path="/create_product" component={CreateProduct}   />
       <Route  path="/edit_product/:id" component={CreateProduct}   /> 
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
    </Router>


  );
}

export default App;

    