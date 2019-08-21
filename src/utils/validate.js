/* eslint-disable no-nested-ternary */
import {
  isEmpty,
  isAlpha,
  isEmail,
  isLength,
} from 'validator';

const errors = {};

const validate = (name, value) => {
  switch (name) {
    case 'firstName':
      errors[name] = isEmpty(value)
        ? 'First name is required' : isAlpha(value)
          ? '' : 'First name can only contain letters';
      break;
    case 'lastName':
      errors[name] = isEmpty(value)
        ? 'Last name is required' : isAlpha(value)
          ? '' : 'Last name can only contain letters';
      break;
    case 'email':
      errors[name] = isEmpty(value)
        ? 'email is required' : isEmail(value)
          ? '' : 'Please provide a valid email address';
      break;
    case 'password':
      errors[name] = isEmpty(value)
        ? 'password is required' : isLength(value, { min: 8 })
          ? '' : 'Provide a minimum of 8 characters for password';
      break;
    case 'initialDeposit':
      errors[name] = isEmpty(value)
        ? 'please provide a value' : value < 5000
          ? 'initial deposit must be NGN 5000 or greater' : '';
      break;
    case 'accountNumber':
      errors[name] = isEmpty(value)
        ? 'Account number is required' : value.charAt(0) === '0'
          ? 'Account numbers can\'t start with a 0' : value.length === 10
            ? '' : 'Account number must be a 10 digit number';
      break;
    case 'amount':
      errors[name] = isEmpty(value)
        ? 'please provide a value' : value < 500
          ? 'amount must be NGN 500 or greater' : '';
      break;
    default:
      break;
  }
  return errors;
};

export default validate;
