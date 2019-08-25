import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import validate from '@Utilities/validate';
import Modal from '@Common/Modal/Modal';
import FormInput from '@Components/Forms/FormInput/FormInput';
import Button from '@Common/Button/Button';
import { openModal, closeModal } from '@Actions/uiActions';
import { logIn } from '@Actions/authActions';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
      email,
      password,
      errors,
    } = this.state;
    const { signIn, history } = this.props;
    const formIsValid = this.validateForm();

    if (!formIsValid) {
      return this.setFormValidity(errors);
    }

    signIn({
      email,
      password,
    }, history);
  }

  closeModal = () => {
    const { close } = this.props;
    this.setState({
      email: '',
      password: '',
      isFormValid: true,
      errors: {},
    });
    return close('signin');
  }

  validateForm = () => {
    const {
      email,
      password,
      errors,
    } = this.state;

    errors.email = validate('email', email).email;
    errors.password = validate('password', password).password;

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

  switchForms = () => {
    const { signUp } = this.props;
    this.closeModal();
    signUp();
  }

  render() {
    const {
      email,
      password,
      isFormValid,
      errors,
    } = this.state;

    const {
      open,
      authenticating,
      authenticated,
    } = this.props;

    const loader = <Loader type="ThreeDots" color="#888888" height={50} width={100} />;
    return (
      <Modal close={this.closeModal} open={open}>
        <div className="signup">
          <h3 className="form-header">Sign in</h3>
          <form>
            <FormInput
              name="email"
              value={email}
              type="email"
              handleChange={this.handleChange}
              placeholder="john.doe@foo.bar"
              title="Email"
              error={errors.email}
            />
            <FormInput
              name="password"
              value={password}
              type="password"
              handleChange={this.handleChange}
              placeholder="**********"
              title="Password"
              error={errors.password}
            />
            <Button
              type="submit"
              className="submit-btn"
              text={authenticating ? loader : 'SIGN IN'}
              handleClick={this.handleSubmit}
              disabled={authenticating || authenticated ? true : !isFormValid}
            />
          </form>
        </div>
        <span className="reminder">
          Don&apos;t have an account?
          {' '}
          <button type="button" onClick={this.switchForms}>
            Sign up
          </button>
        </span>
      </Modal>
    );
  }
}

SignIn.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  authenticating: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  signUp: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  open: state.ui.modal === 'signin' ? state.ui.modalOpen : false,
  authenticating: state.auth.authenticating,
  authenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  close: modal => dispatch(closeModal(modal)),
  signUp: () => dispatch(openModal('signup')),
  signIn: (data, history) => dispatch(logIn(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
