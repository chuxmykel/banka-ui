import {
  MODAL_OPEN,
  MODAL_CLOSE,
} from '@Actions/types';

export const initialState = {
  modalOpen: false,
  modal: 'signup',
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        modalOpen: true,
        modal: action.payload,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        modalOpen: false,
        modal: action.payload,
      };
    default:
      return state;
  }
};
