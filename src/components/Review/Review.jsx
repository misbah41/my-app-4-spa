
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
  const [cart, setcart] = useState([]);

  useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKyes = Object.keys(savedCart);
    
    const cartProducts = productKyes.map(key => {
      const product = fakeData.find(pd=> pd.key === key)
      product.quantity = savedCart[key]
      return product;
    });
    setcart(cartProducts);

  },[])

  return (
    <>
      <h3>Review Items {cart.length}</h3>
    </>
  );
};

export default Review;


