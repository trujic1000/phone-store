import { storeProducts, detailProduct } from '../data';

import {
  SET_PRODUCT_DETAILS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART
} from '../actions/types';

let tempProducts = [];
storeProducts.forEach(item => tempProducts.push({ ...item }));

export const productReducer = (productState, action) => {
  switch (action.type) {
    case SET_PRODUCT_DETAILS:
      return {
        ...productState,
        productDetails: action.payload
      };
    case ADD_ITEM_TO_CART:
      return {
        ...productState,
        products: action.payload.products
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...productState,
        products: action.payload.products
      };
    case CLEAR_CART:
      return {
        products: tempProducts,
        productDetails: { ...detailProduct }
      };
    default:
      return productState;
  }
};
