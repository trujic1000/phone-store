import {
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  ADD_TOTALS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from '../actions/types';

export const cartReducer = (cartState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...cartState,
        cart: action.payload.cart
      };
    case INCREMENT_ITEM:
      return {
        ...cartState,
        cart: action.payload
      };
    case DECREMENT_ITEM:
      return {
        ...cartState,
        cart: action.payload
      };
    case ADD_TOTALS:
      return {
        ...cartState,
        cartSubtotal: action.payload.subtotal,
        cartTax: action.payload.tax,
        cartTotal: action.payload.total
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...cartState,
        cart: action.payload.cart
      };
    default:
      return cartState;
  }
};
