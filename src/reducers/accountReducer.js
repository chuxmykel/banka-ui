import {
  GET_USER_ACCOUNTS,
  GET_ACCOUNT_TRANSACTIONS,
  GET_ALL_USERS_ACCOUNTS,
} from '@Actions/types';

export const initialState = {
  accounts: [],
  transactions: [],
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ACCOUNTS:
    case GET_ALL_USERS_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
      };
    case GET_ACCOUNT_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};
