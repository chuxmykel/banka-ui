import chai from 'chai';
import { initialState as authState, authReducer } from '@Reducers/authReducer';
import {
  AUTHENTICATING,
  SET_CURRENT_USER,
  NOT_AUTHENTICATING,
} from '@Actions/types';

chai.should();

describe('Sign up Reducers tests', () => {
  it('should set authenticating to true', () => {
    const state = authReducer(authState, {
      type: AUTHENTICATING,
    });
    expect(state.authenticating).toEqual(true);
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

  it('should set authenticating to false', () => {
    const state = authReducer(authState, {
      type: NOT_AUTHENTICATING,
    });
    expect(state.authenticating).toEqual(false);
  });

  it('should return default state', () => {
    const state = authReducer(authState, {
      type: 'RANDOM_TYPE',
    });
    state.should.equal(authState);
  });
});
