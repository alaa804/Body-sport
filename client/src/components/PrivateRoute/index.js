import React from 'react'
import {Route , Redirect} from "react-router-dom"
import {useSelector} from "react-redux"

const PrivateRoute = ({component:Component , path , ...rest }) => {
    const isAuth = useSelector((state) => state.authReducer.isAuth)
    const isLoading = useSelector((state) => state.authReducer.isLoading)
    const isAdmin = useSelector((state) => state.authReducer.isAdmin)

    
    if(isLoading ) {
        return <h1> Loading..... </h1>;
    }
    
    if(!isAuth && !isLoading ) {
        return <Redirect to="/login" />
    } else return <Route path={path} component={Component} {...rest}  />
    
   
    
}

export default PrivateRoute
