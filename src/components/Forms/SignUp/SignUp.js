import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import validate from '@Utilities/validate';
import Modal from '@Common/Modal/Modal';
import FormInput from '@Components/Forms/FormInput/FormInput';
import Button from '@Common/Button/Button';
import { closeModal } from '@Actions/uiActions';
import { signUp } from '@Actions/authActions';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isFormValid: true,
      errors: {},
    };
  }

  componentDidUpdate(prevProps) {
    const { errors } = this.state;
    const { error } = this.props;
    if (prevProps.error !== error) {
      errors.email = error;
      this.setFormValidity(errors);
      this.setState({
        errors,
      });
    }
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
      firstName,
      lastName,
      email,
      password,
      errors,
    } = this.state;
    const { register, history } = this.props;
    const formIsValid = this.validateForm();

    if (!formIsValid) {
      return this.setFormValidity(errors);
    }

    register({
      firstName,
      lastName,
      email,
      password,
    }, history);
  }

  closeModal = () => {
    const { close } = this.props;
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isFormValid: true,
      errors: {},
    });
    return close('signup');
  }

  validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      errors,
    } = this.state;

    errors.firstName = validate('firstName', firstName).firstName;
    errors.lastName = validate('lastName', lastName).lastName;
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

  render() {
    const {
      firstName,
      lastName,
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

    return (
      <Modal close={this.closeModal} open={open}>
        <div className="signup">
          <h3 className="form-header">Sign up</h3>
          <form>
            <FormInput
              name="firstName"
              value={firstName}
              type="text"
              handleChange={this.handleChange}
              placeholder="Enter your first name..."
              title="First Name"
              error={errors.firstName}
            />
            <FormInput
              name="lastName"
              value={lastName}
              type="text"
              handleChange={this.handleChange}
              placeholder="Enter your last name..."
              title="Last Name"
              error={errors.lastName}
            />
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
              text={authenticating ? (
                <Loader
                  type="ThreeDots"
                  color="#888888"
                  height={50}
                  width={100}
                />
              ) : 'SIGN UP'}
              handleClick={this.handleSubmit}
              disabled={authenticating || authenticated ? true : !isFormValid}
            />
          </form>
        </div>
        <span className="reminder">Have an account? Log in</span>
      </Modal>
    );
  }
}

SignUp.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  authenticating: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  open: state.ui.modal === 'signup' ? state.ui.modalOpen : false,
  authenticating: state.auth.authenticating,
  authenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  close: modal => dispatch(closeModal(modal)),
  register: (data, history) => dispatch(signUp(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
