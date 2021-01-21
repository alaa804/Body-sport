import React , {useState} from 'react'
import BtnRender from './BtnRender'
import  "./style.css";
import Rating from '../rating/index'




const ProductCard = ({product}) => {

    return (
        
        

        <div className="product_card">
            
            <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2>{product.title}</h2> 
                <Rating  rating={product.rating}
                numReviews={product.numReviews}
                ></Rating>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>

            <div className="row_btn">
                <BtnRender product={product}/>
            </div>
        </div>
        
        
    )
}

export default ProductCard
