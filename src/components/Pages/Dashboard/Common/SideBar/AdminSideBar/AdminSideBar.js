import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logOut } from '@Actions/authActions';
import SideBarMenuItem from '@Dashboard/Common/SideBarMenuItem/SideBarMenuItem';
import ProfileImage from '@Images/profile-img.jpeg';
import '../SideBar.css';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: true,
      allAccount: false,
    };
  }

  handleClick = (name) => {
    const { handleClick: selectTab } = this.props;
    if (name === 'logout') return null;
    this.setState({
      profile: false,
      allAccount: false,
      [name]: true,
    });
    selectTab(name);
  }

  signOut = () => {
    const { logOut: quit, history } = this.props;
    return quit(history);
  }

  render = () => {
    const { name } = this.props;
    const { profile, allAccount } = this.state;

    return (
      <div className="sidebar">
        <div className="mini-profile">
          <div className="profile-image">
            <img src={ProfileImage} alt="profile" />
          </div>
          <div className="profile-name">
            <p>{name}</p>
            <i className="fas fa-angle-down" />
          </div>
        </div>
        <div className="menu">
          <SideBarMenuItem
            handleClick={this.handleClick}
            icon="fas fa-user-alt"
            text="profile"
            name="profile"
            active={profile}
          />
          {/* <SideBarMenuItem icon="far fa-money-bill-alt" text="transactions" /> */}
          <SideBarMenuItem
            handleClick={this.handleClick}
            icon="fas fa-wallet"
            text="bank accounts"
            name="allAccount"
            active={allAccount}
          />
        </div>
        <div className="log-out">
          <SideBarMenuItem
            handleClick={this.signOut}
            icon="fas fa-power-off"
            text="log out"
            name="logout"
            special
          />
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logOut: history => dispatch(logOut(history)),
});

export default connect(null, mapDispatchToProps)(withRouter(SideBar));
