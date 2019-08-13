import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const {
    type,
    handleClick,
    className,
    text,
    disabled,
  } = props;

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      onClick={handleClick}
      className={className}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
