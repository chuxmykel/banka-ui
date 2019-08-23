import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { LandingPage } from '@Pages/LandingPage/LandingPage';

chai.should();

describe('<LandingPage /> Component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      isAuthenticated: false,
      type: null,
      history: {
        push: jest.fn(),
      },
      open: null,
    };
    wrapper = shallow(<LandingPage {...props} />);
  });

  it('Renders as expected', () => {
    wrapper.find('section').at(0).hasClass('hero-container').should.equal(true);
    wrapper.find('section').at(1).hasClass('section').should.equal(true);
    wrapper.find('section').at(2).hasClass('section').should.equal(true);
  });

  it('Redirects as expected when authenticated as client', () => {
    const authProps = {
      isAuthenticated: true,
      type: 'client',
      history: {
        push: jest.fn(),
      },
      open: jest.fn(),
    };

    shallow(<LandingPage {...authProps} />);
    expect(authProps.history.push).toHaveBeenCalledWith('/dashboard');
  });

  it('Redirects as expected when authenticated as an admin', () => {
    const authProps = {
      isAuthenticated: true,
      type: 'staff',
      history: {
        push: jest.fn(),
      },
      open: jest.fn(),
    };

    shallow(<LandingPage {...authProps} />);
    expect(authProps.history.push).toHaveBeenCalledWith('/admin-dashboard');
  });
});
