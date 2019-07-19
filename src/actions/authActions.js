import jwtDecode from 'jwt-decode';
import axiosInstance, { setAuthToken } from '@Utilities/axios';
import {
  AUTHENTICATING,
  SET_CURRENT_USER,
  SERVER_AUTH_ERROR,
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
  } catch (err) {
    const { error } = err.response.data;
    return dispatch({
      type: SERVER_AUTH_ERROR,
      payload: error,
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
      localStorage.setItem('jwtToken', data[0].token);
      setAuthToken(data[0].token);
      dispatch(setCurrentUser(jwtDecode(data[0].token)));
      history.push('/dashboard');
    }
  } catch (err) {
    const { error } = err.response.data;
    return dispatch({
      type: SERVER_AUTH_ERROR,
      payload: error,
    });
  }
};

export const logOut = '';
