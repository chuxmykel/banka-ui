import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

const Tab = (props) => {
  const { children, active } = props;
  return (
    <div className={active ? 'current-tab' : 'tab'}>
      {children}
    </div>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Tab;
