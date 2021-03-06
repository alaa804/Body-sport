import React , {useEffect , useState} from 'react'
import {useSelector , useDispatch} from "react-redux"
import {getProduct} from "../../JS/actions/productsActions"
import NavBar from '../NavBar'
import ProductCard from '../ProductCard'
import Loading from "../Loading"
import "./ProductList.css"


const ProductsList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.productsReducer.products)
    
   

    
    
    useEffect(() => {
        dispatch(getProduct())
    }, [getProduct])

    
    return (
        <React.Fragment>
            <NavBar/>
        <div className="products" >
        {products.map((product) => (
                <ProductCard  key={product._id} product={product}/>
        ))}
        </div>
        {products.length === 0 && <Loading/> }
        </React.Fragment>
    )
}

export default ProductsList
