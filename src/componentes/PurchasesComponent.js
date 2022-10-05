import React from "react";
import { useNavigate } from "react-router-dom";
import { Accordion } from 'react-bootstrap';

const PurchasesComponent = ({ purchases }) => {

  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(purchases.createdAt).toLocaleDateString(undefined, options);

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header><li className='list-group-item active title'>{date}</li></Accordion.Header>
            <Accordion.Body>
            {
                        purchases.cart.products.map(product=>(
                            
                            <ul onClick={()=>navigate(`/product/${product.id}`)} key={product.id} className='list-group'>
                                
                                <li className='list-group-item'>{product.title}</li>
                                <li className='list-group-item'>$ {product.price}</li>
                                <li className='list-group-item'>Items: {product.productsInCart.quantity}</li>
                            </ul>
                        ))
                    }
              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default PurchasesComponent;
