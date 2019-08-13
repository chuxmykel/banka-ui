import {
  MODAL_OPEN,
  MODAL_CLOSE,
  CLEAR_SERVER_ERROR,
  NOT_AUTHENTICATING,
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
    type: CLEAR_SERVER_ERROR,
    payload: '',
  });
};
