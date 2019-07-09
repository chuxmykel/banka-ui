import React from 'react';
import PropTypes from 'prop-types';

const TitledText = (props) => {
  const {
    title,
    text,
    cta,
  } = props;

  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button type="button">{cta}</button>
    </div>
  );
};

TitledText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
};

export default TitledText;
