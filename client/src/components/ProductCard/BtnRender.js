import React , {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {useSelector , useDispatch} from "react-redux"
import {addCart} from "../../JS/actions/authActions"
import {removeProduct} from "../../JS/actions/productsActions"
import Modal from "react-modal";


Modal.setAppElement("#root");


const BtnRender = ({product}) => {
    const dispatch = useDispatch()
    const isAdmin = useSelector((state) => state.authReducer.isAdmin)
    const isLogged = useSelector((state) => state.authReducer.isLogged)
    const cart = useSelector((state) => state.authReducer.cart)
    const deleteProduct = (id) => dispatch(removeProduct(id))

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }
    
    
    return (
        <div className="row_btn">
            {isAdmin ?
            <>
            <Link onClick={()=> deleteProduct(product._id)} className="btn_view" to="#!">
                Delete
            </Link>
            
            <Link className="btn_buy" to={`/edit_product/${product._id}`}>
                Edit
            </Link>
            
            
            </>
            :   <>
            <Link className="btn_view" to={`/detail/${product._id}`}>
                View
            </Link>
            <Link className="btn_buy" to="#!" onClick={() => dispatch(addCart(product , cart , isLogged)  )}>
                Buy
            </Link>
                </>
            }
        </div>
    )
}

export default BtnRender