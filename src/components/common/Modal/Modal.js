import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from '@Actions/uiActions';
import './Modal.css';

class Modal extends Component {
  render = () => {
    const { open, close } = this.props;
    return (
      <div className="modal-overlay" style={{ display: open ? 'flex' : 'none' }}>
        <div className="modal">
          <button type="button" className="close" onClick={close}>X</button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  open: state.ui.modalOpen,
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
