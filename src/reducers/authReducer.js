import isEmpty from '@Utilities/isEmpty';
import {
  AUTHENTICATING,
  SET_CURRENT_USER,
  SERVER_AUTH_ERROR,
} from '@Actions/types';

export const initialState = {
  authenticating: false,
  isAuthenticated: false,
  error: '',
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATING:
      return {
        ...state,
        authenticating: true,
        error: '',
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        authenticating: false,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case SERVER_AUTH_ERROR:
      return {
        ...state,
        authenticating: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
