import React, { useState } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

// Provider
function ProductProvider(props) {
  const [products, setProducts] = useState(storeProducts);
  const [productDetails, setProductDetails] = useState(detailProduct);

  const handleDetail = () => {
    console.log('Hello from detail');
  };
  const addToCart = () => {
    console.log('Hello from addToCart');
  };

  // Returning 'state'
  return (
    <ProductContext.Provider
      value={{
        products,
        productDetails,
        handleDetail,
        addToCart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
export { ProductContext, ProductProvider };
