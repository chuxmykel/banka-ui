import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AdminRoutes = ({ component: Component, auth, ...rest }) => {
  const {
    isAuthenticated,
    user: { type },
  } = auth;
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated && type === 'staff' ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      ))
      }
    />
  );
};

AdminRoutes.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AdminRoutes);
