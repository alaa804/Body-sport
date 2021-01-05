import React from 'react'
import "./style.css"
import Logo from "./logo.png"



function NavBar() {
    return (
        <header className="navbar">
        
        <img src={Logo} alt="Logo"/>
        
        <nav>
        <ul className="navMenu">
            <li>HOME</li>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>MEMBERS</li>
            <li>CONTACT</li>
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
    )
}

export default NavBar
