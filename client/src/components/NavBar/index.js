import React from 'react'
import {useSelector} from "react-redux"
import AuthLinks from "./AuthLinks"
import GuestLinks from './GuestLinks'
import "./style.css"






function NavBar() {
    const isAuth = useSelector((state) => state.authReducer.isAuth)

    return (

        



        <React.Fragment>
        {isAuth ? <AuthLinks/> : <GuestLinks/> }
        </React.Fragment>

    )
}

export default NavBar
