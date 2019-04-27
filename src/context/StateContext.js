import React, { createContext, useReducer } from 'react';
import { storeProducts, detailProduct } from '../data';
import { stateReducer } from '../reducers';
import { useProductActions, useCartActions, useModalActions } from '../actions';

let tempProducts = [];
storeProducts.forEach(item => tempProducts.push({ ...item }));

const initialState = {
  product: {
    products: tempProducts,
    productDetails: { ...detailProduct }
  },
  cart: {
    cart: [],
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  },
  modal: {
    modalOpen: false,
    modalProduct: {}
  }
};

const StateContext = createContext(initialState);

const StateProvider = ({ children }) => {
  const [{ product, cart, modal }, dispatch] = useReducer(
    stateReducer,
    initialState
  );
  const productActions = useProductActions(product, dispatch);
  const cartActions = useCartActions({ product, cart }, dispatch);
  const modalActions = useModalActions(product, dispatch);

  // Providing actions because they have acces to dispatch here
  return (
    <StateContext.Provider
      value={{
        productState: product,
        productActions,
        cartState: cart,
        cartActions,
        modalState: modal,
        modalActions
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
