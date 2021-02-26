


import React from 'react';

const Cart = (props) => {
  const cart = props.cart;

  const total = cart.reduce((total, prd) => total + prd.price, 0)

  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99
  } else if (total > 0) {
    shipping = 12.99
  }

  let tax = total / 10;

  const formatNumber = (num) => {
    const pricision = num.toFixed(2)
    return Number(pricision)
  }

  return (
    <div className="pt-3">
      <h2>Order Summary</h2>
      <h3>Items Ordered {cart.length}</h3>
      <p>Total Cost :{formatNumber(total)}</p>
      <small>Shipping Cost : {shipping}</small>
      <p>Tax {formatNumber(tax)}</p>
      <p>Grand Total Cost : {formatNumber(total + shipping + tax)}</p>
    </div>
  );
};

export default Cart;

