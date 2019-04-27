import {
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  ADD_TOTALS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART
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
    case ADD_TOTALS: {
      const { subtotal, tax, total } = action.payload;
      return {
        ...cartState,
        cartSubtotal: subtotal,
        cartTax: tax,
        cartTotal: total
      };
    }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...cartState,
        cart: action.payload.cart
      };
    case CLEAR_CART:
      return {
        cart: [],
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
      };
    default:
      return cartState;
  }
};
