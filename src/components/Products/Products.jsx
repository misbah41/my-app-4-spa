
import React from 'react';

//font awesome icons import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import './Products.css';
const Products = (props) => {
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="imgBox">
        <img src={img} alt="Product imageName" />
      </div>
      <div className="contentBox">
        <h4 className="product-name">{name}</h4><br />
        <p><small>By {seller}</small></p>
        <p className="bg-light">$ {price}</p>
        <p>Stock {stock}</p>
        <button onClick={() => props.handleAddProduct(props.product)} className="btn btn-warning"><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</button>
      </div>
    </div>
  );
};

export default Products;