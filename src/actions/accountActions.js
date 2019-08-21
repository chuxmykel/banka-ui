import { toast } from 'react-toastify';
import axiosInstance from '@Utilities/axios';
import {
  LOADING,
  NOT_LOADING,
  GET_USER_ACCOUNTS,
  GET_ALL_USERS_ACCOUNTS,
  GET_ACCOUNT_TRANSACTIONS,
  MODAL_CLOSE,
} from '@Actions/types';

export const getAccounts = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axiosInstance.get('user/accounts');

    if (response.status === 200) {
      const { accounts } = response.data;
      dispatch({
        type: GET_USER_ACCOUNTS,
        payload: accounts,
      });
    }
    return dispatch({
      type: NOT_LOADING,
    });
  } catch (err) {
    const { error } = err.response.data;
    toast.dismiss();
    toast.info(`${error}! Click the '+' sign below to create a new account`, { autoClose: 10000 });
    return dispatch({
      type: NOT_LOADING,
    });
  }
};

export const getAccountTransactions = accountNumber => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axiosInstance.get(`accounts/${accountNumber}/transactions`);

    if (response.status === 200) {
      const { data } = response.data;
      dispatch({
        type: GET_ACCOUNT_TRANSACTIONS,
        payload: data,
      });
      return dispatch({
        type: NOT_LOADING,
      });
    }
  } catch (err) {
    const { error } = err.response.data;
    toast.dismiss();
    toast.error(error, { autoClose: 10000 });
    return dispatch({
      type: NOT_LOADING,
    });
  }
};

export const createAccount = accountDetails => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const account = {
      type: accountDetails.accountType,
      initialDeposit: accountDetails.initialDeposit,
    };
    const response = await axiosInstance.post('accounts', account);
    if (response.status === 201) {
      toast.dismiss();
      toast.success('Account created successfully');
      dispatch(getAccounts());
      dispatch({
        type: MODAL_CLOSE,
        payload: 'createAccount',
      });
      dispatch({
        type: NOT_LOADING,
      });
    }
  } catch (err) {
    const { error } = err.response.data;
    toast.dismiss();
    toast.error(error, { autoClose: 10000 });
    return dispatch({
      type: NOT_LOADING,
    });
  }
};

export const getAllUsersAccounts = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axiosInstance.get('accounts');
    if (response.status === 200) {
      const { data } = response.data;
      dispatch({
        type: GET_ALL_USERS_ACCOUNTS,
        payload: data,
      });
    }

    dispatch({
      type: NOT_LOADING,
    });
  } catch (err) {
    const { error } = err.response.data;
    toast.dismiss();
    toast.error(error, { autoClose: 10000 });
    return dispatch({
      type: NOT_LOADING,
    });
  }
};

export const changeAccountStatus = account => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const status = account.status === 'active' ? 'dormant' : 'active';
    await axiosInstance.patch(`accounts/${account.accountNumber}`, { status });
    toast.dismiss();
    toast.success(`Account ${account.status === 'active' ? 'de' : ''}activated successfully`);
    dispatch({
      type: MODAL_CLOSE,
      payload: 'DialogueBox',
    });

    dispatch(getAllUsersAccounts());
  } catch (err) {
    const { error } = err.response.data;
    toast.dismiss();
    toast.error(error, { autoClose: 10000 });
    return dispatch({
      type: NOT_LOADING,
    });
  }
};

export const deleteAccount = accountNumber => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    await axiosInstance.delete(`accounts/${accountNumber}`);
    toast.dismiss();
    toast.success('Account deleted successfully');
    dispatch({
      type: MODAL_CLOSE,
      payload: 'DialogueBox',
    });

    dispatch(getAllUsersAccounts());
  } catch (err) {
    const { error } = err.response.data;
    toast.dismiss();
    toast.error(error, { autoClose: 10000 });
    return dispatch({
      type: NOT_LOADING,
    });
  }
};

export const transaction = transactionDetails => async (dispatch) => {
  const { accountNumber, transactionType, amount } = transactionDetails;
  dispatch({
    type: LOADING,
  });

  try {
    await axiosInstance.post(`transactions/${accountNumber}/${transactionType}`, { amount });
    toast.dismiss();
    toast.success('Transaction successful');
    dispatch({
      type: MODAL_CLOSE,
      payload: 'newTransaction',
    });

    dispatch(getAllUsersAccounts());
  } catch (err) {
    const { error } = err.response.data;
    toast.dismiss();
    toast.error(error, { autoClose: 10000 });
    return dispatch({
      type: NOT_LOADING,
    });
  }
};
