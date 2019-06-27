import React from 'react';
import PropTypes from 'prop-types';
import randomColor from '../utils/randomColor';

const Display = (props) => {
  const { text } = props;
  return (
    <h1 style={randomColor()}>
      {text}
    </h1>
  );
};

Display.propTypes = {
  text: PropTypes.number.isRequired,
};

export default Display;
