import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  getAccounts,
  getAccountTransactions,
  createAccount,
  getAllUsersAccounts,
  changeAccountStatus,
  deleteAccount,
  transaction,
} from '@Actions/accountActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const url = 'https://a-bank.herokuapp.com/api/v1';

describe('Account action tests', () => {
  describe('Account Action tests return values', () => {
    const payload = {
      accountType: 'savings',
      initialDeposit: 50000,
    };

    const accountNumber = '1234567890';

    it('getAccounts should return expected values', () => {
      expect(getAccounts()).toMatchSnapshot();
    });

    it('getAccountTransactions should return expected values', () => {
      expect(getAccountTransactions(accountNumber)).toMatchSnapshot();
    });

    it('createAccount should return expected values', () => {
      expect(createAccount(payload)).toMatchSnapshot();
    });

    it('getAllUsersAccounts should return expected values', () => {
      expect(getAllUsersAccounts()).toMatchSnapshot();
    });

    it('changeAccountStatus should return expected values', () => {
      expect(changeAccountStatus(accountNumber)).toMatchSnapshot();
    });

    it('deleteAccount should return expected values', () => {
      expect(deleteAccount(accountNumber)).toMatchSnapshot();
    });

    it('transaction should return expected values', () => {
      expect(transaction(accountNumber)).toMatchSnapshot();
    });
  });

  describe('Async action creators test', () => {
    let store;
    const response = {
      data: {
        accounts: [],
        data: [],
      },
    };

    beforeEach(() => {
      store = mockStore({});
    });

    afterEach(() => {
      nock.cleanAll();
    });

    it('fetches accounts successfully', () => {
      nock(url)
        .persist()
        .get('/user/accounts')
        .reply(200, response);

      return store.dispatch(getAccounts())
        .then(() => {
          expect(store.getActions()).toMatchSnapshot();
        });
    });

    it('fetches transactions successfully', () => {
      const accountNumber = '1234567890';
      nock(url)
        .get(`/accounts/${accountNumber}/transactions`)
        .reply(200, response);

      return store.dispatch(getAccountTransactions(accountNumber))
        .then(() => {
          expect(store.getActions()).toMatchSnapshot();
        });
    });

    it('creates accounts successfully', () => {
      const accountDetails = {
        accountType: 'savings',
        initialDeposit: 50000,
      };

      nock(url)
        .post('/accounts')
        .reply(201);

      return store.dispatch(createAccount(accountDetails))
        .then(() => {
          expect(store.getActions()).toMatchSnapshot();
        });
    });
  });
});
