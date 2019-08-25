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
    children,
  } = props;

  if (type === 'select') {
    return (
      <Fragment>
        <div className="input-div">
          <div className="title-div">{title}</div>
          <select
            name={name}
            value={value}
            onChange={handleChange}
          >
            {children}
          </select>
        </div>
      </Fragment>
    );
  }

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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

FormInput.defaultProps = {
  error: '',
  placeholder: '',
  children: null,
};

export default FormInput;
