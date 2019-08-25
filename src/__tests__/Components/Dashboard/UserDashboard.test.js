import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { UserDashboard } from '@Dashboard/UserDashboard/UserDashboard';

chai.should();

describe('<UserDashboard /> Component', () => {
  let wrapper, props, state, instance;

  beforeEach(() => {
    state = {
      profile: true,
      account: false,
    };

    props = {
      user: {
        firstName: 'john',
        lastName: 'doe',
      },
    };
    wrapper = shallow(<UserDashboard {...props} />);
    instance = wrapper.instance();
  });

  it('Renders as expected', () => {
    wrapper.find('div').at(0).hasClass('user-dashboard').should.equal(true);
    wrapper.state().should.deep.equal(state);
  });

  it('Handles click event', () => {
    instance.handleClick('account');
    wrapper.state().account.should.equal(true);
  });
});
