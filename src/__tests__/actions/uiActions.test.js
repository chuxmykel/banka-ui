import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { openModal, closeModal } from '@Actions/uiActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UI Action tests', () => {
  const payload = 'signin';
  it('openModal should return MODAL_OPEN type with the right modal as payload', () => {
    expect(openModal(payload)).toMatchSnapshot();
  });

  it('closeModal should return MODAL_CLOSE type with the right modal as payload', () => {
    expect(closeModal(payload)).toMatchSnapshot();
  });
});

describe('Async action creators test', () => {
  const store = mockStore({});
  it('Closes a modal successfully', () => {
    return store.dispatch(closeModal('signin'))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});
