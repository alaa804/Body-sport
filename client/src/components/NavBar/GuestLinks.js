import React from 'react'
import {Link} from "react-router-dom"
import Logo from "./logo.png"
import "./style.css"

const GuestLinks = () => {
    return (
        <header className="navbar">
        
        <img src={Logo} alt="Logo"/>
        
        <nav>
        <ul className="navMenu">
            <li><Link style={{color : "inherit" , textDecoration : "inherit"}} to="/">HOME</Link></li>
            <li> <Link style={{color : "inherit" , textDecoration : "inherit"}} to="/product"> SHOP</Link></li>
            <li><Link style={{color : "inherit" , textDecoration : "inherit"}} to="/about">ABOUT</Link></li>
            <li><Link style={{color : "inherit" , textDecoration : "inherit"}} to="/contact">CONTACT</Link></li>
        </ul>
        </nav>
        <div className="signeUp">
            <ul className="menu">
                <li>
                    <Link to="/login" style={{color : "inherit" , textDecoration : "inherit"}}>
                <i className="Login fas fa-user-circle"> Log in </i></Link>
                </li>
                <li className="register">
                <Link to="/register" style={{color : "inherit" , textDecoration : "inherit"}} >Register</Link>
                </li>
            </ul>

            <button className="shop">
            <i className="shopping fas fa-shopping-basket">0</i>
            </button>
        </div>
        </header>
    )
}

export default GuestLinks
