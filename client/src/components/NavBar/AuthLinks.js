import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import {logout} from "../../JS/actions/authActions"
import {Link} from "react-router-dom"
import Logo from "./logo.png"
import "./style.css"



const AuthLinks = () => {
    const user = useSelector((state) => state.authReducer.user)
    const isAdmin = useSelector((state) => state.authReducer.isAdmin)
    const cart = useSelector((state) => state.authReducer.cart)


    const dispatch = useDispatch()
    return (
        <header className="navbar">
        
        <img src={Logo} alt="Logo"/>
        
        <nav>
        <ul className="navMenu">
            <li>{isAdmin ? <Link style={{color : "inherit" , textDecoration : "inherit"}} to="/product" > PRODUCTS </Link>   : <Link style={{color : "inherit" , textDecoration : "inherit"}} to="/"> HOME </Link> }</li>
            <li> {isAdmin ?<Link style={{color : "inherit" , textDecoration : "inherit"}}  to="/create_product"> CREATE PRODUCTS </Link> : <Link style={{color : "inherit" , textDecoration : "inherit"}} to="/product" > SHOP</Link> }</li>
            <li>{isAdmin ? null :<Link style={{color : "inherit" , textDecoration : "inherit"}} to="/about" > ABOUT </Link> }</li>
            <li>{isAdmin ? null :<Link style={{color : "inherit" , textDecoration : "inherit"}} to="/contact" > CONTACT </Link> }</li>
            
        </ul>
        </nav>
        <div className="signeUp">
            
            Signed in as  :<h2 style={{marginLeft : "10px" , marginTop : "2px"}}>  {  user.name + " " + user.lastName} </h2>
            <button onClick={() => dispatch(logout())}> Logout </button>
            <Link style={{color : "inherit" , textDecoration : "inherit"}} to="/cart"><button className="shop">
            <i className="shopping fas fa-shopping-basket"><span>{cart.length}</span></i>
            </button></Link>
        </div>
        </header>
    )
}

export default AuthLinks
