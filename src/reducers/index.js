import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { modalReducer } from './modalReducer';

export const stateReducer = ({ product, cart, modal }, action) => ({
  product: productReducer(product, action),
  cart: cartReducer(cart, action),
  modal: modalReducer(modal, action)
});
