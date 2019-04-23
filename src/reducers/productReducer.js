import {
  SET_PRODUCT_DETAILS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from '../actions/types';

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
    default:
      return productState;
  }
};
