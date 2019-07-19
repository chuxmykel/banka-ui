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
        ? 'First name cannot be empty' : isAlpha(value)
          ? '' : 'First name can only contain letters';
      break;
    case 'lastName':
      errors[name] = isEmpty(value)
        ? 'Last name cannot be empty' : isAlpha(value)
          ? '' : 'Last name can only contain letters';
      break;
    case 'email':
      errors[name] = isEmpty(value)
        ? 'email cannot be empty' : isEmail(value)
          ? '' : 'Please provide a valid email address';
      break;
    case 'password':
      errors[name] = isEmpty(value)
        ? 'password cannot be empty' : isLength(value, { min: 8 })
          ? '' : 'Provide a minimum of 8 characters for password';
      break;
    default:
      break;
  }
  // console.table(errors);
  return errors;
};

export default validate;
