import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { AccountTab } from '@Pages/Dashboard/Tabs/AccountsTab';

chai.should();

describe('<AccountTab /> Component', () => {
  let wrapper, props, state, instance;

  beforeEach(() => {
    props = {
      active: true,
      getUserAccounts: jest.fn(),
      accounts: [],
      transactions: undefined,
      getTransactions: jest.fn(),
      open: jest.fn(),
      loading: false,
    };

    state = {
      active: props.active,
      showTransactionPane: false,
    };
    wrapper = shallow(<AccountTab {...props} />);
    instance = wrapper.instance();
  });

  it('Renders as expected', () => {
    wrapper.find('.name-card').text().should.equal('accounts');
    state.should.deep.equal(wrapper.state());
  });

  it('Opens the create account modal when the create button is clicked', () => {
    wrapper.find('.create').simulate('click');
    expect(props.open).toHaveBeenCalledWith('createAccount');
  });

  it('Gets user\'s account when the component\'s props updates', () => {
    const prevProps = {
      ...props,
      active: false,
    };

    instance.componentDidUpdate(prevProps);
    expect(props.getUserAccounts).toHaveBeenCalled();
  });
});
