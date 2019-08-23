import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { SideBar } from '@Dashboard/Common/SideBar/AdminSideBar/AdminSideBar';

chai.should();

describe('<SideBar /> Component', () => {
  let wrapper, props, state, instance;

  beforeEach(() => {
    state = {
      profile: true,
      allAccount: false,
    };

    props = {
      name: 'Nat Friedman',
      handleClick: jest.fn(),
      history: {},
      quit: jest.fn(),
    };
    wrapper = shallow(<SideBar {...props} />);
    instance = wrapper.instance();
  });

  it('Renders as expected', () => {
    wrapper.find('div').at(0).hasClass('sidebar').should.equal(true);
    wrapper.find('div').at(1).hasClass('mini-profile').should.equal(true);
    wrapper.find('div').at(2).hasClass('profile-image').should.equal(true);
    wrapper.find('div').at(3).hasClass('profile-name').should.equal(true);
    wrapper.find('div').at(4).hasClass('menu').should.equal(true);
    wrapper.find('div').at(5).hasClass('log-out').should.equal(true);
    wrapper.find('p').first().text().should.equal(props.name);
    wrapper.find('i').first().hasClass('fas fa-angle-down').should.equal(true);
    wrapper.state().should.deep.equal(state);
  });

  it('Handles click event', () => {
    instance.handleClick('allAccount');
    expect(props.handleClick).toHaveBeenCalled();
    wrapper.state().allAccount.should.equal(true);
  });

  it('Handles click event for logout', () => {
    expect(instance.handleClick('logout')).toBe(null);
  });

  it('Handles click event for logout', () => {
    instance.signOut();
    expect(props.quit).toHaveBeenCalledWith(props.history);
  });
});
