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
    let products = [];
    storeProducts.forEach(item => products.push({ ...item }));
    setProducts(products);
  }, []);

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
    console.log('This is increment method');
  };

  const dec = id => {
    console.log('This is decrement method');
  };

  const removeItem = id => {
    console.log('Item removed');
  };

  const clearCart = () => {
    console.log('Cart cleared');
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
