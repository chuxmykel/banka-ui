import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { SignUp } from '@Components/Forms/SignUp/SignUp';

chai.should();

describe('<SignUp /> Component', () => {
  let wrapper, props, formHeader, instance, state;

  beforeEach(() => {
    state = {
      firstName: 'john',
      lastName: 'doe',
      email: 'john.doe@testmail.com',
      password: 'password',
      isFormValid: true,
      errors: {},
    };
    props = {
      open: true,
      close: jest.fn(),
      register: jest.fn(),
      authenticating: false,
      authenticated: false,
      history: {},
      signIn: jest.fn(),
    };
    wrapper = shallow(<SignUp {...props} />);
    wrapper.setState(state);
    instance = wrapper.instance();
    formHeader = wrapper.find('h3');
  });

  it('Renders as expected', () => {
    formHeader.text().should.equal('Sign up');
    wrapper.containsMatchingElement(<h3>Sign up</h3>).should.equal(true);
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
    expect(props.register).toHaveBeenCalled();
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
    expect(props.signIn).toHaveBeenCalled();
  });
});
