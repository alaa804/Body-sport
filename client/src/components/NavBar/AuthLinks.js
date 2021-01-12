import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import {logout} from "../../JS/actions/authActions"
import {Link} from "react-router-dom"
import Logo from "./logo.png"
import "./style.css"



const AuthLinks = () => {
    const user = useSelector((state) => state.authReducer.user)
    const dispatch = useDispatch()
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
            
            Signed in as :  {user.name + " " + user.lastName} 
            <button onClick={() => dispatch(logout())}> Logout </button>
            <button className="shop">
            <i className="shopping fas fa-shopping-basket">0</i>
            </button>
        </div>
        </header>
    )
}

export default AuthLinks
