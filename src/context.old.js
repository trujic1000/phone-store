// OLD CONTEXT, NOT USED ANYMORE

import React, { useState, useEffect } from 'react';
import { storeProducts, detailProduct } from './data';

// Product Context
const ProductContext = React.createContext({
  products: [],
  productDetails: {},
  cart: [],
  cartSubtotal: 0,
  cartTax: 0,
  cartTotal: 0,
  modalOpen: false,
  modalProduct: {}
});

// Provider Component
function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({ ...detailProduct });
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({ ...detailProduct });
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Initializing a copy of products data to state
  useEffect(() => {
    // Initializing a new copy of products when app loads and when we clear cart
    if (!cart.length) {
      let products = [];
      storeProducts.forEach(item => products.push({ ...item }));
      setProducts(products);
    }
  });

  // Get item by id
  const getItem = id => products.find(item => item.id === id);

  // Handling productDetails state to match specific product details
  const handleDetails = id => {
    const product = getItem(id);
    setProductDetails(product);
  };
  // Adding product to cart
  const addToCart = id => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    const tempCart = [...cart, product];
    setCart(tempCart);
  };
  // Open modal
  const openModal = id => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };
  // Close modal
  const closeModal = () => {
    setModalOpen(false);
  };
  // CART METHODS
  // Incrementing/Decrementing values in the cart
  const inc = id => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count += 1;
    product.total = product.count * product.price;
    setCart(tempCart);
    addTotals();
  };

  const dec = id => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count -= 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart(tempCart);
      addTotals();
    }
  };

  const removeItem = id => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setCart(tempCart);
    setProducts(tempProducts);
    addTotals();
  };

  const clearCart = () => {
    setCart([]);
    addTotals();
  };

  const addTotals = () => {
    let subtotal = 0;
    cart.map(product => (subtotal += product.total));
    const tempTax = subtotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    // Disgusting, have to change..
    setCartSubtotal(subtotal);
    setCartTax(tax);
    setCartTotal(total);
  };

  // Providing 'product state'
  return (
    <ProductContext.Provider
      value={{
        products,
        productDetails,
        cart,
        cartSubtotal,
        cartTax,
        cartTotal,
        inc,
        dec,
        removeItem,
        clearCart,
        addTotals,
        modalOpen,
        modalProduct,
        handleDetails,
        addToCart,
        openModal,
        closeModal
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
export { ProductContext, ProductProvider };
