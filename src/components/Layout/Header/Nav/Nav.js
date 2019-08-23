import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openModal } from '@Actions/uiActions';
import './Nav.css';

export const Nav = (props) => {
  const { open } = props;
  return (
    <nav>
      <ul>
        <li><button type="button" onClick={() => open('signin')}>Log in</button></li>
        <div className="important">
          <li><button type="button" onClick={() => open('signup')}>Sign up</button></li>
        </div>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  open: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  open: modal => dispatch(openModal(modal)),
});

export default connect(null, mapDispatchToProps)(Nav);
