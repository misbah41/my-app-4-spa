
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';


const Shop = () => {
  const first10 = fakeData.slice(0, 10)
  
  const [products, setproducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart)
  }
 
  return (
    <div className="shop-container">
      <div className="products-container">
        <h3>Hello Shop App</h3>

        {
          products.map(pd => <Products handleAddProduct={handleAddProduct} product={pd} />)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Shop;

