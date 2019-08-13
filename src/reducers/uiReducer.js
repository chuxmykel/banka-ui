import {
  MODAL_OPEN,
  MODAL_CLOSE,
  LOADING,
  NOT_LOADING,
} from '@Actions/types';

export const initialState = {
  modalOpen: false,
  modal: 'signup',
  loading: false,
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
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case NOT_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
