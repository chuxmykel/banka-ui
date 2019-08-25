import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {
  signUp,
  logIn,
  logOut,
} from '@Actions/authActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const url = 'https://a-bank.herokuapp.com/api/v1';

describe('Auth action tests', () => {
  describe('Auth Action tests return values', () => {
    const userData = {
      firstName: 'john',
      lastName: 'doe',
      email: 'john.doe@gmail.com',
      password: 'password',
    };

    const history = {
      push: jest.fn(),
    };

    it('signup should return expected values', () => {
      expect(signUp(userData, history)).toMatchSnapshot();
    });

    it('signin should return expected values', () => {
      expect(logIn(userData, history)).toMatchSnapshot();
    });

    it('logout should return expected values', () => {
      expect(logIn(history)).toMatchSnapshot();
    });
  });

  describe('Async action creators test', () => {
    let store;
    const response = {
      data: [{
        id: 1,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJrY215a2FpcmxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiS2VsZWNoaSIsImxhc3ROYW1lIjoiTmd3b2JpYSIsInR5cGUiOiJjbGllbnQiLCJpc0FkbWluIjpudWxsLCJpYXQiOjE1NjY3NjgzMDIsImV4cCI6MTU2Njg1NDcwMn0.tbi_p7QnWb524thZ6uao7ILrxt0Vya_JCec1skuoGjE',
        firstName: 'John',
      }],
    };

    beforeEach(() => {
      store = mockStore({});
    });

    afterEach(() => {
      nock.cleanAll();
    });

    it('signs up a user successfully', () => {
      nock(url)
        .post('/auth/signup')
        .reply(201, response);

      return store.dispatch(signUp({}, { push: jest.fn() }))
        .then(() => {
          expect(store.getActions()).toMatchSnapshot();
        });
    });

    it('signs in a user successfully', () => {
      nock(url)
        .post('/auth/signin')
        .reply(200, response);

      return store.dispatch(logIn({}, { push: jest.fn() }))
        .then(() => {
          expect(store.getActions()).toMatchSnapshot();
        });
    });

    it('logs out a user successfully', () => {
      store.dispatch(logOut({ push: jest.fn() }));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
