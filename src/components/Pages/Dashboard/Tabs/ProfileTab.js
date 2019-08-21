import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tab from '@Dashboard/Common/Tab/Tab';

class ProfileTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }

  componentDidUpdate(prevProps) {
    const { active } = this.props;
    if (prevProps.active !== active) {
      this.setState({
        active,
      });
    }
  }

  render = () => {
    const {
      user: {
        firstName,
        lastName,
        email,
        type,
        isAdmin,
      },
    } = this.props;
    const { active } = this.state;
    const role = isAdmin ? 'Admin' : 'Cashier';
    return (
      <Tab active={active}>
        <div className="profile-tab">
          <div className="name-card">
            {`${firstName} ${lastName}`}
          </div>
          <div className="profile-details">
            <table>
              <tbody>
                <tr>
                  <th>{type !== 'client' ? 'ROLE' : 'BVN'}</th>
                  <td>{type !== 'client' ? role : '*******************'}</td>
                </tr>
                <tr>
                  <th>EMAIL</th>
                  <td>{email}</td>
                </tr>
                <tr>
                  <th>PHONE</th>
                  <td>+234(0)7060854773</td>
                </tr>
                <tr>
                  <th>ADDRESS</th>
                  <td>No. 32, Australopitecus Avenue, CIPE tower.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Tab>
    );
  };
}

ProfileTab.propTypes = {
  user: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(ProfileTab);
