import axiosInstance from '@Utilities/axios';
import {
  LOADING,
  NOT_LOADING,
  GET_USER_ACCOUNTS,
  GET_ACCOUNT_TRANSACTIONS,
  MODAL_CLOSE,
} from '@Actions/types';

export const getAccounts = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  const response = await axiosInstance.get('user/accounts');

  if (response.status === 200) {
    const { accounts } = response.data;
    dispatch({
      type: GET_USER_ACCOUNTS,
      payload: accounts,
    });
  }

  dispatch({
    type: NOT_LOADING,
  });
};

export const getAccountTransactions = accountNumber => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  const response = await axiosInstance.get(`accounts/${accountNumber}/transactions`);

  if (response.status === 200) {
    const { data } = response.data;
    dispatch({
      type: GET_ACCOUNT_TRANSACTIONS,
      payload: data,
    });
  }

  dispatch({
    type: NOT_LOADING,
  });
};

export const createAccount = accountDetails => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  const account = {
    type: accountDetails.accountType,
    initialDeposit: accountDetails.initialDeposit,
  };
  const response = await axiosInstance.post('accounts', account);
  if (response.status === 201) {
    dispatch(getAccounts());
  }

  dispatch({
    type: MODAL_CLOSE,
    payload: 'createAccount',
  });
  dispatch({
    type: NOT_LOADING,
  });
};
