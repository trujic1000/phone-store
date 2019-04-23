import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

export const modalReducer = (modalState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalOpen: true,
        modalProduct: action.payload
      };
    case CLOSE_MODAL:
      return {
        modalOpen: false,
        modalProduct: {}
      };
    default:
      return modalState;
  }
};
