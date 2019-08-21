import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import axiosInstance, { setAuthToken } from '@Utilities/axios';
import {
  AUTHENTICATING,
  SET_CURRENT_USER,
  NOT_AUTHENTICATING,
  MODAL_CLOSE,
} from '@Actions/types';

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const signUp = (userData, history) => async (dispatch) => {
  dispatch({
    type: AUTHENTICATING,
  });
  try {
    const response = await axiosInstance.post('auth/signup', userData);
    if (response.status === 201) {
      const { data } = response.data;
      localStorage.setItem('jwtToken', data[0].token);
      setAuthToken(data[0].token);
      dispatch(setCurrentUser(jwtDecode(data[0].token)));
      history.push('/dashboard');
    }
    dispatch({
      type: MODAL_CLOSE,
      payload: 'signup',
    });
    toast.dismiss();
    toast.success('Registration successful');
  } catch (err) {
    const { error } = err.response.data;
    toast.dismiss();
    toast.error(error, { autoClose: 10000 });
    return dispatch({
      type: NOT_AUTHENTICATING,
    });
  }
};

export const logIn = (userData, history) => async (dispatch) => {
  dispatch({
    type: AUTHENTICATING,
  });
  try {
    const response = await axiosInstance.post('auth/signin', userData);
    if (response.status === 200) {
      const { data } = response.data;
      const { type } = data[0];
      const pushLocation = type === 'client' ? '/dashboard' : '/admin-dashboard';
      localStorage.setItem('jwtToken', data[0].token);
      setAuthToken(data[0].token);
      dispatch(setCurrentUser(jwtDecode(data[0].token)));
      history.push(pushLocation);
      toast.dismiss();
      toast.success(`Welcome back ${data[0].firstName.toLocaleLowerCase()}`);
    }
    dispatch({
      type: MODAL_CLOSE,
      payload: 'signin',
    });
  } catch (err) {
    const { error } = err.response.data;
    toast.dismiss();
    toast.error(error, { autoClose: 10000 });
    return dispatch({
      type: NOT_AUTHENTICATING,
    });
  }
};

export const logOut = history => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push('/');
};
