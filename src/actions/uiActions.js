import {
  MODAL_OPEN,
  MODAL_CLOSE,
} from '@Actions/types';

export const openModal = modal => ({
  type: MODAL_OPEN,
  payload: modal,
});

export const closeModal = modal => ({
  type: MODAL_CLOSE,
  payload: modal,
});
