import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { SignIn } from '@Components/Forms/SignIn/SignIn';

chai.should();

describe('<SignIn /> Component', () => {
  let wrapper, props, formHeader, instance, state;

  beforeEach(() => {
    state = {
      email: 'john.doe@testmail.com',
      password: 'password',
      isFormValid: true,
      errors: {},
    };
    props = {
      open: true,
      close: jest.fn(),
      signIn: jest.fn(),
      authenticating: false,
      authenticated: false,
      history: {},
      signUp: jest.fn(),
    };
    wrapper = shallow(<SignIn {...props} />);
    wrapper.setState(state);
    instance = wrapper.instance();
    formHeader = wrapper.find('h3');
  });

  it('Renders as expected', () => {
    formHeader.text().should.equal('Sign in');
    wrapper.containsMatchingElement(<h3>Sign in</h3>).should.equal(true);
    wrapper.state().should.deep.equal(state);
  });

  it('Should close the modal when the closeModal function is called', () => {
    instance.closeModal();

    expect(props.close).toHaveBeenCalled();
  });

  it('Should call the singIn function when the form is submitted', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    instance.handleSubmit(event);
    expect(props.signIn).toHaveBeenCalled();
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
        name: 'email',
        value: 'test@testmail.com',
      },
    };
    instance.handleChange(event);
    wrapper.state().email.should.equal(event.target.value);
  });

  it('Should return true if there are no errors', () => {
    instance.validateForm().should.equal(true);
  });

  it('Should return true if there are no errors', () => {
    instance.setFormValidity(state.errors).should.equal(true);
  });

  it('Should return false if there are errors', () => {
    instance.setFormValidity({ email: 'random error' }).should.equal(false);
    wrapper.state().isFormValid.should.equal(false);
  });

  it('Should successfully switch forms', () => {
    instance.closeModal = jest.fn();
    instance.switchForms();
    expect(instance.closeModal).toHaveBeenCalled();
    expect(props.signUp).toHaveBeenCalled();
  });
});
