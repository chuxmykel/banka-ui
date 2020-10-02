import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const PrivateRoutes = ({ component: Component, auth, ...rest }) => {
  const {
    isAuthenticated,
    user: { type },
  } = auth;
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated && type === 'client' ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      ))
      }
    />
  );
};

PrivateRoutes.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoutes);
