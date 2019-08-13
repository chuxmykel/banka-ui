import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideBar from '@Dashboard/Common/SideBar/SideBar';
import ProfileTab from '@Dashboard/Tabs/ProfileTab';
import AccountTab from '@App/components/Pages/Dashboard/Tabs/AccountsTab';
import './UserDashboard.css';

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: true,
      account: false,
    };
  }

  handleClick = (name) => {
    this.setState({
      profile: false,
      account: false,
      [name]: true,
    });
  }

  render = () => {
    const { user: { firstName, lastName } } = this.props;
    const { profile, account } = this.state;
    return (
      <div className="user-dashboard">
        <SideBar handleClick={this.handleClick} name={`${firstName} ${lastName}`} />
        <ProfileTab active={profile} />
        <AccountTab active={account} />
      </div>
    );
  };
}

UserDashboard.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});


export default connect(mapStateToProps, null)(UserDashboard);
