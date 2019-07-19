import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { setAuthToken } from '@Utilities/axios';
import { setCurrentUser } from '@Actions/authActions';
import store from '@App/store';
import App from '@App/App';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwtDecode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
