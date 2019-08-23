import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { AllAccountsTab } from '@Pages/Dashboard/Tabs/AllAccountsTab';

chai.should();

describe('<AllAccountsTab /> Component', () => {
  let wrapper, props, state, instance;

  beforeEach(() => {
    props = {
      active: true,
      getUserAccounts: jest.fn(),
      accounts: [],
      editAccount: jest.fn(),
      deleteAcct: jest.fn(),
      cashier: true,
      open: jest.fn(),
      loading: false,
    };

    state = {
      active: props.active,
      activeDialogue: '',
      dialogueMessage: '',
      dialogueData: {},
    };

    wrapper = shallow(<AllAccountsTab {...props} />);
    instance = wrapper.instance();
  });

  it('Renders as expected', () => {
    wrapper.find('.name-card').text().should.equal('all user\'s accounts');
    state.should.deep.equal(wrapper.state());
  });

  it('Opens the create account modal when the create button is clicked', () => {
    wrapper.find('.create').simulate('click');
    expect(props.open).toHaveBeenCalledWith('newTransaction');
  });

  it('Gets user\'s account when the component\'s props updates', () => {
    const prevProps = {
      ...props,
      active: false,
    };

    instance.componentDidUpdate(prevProps);
    expect(props.getUserAccounts).toHaveBeenCalled();
  });

  it('Handles change accordingly', () => {
    const account = {
      status: 'active',
    };

    instance.handleChange(account);
    expect(props.open).toHaveBeenCalledWith('DialogueBox');
    wrapper.state().activeDialogue.should.equal('edit');
    wrapper.state().dialogueMessage.should.equal(`Are you sure you want to
      deactivate
      this account? It can be undone later by toggling the switch`);
    wrapper.state().dialogueData.should.equal(account);
  });

  it('Handles click accordingly', () => {
    const accountNumber = '1234567890';

    instance.handleClick(accountNumber);
    expect(props.open).toHaveBeenCalledWith('DialogueBox');
    wrapper.state().activeDialogue.should.equal('delete');
    wrapper.state().dialogueMessage.should.equal('Are you sure you want to delete this account?');
    wrapper.state().dialogueData.should.equal(accountNumber);
  });
});
