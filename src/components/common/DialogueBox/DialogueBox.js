import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '@Common/Modal/Modal';
import Button from '@Common/Button/Button';
import { closeModal } from '@Actions/uiActions';
import './DialogueBox.css';

export const DialogueBox = (props) => {
  const {
    open,
    close,
    children,
    agree,
    agreeText,
    activeDialogue,
    loading,
  } = props;

  return (
    <Modal close={() => close('DialogueBox')} open={open && activeDialogue}>
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
            handleClick={() => close('DialogueBox')}
            className="cancel"
            disabled={loading}
            text="cancel"
          />
        </div>
      </div>
    </Modal>
  );
};

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
