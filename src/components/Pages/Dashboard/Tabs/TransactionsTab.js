import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tab from '@Dashboard/Common/Tab/Tab';

class TransactionTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }

  componentDidUpdate = (prevProps) => {
    const { active } = this.props;
    if (prevProps.active !== active) {
      this.setState({
        active,
      });
    }
  }

  render = () => {
    const { active } = this.state;
    return (
      <Tab active={active}>
        <div className="name-card">
          transactions
        </div>
      </Tab>
    );
  }
}

TransactionTab.propTypes = {
  active: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(TransactionTab);
