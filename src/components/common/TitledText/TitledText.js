import React from 'react';
import PropTypes from 'prop-types';

const TitledText = (props) => {
  const {
    title,
    text,
    cta,
    open,
  } = props;

  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button onClick={open} type="button">{cta}</button>
    </div>
  );
};

TitledText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  open: PropTypes.func,
};

TitledText.defaultProps = {
  open: null,
};

export default TitledText;
