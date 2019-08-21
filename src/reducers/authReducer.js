import isEmpty from '@Utilities/isEmpty';
import {
  AUTHENTICATING,
  SET_CURRENT_USER,
  NOT_AUTHENTICATING,
} from '@Actions/types';

export const initialState = {
  authenticating: false,
  isAuthenticated: false,
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATING:
      return {
        ...state,
        authenticating: true,
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
    default:
      return state;
  }
};
