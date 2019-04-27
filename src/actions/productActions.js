import { SET_PRODUCT_DETAILS } from './types';

export const useProductActions = (productState, dispatch) => {
  const setProductDetails = product => {
    dispatch({
      type: SET_PRODUCT_DETAILS,
      payload: product
    });
  };

  return {
    setProductDetails
  };
};
