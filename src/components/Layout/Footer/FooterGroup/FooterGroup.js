import React from 'react';
import PropTypes from 'prop-types';

const FooterGroup = (props) => {
  const { title, item } = props;

  return (
    <div>
      <h4>{ title }</h4>
      <ul>
        {item.map((listItem, index) => <li key={index}>{listItem}</li>)}
      </ul>
    </div>
  );
};

FooterGroup.propTypes = {
  title: PropTypes.string.isRequired,
  item: PropTypes.array.isRequired,
};

export default FooterGroup;
