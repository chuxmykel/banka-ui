import { should } from 'chai';
import { initialState as uiState, uiReducer } from '@Reducers/uiReducer';
import {
  MODAL_OPEN,
  MODAL_CLOSE,
  LOADING,
  NOT_LOADING,
} from '@Actions/types';

should();

describe('Modal Actions And Reducers Tests', () => {
  it('opens the modal', () => {
    const state = uiReducer(uiState, {
      type: MODAL_OPEN,
    });
    expect(state.modalOpen).toEqual(true);
  });

  it('closes the modal', () => {
    const state = uiReducer(uiState, {
      type: MODAL_CLOSE,
    });
    expect(state.modalOpen).toEqual(false);
  });

  it('sets loading true', () => {
    const state = uiReducer(uiState, {
      type: LOADING,
    });
    expect(state.loading).toEqual(true);
  });

  it('sets loading false', () => {
    const state = uiReducer(uiState, {
      type: NOT_LOADING,
    });
    expect(state.loading).toEqual(false);
  });

  it('should return default state', () => {
    const state = uiReducer(uiState, {
      type: 'RANDOM_STATE',
    });
    state.should.equal(uiState);
  });
});
