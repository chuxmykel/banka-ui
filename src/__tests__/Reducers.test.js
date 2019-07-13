import { initialState, uiReducer } from '@Reducers/uiReducer';
import {
  MODAL_OPEN,
  MODAL_CLOSE
} from '@Actions/types';


describe('Modal Actions And Reducers Tests', () => {
  it('opens the modal', () => {
    const state = uiReducer(initialState, {
      type: MODAL_OPEN,
    });
    expect(state.modalOpen).toEqual(true);
  });

  it('closes the modal', () => {
    const state = uiReducer(initialState, {
      type: MODAL_CLOSE,
    });
    expect(state.modalOpen).toEqual(false);
  });
});