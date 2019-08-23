import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import validate from '@Utilities/validate';
import Modal from '@Common/Modal/Modal';
import FormInput from '@Components/Forms/FormInput/FormInput';
import Button from '@Common/Button/Button';
import { closeModal } from '@Actions/uiActions';
import { createAccount } from '@Actions/accountActions';

export class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountType: 'savings',
      initialDeposit: 5000,
      isFormValid: true,
      errors: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const errors = validate(name, value);
    this.setFormValidity(errors);
    this.setState({
      errors,
      [name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      accountType,
      initialDeposit,
      errors,
    } = this.state;
    const { create } = this.props;
    const formIsValid = this.validateForm();

    if (!formIsValid) {
      return this.setFormValidity(errors);
    }

    create({ accountType, initialDeposit });
  }

  closeModal = () => {
    const { close } = this.props;
    this.setState({
      accountType: 'savings',
      initialDeposit: 5000,
      isFormValid: true,
      errors: {},
    });
    return close('createAccount');
  }

  validateForm = () => {
    const {
      initialDeposit,
      errors,
    } = this.state;

    errors.initialDeposit = validate('initialDeposit', `${initialDeposit}`).initialDeposit;

    this.setState({ errors });
    return this.setFormValidity(errors);
  }


  setFormValidity = (errors) => {
    let valid = true;

    Object.values(errors).forEach((value) => {
      if (value.length > 0) {
        valid = false;
      }
    });

    this.setState({ isFormValid: valid });

    return valid;
  }

  render() {
    const {
      accountType,
      initialDeposit,
      isFormValid,
      errors,
    } = this.state;

    const {
      open,
      loading,
    } = this.props;

    const loader = <Loader type="ThreeDots" color="#888888" height={50} width={100} />;
    return (
      <Modal close={this.closeModal} open={open}>
        <div className="signup">
          <h3 className="form-header">Create Account</h3>
          <form>
            <FormInput
              name="accountType"
              value={accountType}
              type="select"
              handleChange={this.handleChange}
              title="Type"
              error={errors.accountType}
            >
              <option value="savings">Savings</option>
              <option value="current">Current</option>
              <option value="loan">Loan</option>
            </FormInput>
            <FormInput
              name="initialDeposit"
              value={initialDeposit}
              type="number"
              handleChange={this.handleChange}
              title="Initial Deposit"
              error={errors.initialDeposit}
            />
            <Button
              type="submit"
              className="submit-btn"
              text={loading ? loader : 'CREATE ACCOUNT'}
              handleClick={this.handleSubmit}
              disabled={loading || !isFormValid}
            />
          </form>
        </div>
      </Modal>
    );
  }
}

CreateAccount.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  open: state.ui.modal === 'createAccount' ? state.ui.modalOpen : false,
  loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  close: modal => dispatch(closeModal(modal)),
  create: data => dispatch(createAccount(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
