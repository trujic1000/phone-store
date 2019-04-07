import React, { useState, useEffect } from 'react';
import { storeProducts, detailProduct } from './data';

// Product Context
const ProductContext = React.createContext({
  products: [],
  productDetails: {},
  cart: [],
  modalOpen: false,
  modalProduct: {},
  handleDetails: null,
  addToCart: null,
  openModal: null,
  closeModal: null
});

// Provider Component
function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({ ...detailProduct });
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({ ...detailProduct });

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
    const tempCart = [product, ...cart];
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

  // Providing 'product state'
  return (
    <ProductContext.Provider
      value={{
        products,
        productDetails,
        cart,
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
