import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { CreateAccount } from '@Components/Forms/CreateAccount/CreateAccount';

chai.should();

describe('<CreateAccount /> Component', () => {
  let wrapper, props, formHeader, instance, state;

  beforeEach(() => {
    state = {
      accountType: 'savings',
      initialDeposit: 5000,
      isFormValid: true,
      errors: {},
    };
    props = {
      open: true,
      close: jest.fn(),
      create: jest.fn(),
      loading: false,
    };
    wrapper = shallow(<CreateAccount {...props} />);
    instance = wrapper.instance();
    formHeader = wrapper.find('h3');
  });

  it('Renders as expected', () => {
    formHeader.text().should.equal('Create Account');
    wrapper.containsMatchingElement(<h3>Create Account</h3>).should.equal(true);
    wrapper.state().should.deep.equal(state);
  });

  it('Should close the modal when the closeModal function is called', () => {
    instance.closeModal();

    expect(props.close).toHaveBeenCalled();
  });

  it('Should call the create function when the form is submitted', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    instance.handleSubmit(event);

    expect(props.create).toHaveBeenCalled();
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
        name: 'accountType',
        value: 'loan',
      },
    };
    instance.handleChange(event);
    wrapper.state().accountType.should.equal(event.target.value);
  });

  it('Should return true if there are no errors', () => {
    instance.validateForm().should.equal(true);
  });

  it('Should return true if there are no errors', () => {
    instance.setFormValidity(state.errors).should.equal(true);
  });

  it('Should return false if there are errors', () => {
    instance.setFormValidity({ initialDeposit: 'random error' }).should.equal(false);
    wrapper.state().isFormValid.should.equal(false);
  });
});
