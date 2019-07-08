import React from 'react';
import PropTypes from 'prop-types';

const FooterGroup = (props) => {
  const { title, item: { a, b, c } } = props;

  return (
    <div>
      <h4>{ title }</h4>
      <ul>
        <li>{ a }</li>
        <li>{ b }</li>
        <li>{ c }</li>
      </ul>
    </div>
  );
};

FooterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};

export default FooterGroup;
