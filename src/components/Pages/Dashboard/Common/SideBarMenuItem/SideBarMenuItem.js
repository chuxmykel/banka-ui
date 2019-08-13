import React from 'react';
import PropTypes from 'prop-types';
import './SideBarMenuItem.css';

const SideBarMenuItem = (props) => {
  const {
    icon,
    text,
    name,
    handleClick,
    active,
    special,
  } = props;
  return (
    <div
      onClick={() => handleClick(name)}
      onKeyPress={() => null}
      role="button"
      tabIndex="0"
      className={`sidebar-menu-item${special ? ' special' : ''}`}
    >
      <div className={active ? 'active' : 'inactive'} />
      <div name={name} className="menu-item-content">
        <i className={icon} />
        <p>{text}</p>
      </div>
    </div>
  );
};

SideBarMenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  special: PropTypes.bool,
};

SideBarMenuItem.defaultProps = {
  active: false,
  special: false,
};

export default SideBarMenuItem;
