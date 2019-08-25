import chai from 'chai';
import { initialState, accountReducer } from '@Reducers/accountReducer';
import {
  GET_USER_ACCOUNTS,
  GET_ACCOUNT_TRANSACTIONS,
} from '@Actions/types';

const { expect } = chai;
chai.should();

describe('Account Reducers tests', () => {
  it('should set user accounts successfully', () => {
    const accounts = [
      {
        id: 1,
        accountNumber: 1516239022,
      },
      {
        id: 2,
        accountNumber: 3446459835,
      },
    ];
    const state = accountReducer(initialState, {
      type: GET_USER_ACCOUNTS,
      payload: accounts,
    });
    expect(state.accounts).to.be.a('array');
    expect(state.accounts).to.equal(accounts);
  });

  it('should set the transactions for an account successfully', () => {
    const transactions = [
      {
        id: 1,
        accountNumber: 1516239022,
        amount: 50000,
      },
      {
        id: 2,
        accountNumber: 1516239022,
        amount: 25000,
      },
    ];
    const state = accountReducer(initialState, {
      type: GET_ACCOUNT_TRANSACTIONS,
      payload: transactions,
    });
    expect(state.transactions).to.be.a('array');
    expect(state.transactions).to.equal(transactions);
  });

  it('should return default state', () => {
    const state = accountReducer(initialState, {
      type: 'RANDOM_TYPE',
    });
    state.should.equal(initialState);
  });
});
