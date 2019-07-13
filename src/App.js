import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LandingPage from '@Pages/LandingPage/LandingPage';
import './app.css';

const App = (props) => {
  const { modalOpen } = props;
  document.querySelector('body').style.overflow = modalOpen ? 'hidden' : null;
  return (
    <div>
      <LandingPage />
    </div>
  );
};

App.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  modalOpen: state.ui.modalOpen,
});

export default connect(mapStateToProps)(App);
