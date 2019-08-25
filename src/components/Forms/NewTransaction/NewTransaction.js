import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import validate from '@Utilities/validate';
import Modal from '@Common/Modal/Modal';
import FormInput from '@Components/Forms/FormInput/FormInput';
import Button from '@Common/Button/Button';
import { closeModal } from '@Actions/uiActions';
import { transaction } from '@Actions/accountActions';

export class NewTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionType: 'credit',
      accountNumber: '',
      amount: 0,
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
      transactionType,
      accountNumber,
      amount,
      errors,
    } = this.state;
    const { transact } = this.props;
    const formIsValid = this.validateForm();

    if (!formIsValid) {
      return this.setFormValidity(errors);
    }

    transact({ transactionType, accountNumber, amount });
  }

  closeModal = () => {
    const { close } = this.props;
    this.setState({
      transactionType: 'credit',
      accountNumber: '',
      amount: 0,
      isFormValid: true,
      errors: {},
    });
    return close('newTransaction');
  }

  validateForm = () => {
    const {
      accountNumber,
      amount,
      errors,
    } = this.state;

    errors.accountNumber = validate('accountNumber', accountNumber).accountNumber;
    errors.amount = validate('amount', `${amount}`).amount;

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
      transactionType,
      accountNumber,
      amount,
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
          <h3 className="form-header">New Transaction</h3>
          <FormInput
            name="transactionType"
            value={transactionType}
            type="select"
            handleChange={this.handleChange}
            title="Type"
            error={errors.transactionType}
          >
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </FormInput>
          <form>
            <FormInput
              name="accountNumber"
              value={accountNumber}
              type="text"
              handleChange={this.handleChange}
              title="Acc. Number"
              error={errors.accountNumber}
            />
            <FormInput
              name="amount"
              value={amount}
              type="number"
              handleChange={this.handleChange}
              title="Amount"
              error={errors.amount}
            />
            <Button
              type="submit"
              className="submit-btn"
              text={loading ? loader : 'CONFIRM TRANSACTION'}
              handleClick={this.handleSubmit}
              disabled={loading || !isFormValid}
            />
          </form>
        </div>
      </Modal>
    );
  }
}

NewTransaction.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  transact: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  open: state.ui.modal === 'newTransaction' ? state.ui.modalOpen : false,
  loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  close: modal => dispatch(closeModal(modal)),
  transact: data => dispatch(transaction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction);
