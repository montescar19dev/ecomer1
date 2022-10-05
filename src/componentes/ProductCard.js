import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const navigate=useNavigate();
    
    return (
        <div className='product-container' onClick={()=>navigate(`/product/${product.id}`)}>
            <div className='product-image'>
                <img src={product?.productImgs[0]} alt="" />
            </div>
            <div>
                <h2>{product?.title}</h2>
                <p>{product?.price}</p>
                <button className='btn btn-primary'>add</button>
            </div>   
        </div>
    );
};

export default ProductCard;