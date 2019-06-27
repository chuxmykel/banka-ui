import React from 'react';
import PropTypes from 'prop-types';
import randomColor from '../utils/randomColor';

const Button = (props) => {
  const { handleClick, symbol } = props;
  return (
    <button
      type="button"
      onClick={handleClick}
      style={randomColor()}
    >
      {symbol}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Button;
