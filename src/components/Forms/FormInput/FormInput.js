import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './FormInput.css';

const FormInput = (props) => {
  const {
    name,
    value,
    type,
    handleChange,
    placeholder,
    error,
    title,
  } = props;

  return (
    <Fragment>
      <div className={error ? 'error' : 'input-div'}>
        <div className="title-div">{title}</div>
        <input
          name={name}
          value={value}
          onChange={handleChange}
          type={type}
          placeholder={placeholder}
        />
      </div>
      <div className="error-div">
        {error && <div>{error}</div>}
      </div>
    </Fragment>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  title: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
  error: '',
};

export default FormInput;
