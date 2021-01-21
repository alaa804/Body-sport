import React , {useState , useEffect} from 'react'
import {useParams , Link} from "react-router-dom"
import {useSelector , useDispatch} from "react-redux"
import "./detail.css"
import ProductCard from '../ProductCard'
import {addCart} from "../../JS/actions/authActions"
import NavBar from '../NavBar'


const DetailProduct = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const products = useSelector((state) => state.productsReducer.products)
    const [detailProduct , setDetailProduct] = useState([])
    
    useEffect(() => {
        if(params.id) {
            products.forEach((product) => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id , products])

    if(detailProduct.length === 0) return null ;

    return (
        <>
        <NavBar/>
        <div className="detail">
                <img src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                    </div>
                    <span>$ {detailProduct.price}</span>
                    <p>{detailProduct.description}</p>
                    
                    
                </div>
            </div>
            <div>
                <h2 className="Related_products">Related products</h2>
                <div className="products">
                    {
                        products.map((product) => {
                            return product.category === detailProduct.category
                            ? <ProductCard key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
                
            </>
    )
}

export default DetailProduct
