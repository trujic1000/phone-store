import React, { useState, useEffect } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

// Provider Component
function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(detailProduct);

  // Initializing a copy of data to state
  useEffect(() => {
    let products = [];
    storeProducts.forEach(item => products.push({ ...item }));
    setProducts(products);
  });

  const handleDetail = () => {
    console.log('Hello from detail');
  };
  const addToCart = () => {
    console.log('Hello from addToCart');
  };

  // Providing 'state'
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
