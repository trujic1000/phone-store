import { OPEN_MODAL, CLOSE_MODAL } from './types';

export const useModalActions = (product, dispatch) => {
  // Get item by id
  const getItem = id => product.products.find(item => item.id === id);

  const openModal = id => {
    const item = getItem(id);
    dispatch({
      type: OPEN_MODAL,
      payload: item
    });
  };

  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL
    });
  };

  return {
    openModal,
    closeModal
  };
};
