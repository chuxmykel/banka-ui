import {
  MODAL_OPEN,
  MODAL_CLOSE,
} from '@Actions/types';

export const initialState = {
  modalOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        modalOpen: true,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};
