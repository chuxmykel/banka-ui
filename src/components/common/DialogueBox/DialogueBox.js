import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '@Common/Modal/Modal';
import Button from '@Common/Button/Button';
import { closeModal } from '@Actions/uiActions';
import './DialogueBox.css';

class DialogueBox extends Component {
  closeModal = () => {
    const { close } = this.props;
    return close('DialogueBox');
  }

  render() {
    const {
      open,
      children,
      agree,
      agreeText,
      activeDialogue,
      loading,
    } = this.props;

    return (
      <Modal close={this.closeModal} open={open && activeDialogue}>
        <div className="dialogue-box">
          <div className="dialogue">
            {children}
          </div>
          <div className="dialogue-controls">
            <Button
              type="button"
              handleClick={agree}
              className="agree"
              disabled={loading}
              text={agreeText}
            />
            <Button
              type="button"
              handleClick={this.closeModal}
              className="cancel"
              disabled={loading}
              text="cancel"
            />
          </div>
        </div>
      </Modal>
    );
  }
}

DialogueBox.propTypes = {
  open: PropTypes.bool.isRequired,
  activeDialogue: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  agree: PropTypes.func.isRequired,
  agreeText: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  open: state.ui.modal === 'DialogueBox' ? state.ui.modalOpen : false,
  loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  close: modal => dispatch(closeModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogueBox);
