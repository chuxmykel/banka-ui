import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import Tab from '@Dashboard/Common/Tab/Tab';
import { getAccounts, getAccountTransactions } from '@Actions/accountActions';
import { openModal } from '@Actions/uiActions';
import CreateAccount from '@Components/Forms/CreateAccount/CreateAccount';

class AccountTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      showTransactionPane: false,
    };
  }

  componentDidUpdate = (prevProps) => {
    const { active, getUserAccounts } = this.props;
    if (prevProps.active !== active) {
      if (active === true) getUserAccounts();
      this.setState({
        active,
        showTransactionPane: false,
      });
    }
  }

  render = () => {
    const { active, showTransactionPane } = this.state;
    const {
      accounts,
      getTransactions,
      transactions,
      open,
      loading,
    } = this.props;

    const loader = <Loader type="ThreeDots" color="#888888" height={50} width={100} />;
    const accountData = accounts.map(account => (
      <tr key={account.id}>
        <td>{account.type}</td>
        <td className={`${account.status}-acct`}>{account.status}</td>
        <td>{account.accountNumber}</td>
        <td>{`NGN ${account.balance}`}</td>
        <td>
          <button
            type="button"
            className="acct-btn"
            onClick={() => {
              this.setState({
                showTransactionPane: true,
              });
              getTransactions(account.accountNumber);
            }}
          >
            Transactions
          </button>
        </td>
      </tr>
    ));

    const mapTransactions = (trans) => {
      let data = [];
      if (trans === undefined) {
        data = [(
          <tr>
            <td colSpan="4">
              Selected account has no transactions.
              Visit one of our branches to carry out transactions.
            </td>
          </tr>
        )];
      } else {
        data = trans.map((transaction) => {
          const { type } = transaction;
          return (
            <tr key={transaction.id}>
              <td>
                <i
                  className={`fas fa-long-arrow-alt-${type === 'credit' ? 'up' : 'down'} ${type}`}
                />
              </td>
              <td>{`NGN ${transaction.amount}`}</td>
              <td>{`${moment(transaction.createdOn).format('L')}`}</td>
              <td>{`${moment(transaction.createdOn).format('LT')}`}</td>
            </tr>
          );
        });
      }
      return (
        <tbody>
          {data}
        </tbody>
      );
    };
    const transactionData = mapTransactions(transactions);
    return (
      <Tab active={active}>
        <div className="account-tab">
          <div className="name-card">
            accounts
          </div>
          <div className="account-details">
            <table>
              <thead>
                <tr>
                  <th>Account Type</th>
                  <th>Account Status</th>
                  <th>Account Number</th>
                  <th>Account Balance</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {accountData}
              </tbody>
            </table>
          </div>
          {loading ? loader : (
            <div
              className={
                `account-details transaction${showTransactionPane ? '' : ' hidden'}`
              }
            >
              <h2 className="transaction-header">Transactions</h2>
              <table>
                <thead>
                  <tr>
                    <th>
                      <i className="fas fa-long-arrow-alt-up credit" />
                      <i className="fas fa-long-arrow-alt-down debit" />
                    </th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                {transactionData}
              </table>
            </div>
          )}
        </div>
        <div>
          <button onClick={() => open('createAccount')} className="create" type="button">+</button>
        </div>
        <CreateAccount />
      </Tab>
    );
  }
}

AccountTab.propTypes = {
  active: PropTypes.bool.isRequired,
  getUserAccounts: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
  transactions: PropTypes.array,
  getTransactions: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

AccountTab.defaultProps = {
  transactions: undefined,
};

const mapStateToProps = state => ({
  accounts: state.accounts.accounts,
  transactions: state.accounts.transactions,
  loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  open: modal => dispatch(openModal(modal)),
  getUserAccounts: () => dispatch(getAccounts()),
  getTransactions: accNum => dispatch(getAccountTransactions(accNum)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountTab);
