import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { NewTransaction } from '@Components/Forms/NewTransaction/NewTransaction';

chai.should();

describe('<NewTransaction /> Component', () => {
  let wrapper, props, formHeader, instance, state;

  beforeEach(() => {
    state = {
      transactionType: 'credit',
      accountNumber: '1212121212',
      amount: '500',
      isFormValid: true,
      errors: {},
    };
    props = {
      open: true,
      close: jest.fn(),
      transact: jest.fn(),
      loading: false,
    };
    wrapper = shallow(<NewTransaction {...props} />);
    wrapper.setState(state);
    instance = wrapper.instance();
    formHeader = wrapper.find('h3');
  });

  it('Renders as expected', () => {
    formHeader.text().should.equal('New Transaction');
    wrapper.containsMatchingElement(<h3>New Transaction</h3>).should.equal(true);
    wrapper.state().should.deep.equal(state);
  });

  it('Should close the modal when the closeModal function is called', () => {
    instance.closeModal();

    expect(props.close).toHaveBeenCalled();
  });

  it('Should call the transact function when the form is submitted', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    instance.handleSubmit(event);
    expect(props.transact).toHaveBeenCalled();
  });

  it('Should not submit the form if it\'s invalid', () => {
    const event = {
      preventDefault: jest.fn(),
    };

    instance.validateForm = jest.fn().mockReturnValueOnce(false);
    instance.handleSubmit(event).should.equal(true);
  });

  it('Should set the state based on changes from the form', () => {
    const event = {
      target: {
        name: 'accountNumber',
        value: '9987654321',
      },
    };
    instance.handleChange(event);
    wrapper.state().accountNumber.should.equal(event.target.value);
  });

  it('Should return true if there are no errors', () => {
    instance.validateForm().should.equal(true);
  });

  it('Should return true if there are no errors', () => {
    instance.setFormValidity(state.errors).should.equal(true);
  });

  it('Should return false if there are errors', () => {
    instance.setFormValidity({ accountNumber: 'random error' }).should.equal(false);
    wrapper.state().isFormValid.should.equal(false);
  });
});
