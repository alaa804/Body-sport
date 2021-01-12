import React from 'react'
import { Link } from 'react-router-dom'


const BtnRender = ({product}) => {
    return (
        <div className="row_btn">
            <Link className="btn_view" to={`/detail/${product._id}`}>
                View
            </Link>
            
        </div>
    )
}

export default BtnRender