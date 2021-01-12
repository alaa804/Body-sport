




import Conatct from './components/Contact';
import About from './components/About';

import React , {useEffect} from "react"
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import {useDispatch , useSelector} from "react-redux"
import HOME from './components/HomePage';
import Login from "./components/AuthForms/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import {getAuthUser} from "./JS/actions/authActions"
import './App.css';
import Register from "./components/AuthForms/Register";
import ProductsList from "./components/ProductsList";
import DetailProduct from "./components/DetailProduct";




function App() {

  const dispatch = useDispatch()
  
  
  // useEffect(() => {
  //     dispatch(getAuthUser())
  // },[dispatch])
  
  
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
      <Route  path="/product" component={ProductsList}   />
      <Route  path="/detail/:id" component={DetailProduct}   />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
    </Router>


  );
}

export default App;

    