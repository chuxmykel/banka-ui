/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Tab from '@Dashboard/Common/Tab/Tab';
import DialogueBox from '@Common/DialogueBox/DialogueBox';
import NewTransaction from '@Components/Forms/NewTransaction/NewTransaction';
import {
  getAllUsersAccounts,
  changeAccountStatus,
  deleteAccount,
} from '@Actions/accountActions';
import { openModal } from '@Actions/uiActions';

class AllAccountsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      activeDialogue: '',
      dialogueMessage: '',
      dialogueData: {},
    };
  }

  componentDidUpdate = (prevProps) => {
    const { active, getUserAccounts } = this.props;
    if (prevProps.active !== active) {
      if (active === true) getUserAccounts();
      this.setState({
        active,
      });
    }
  }

  handleChange = (account) => {
    const { open } = this.props;
    open('DialogueBox');
    this.setState({
      activeDialogue: 'edit',
      dialogueMessage: `Are you sure you want to
      ${account.status === 'active' ? 'deactivate' : 'activate'}
      this account? It can be undone later by toggling the switch`,
      dialogueData: account,
    });
  }

  handleClick = (accNumber) => {
    const { open } = this.props;
    open('DialogueBox');
    this.setState({
      activeDialogue: 'delete',
      dialogueMessage: 'Are you sure you want to delete this account?',
      dialogueData: accNumber,
    });
  }

  render = () => {
    const {
      active,
      activeDialogue,
      dialogueMessage,
      dialogueData,
    } = this.state;
    const {
      accounts,
      editAccount,
      deleteAcct,
      loading,
      open,
      cashier,
    } = this.props;

    const loader = <Loader type="ThreeDots" color="#888888" height={50} width={100} />;
    const accountData = accounts.map(account => (
      <tr key={account.id}>
        <td>{`${account.firstName} ${account.lastName.charAt(0)}.`}</td>
        <td>{account.accountNumber}</td>
        <td>{account.type}</td>
        <td className={`${account.status}-acct`}>{account.status}</td>
        <td>
          <label className="switch">
            <input checked={account.status === 'active'} type="checkbox" onChange={() => this.handleChange(account)} />
            <span className="slider round" />
          </label>
        </td>
        <td>{account.balance}</td>
        <td>
          <button
            type="button"
            className="delete-btn"
            onClick={() => this.handleClick(account.accountNumber)}
          >
            delete
          </button>
        </td>
      </tr>
    ));

    return (
      <Tab active={active}>
        <div className="account-tab">
          <div className="name-card">
            all user&apos;s accounts
          </div>
          <div className="account-details admin-acct-details">
            <table>
              <thead>
                <tr>
                  <th>Owner</th>
                  <th>Acct. Number</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th />
                  <th>Balance (₦)</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {accountData}
              </tbody>
            </table>
          </div>
        </div>
        <DialogueBox
          agreeText={dialogueData.status === 'active' ? 'deactivate' : 'activate'}
          activeDialogue={activeDialogue === 'edit'}
          agree={() => editAccount(dialogueData)}
        >
          {loading ? loader : (<p>{dialogueMessage}</p>)}
        </DialogueBox>
        <DialogueBox
          agreeText="delete"
          activeDialogue={activeDialogue === 'delete'}
          agree={() => deleteAcct(dialogueData)}
        >
          {loading ? loader : (<p>{dialogueMessage}</p>)}
        </DialogueBox>
        {cashier && (
          <div>
            <button
              onClick={() => open('newTransaction')}
              className="create"
              type="button"
            >
              +
            </button>
          </div>
        )}
        <NewTransaction />
      </Tab>
    );
  }
}

AllAccountsTab.propTypes = {
  active: PropTypes.bool.isRequired,
  getUserAccounts: PropTypes.func.isRequired,
  editAccount: PropTypes.func.isRequired,
  deleteAcct: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
  open: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  cashier: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  accounts: state.accounts.accounts,
  loading: state.ui.loading,
  cashier: state.auth.user.type === 'staff' && state.auth.user.isAdmin === false,
});

const mapDispatchToProps = dispatch => ({
  open: modal => dispatch(openModal(modal)),
  getUserAccounts: () => dispatch(getAllUsersAccounts()),
  editAccount: account => dispatch(changeAccountStatus(account)),
  deleteAcct: accountNumber => dispatch(deleteAccount(accountNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllAccountsTab);
