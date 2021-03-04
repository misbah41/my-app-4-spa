
import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {
  const {productKey} = useParams();

  const product = fakeData.find(pd => pd.key === productKey);

  return (
    <div>
      <h3>Your Ordered Products Details ..</h3>
      <Products showAddtoCart={false} product={product}/>
    </div>
  );
};

export default ProductDetails;

