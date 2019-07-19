import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserDashboard from '@Pages/Dashboard/UserDashboard/UserDashboard';
import LandingPage from '@Pages/LandingPage/LandingPage';
import './app.css';

const App = (props) => {
  const { modalOpen } = props;
  document.querySelector('body').style.overflow = modalOpen ? 'hidden' : null;
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={UserDashboard} />
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
