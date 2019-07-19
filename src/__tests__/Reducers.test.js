import { initialState as uiState, uiReducer } from '@Reducers/uiReducer';
import { initialState as authState, authReducer } from '@Reducers/authReducer';
import {
  MODAL_OPEN,
  MODAL_CLOSE,
  AUTHENTICATING,
  SET_CURRENT_USER,
  SERVER_AUTH_ERROR,
} from '@Actions/types';


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
});

describe('Sign up Actions and Reducers tests', () => {
  it('sets authenticating to true', () => {
    const state = authReducer(authState, {
      type: AUTHENTICATING,
    });
    expect(state.authenticating).toEqual(true);
    expect(state.error).toEqual('');
  });

  it('should authenticate a user successfully', () => {
    const user = {
      sub: '1234567890',
      name: 'John Doe',
      iat: 1516239022,
    };
    const state = authReducer(authState, {
      type: SET_CURRENT_USER,
      payload: user,
    });
    expect(state.authenticating).toEqual(false);
    expect(state.isAuthenticated).toEqual(true);
    expect(state.user).toEqual(user);
  });

  it('should display error message', () => {
    const state = authReducer(authState, {
      type: SERVER_AUTH_ERROR,
      payload: 'This works',
    });
    expect(state.authenticating).toEqual(false);
    expect(state.isAuthenticated).toEqual(false);
    expect(state.error).toEqual('This works');
  });
});
