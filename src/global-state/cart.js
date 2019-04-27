import React, { useReducer, createContext, useContext } from 'react';
import {
  ADD_ITEM_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  ADD_TOTALS,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART
} from '../actions/types';
import { useCartActions } from '../actions';
import { useProductState } from './product';

const initialState = {
  cart: [],
  subtotal: 0,
  tax: 0,
  total: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: action.payload
      };
    case INCREMENT_ITEM:
      return {
        ...state,
        cart: action.payload
      };
    case DECREMENT_ITEM:
      return {
        ...state,
        cart: action.payload
      };
    case ADD_TOTALS: {
      const { subtotal, tax, total } = action.payload;
      return {
        ...state,
        subtotal,
        tax,
        total
      };
    }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: action.payload
      };
    case CLEAR_CART:
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

export const CartContext = createContext(initialState);

// Custom hook for using cart context
export const useCartState = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { productState } = useProductState();
  const cartActions = useCartActions(
    { productState, cartState: state },
    dispatch
  );
  return (
    <CartContext.Provider value={{ cartState: state, cartActions }}>
      {children}
    </CartContext.Provider>
  );
};
