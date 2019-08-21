import {
  MODAL_OPEN,
  MODAL_CLOSE,
  NOT_AUTHENTICATING,
  NOT_LOADING,
} from '@Actions/types';

export const openModal = modal => ({
  type: MODAL_OPEN,
  payload: modal,
});

export const closeModal = modal => async (dispatch) => {
  dispatch({
    type: MODAL_CLOSE,
    payload: modal,
  });
  dispatch({
    type: NOT_AUTHENTICATING,
  });
  return dispatch({
    type: NOT_LOADING,
  });
};
