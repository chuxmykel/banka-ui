import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from '@Common/PrivateRoutes/PrivateRoutes';
import AdminRoutes from '@Common/AdminRoutes/AdminRoutes';
import UserDashboard from '@Dashboard/UserDashboard/UserDashboard';
import AdminDashboard from '@Dashboard/AdminDashboard/AdminDashboard';
import LandingPage from '@Pages/LandingPage/LandingPage';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './app.css';

const App = (props) => {
  const { modalOpen } = props;
  document.querySelector('body').style.overflow = modalOpen ? 'hidden' : null;
  return (
    <Router>
      <div>
        <ToastContainer />
        <Route exact path="/" component={LandingPage} />
        <Switch>
          <PrivateRoutes path="/dashboard" component={UserDashboard} />
          <AdminRoutes path="/admin-dashboard" component={AdminDashboard} />
        </Switch>
      </div>
    </Router>
  );
};

App.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  modalOpen: state.ui.modalOpen,
});

export default connect(mapStateToProps)(App);
