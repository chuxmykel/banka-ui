import {
  MODAL_OPEN,
  MODAL_CLOSE,
} from '@Actions/types';

export const openModal = () => ({
  type: MODAL_OPEN,
});

export const closeModal = () => ({
  type: MODAL_CLOSE,
});
