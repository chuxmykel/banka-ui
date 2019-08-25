import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Nav } from '@Layout/Header/Nav/Nav';

chai.should();

describe('<Nav /> Component', () => {
  let wrapper, props, signUp, signIn;

  beforeEach(() => {
    props = {
      open: jest.fn(),
    };
    wrapper = shallow(<Nav {...props} />);
    signIn = wrapper.find('button').at(0);
    signUp = wrapper.find('button').at(1);
  });

  it('Renders as expected', () => {
    signIn.text().should.equal('Log in');
    signUp.text().should.equal('Sign up');
    wrapper.find('div').hasClass('important').should.equal(true);
  });

  it('Calls the open function when sign in link is clicked', () => {
    signIn.simulate('click');
    expect(props.open).toHaveBeenCalled();
  });

  it('Calls the open function when sign up link is clicked', () => {
    signUp.simulate('click');
    expect(props.open).toHaveBeenCalled();
  });
});
