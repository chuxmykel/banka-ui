import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { AdminDashboard } from '@Dashboard/AdminDashboard/AdminDashboard';

chai.should();

describe('<AdminDashboard /> Component', () => {
  let wrapper, props, state, instance;

  beforeEach(() => {
    state = {
      profile: true,
      allAccount: false,
    };

    props = {
      user: {
        firstName: 'john',
        lastName: 'doe',
      },
    };
    wrapper = shallow(<AdminDashboard {...props} />);
    instance = wrapper.instance();
  });

  it('Renders as expected', () => {
    wrapper.find('div').at(0).hasClass('user-dashboard').should.equal(true);
    wrapper.state().should.deep.equal(state);
  });

  it('Handles click event', () => {
    instance.handleClick('allAccount');
    wrapper.state().allAccount.should.equal(true);
  });
});
