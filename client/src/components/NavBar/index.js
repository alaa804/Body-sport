import React from 'react'
import {useSelector} from "react-redux"
import AuthLinks from "./AuthLinks"
import GuestLinks from './GuestLinks'
import "./style.css"

import Logo from "./logo.png"
import {Link} from "react-router-dom"




function NavBar() {
    const isAuth = useSelector((state) => state.authReducer.isAuth)

    return (

        <header className="navbar">
        
        <img src={Logo} alt="Logo"/>
        
        <nav>
        <ul className="navMenu">
            <li>HOME</li>
            <li>SHOP</li>
            <li><Link to="/about">ABOUT</Link></li>
            <li>MEMBERS</li>
            <li><Link to="/contact">CONTACT </Link> </li> 
        </ul>
        </nav>


  


  
  

    



        <div className="signeUp">
            <ul className="menu">
                <li>
                <i className="Login fas fa-user-circle">Log in </i>
                </li>
            </ul>
            <button className="shop">
            <i className="shopping fas fa-shopping-basket">0</i>
            </button>
        </div>
        </header>

        <React.Fragment>
        {isAuth ? <AuthLinks/> : <GuestLinks/> }
        </React.Fragment>

    )
}

export default NavBar
