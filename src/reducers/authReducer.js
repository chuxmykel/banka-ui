import isEmpty from '@Utilities/isEmpty';
import {
  AUTHENTICATING,
  SET_CURRENT_USER,
  SERVER_AUTH_ERROR,
  CLEAR_SERVER_ERROR,
  NOT_AUTHENTICATING,
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
    case NOT_AUTHENTICATING:
      return {
        ...state,
        authenticating: false,
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
    case CLEAR_SERVER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
