import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideBar from '@App/components/Pages/Dashboard/Common/SideBar/AdminSideBar/AdminSideBar';
import ProfileTab from '@Dashboard/Tabs/ProfileTab';
import AllAccountsTab from '@App/components/Pages/Dashboard/Tabs/AllAccountsTab';
import './AdminDashboard.css';

export class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: true,
      allAccount: false,
    };
  }

  handleClick = (name) => {
    this.setState({
      profile: false,
      allAccount: false,
      [name]: true,
    });
  }

  render = () => {
    const { user: { firstName, lastName } } = this.props;
    const { profile, allAccount } = this.state;
    return (
      <div className="user-dashboard">
        <SideBar handleClick={this.handleClick} name={`${firstName} ${lastName}`} />
        <ProfileTab active={profile} />
        <AllAccountsTab active={allAccount} />
      </div>
    );
  };
}

AdminDashboard.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});


export default connect(mapStateToProps, null)(AdminDashboard);
