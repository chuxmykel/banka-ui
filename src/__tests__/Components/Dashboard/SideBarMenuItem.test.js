import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import SideBarMenuItem from '@Dashboard/Common/SideBarMenuItem/SideBarMenuItem';

chai.should();

describe('<SideBar /> Component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      icon: 'fas fa-angle-down',
      text: 'Accounts',
      name: 'account',
      handleClick: jest.fn(),
      active: false,
      special: false,
    };
    wrapper = shallow(<SideBarMenuItem {...props} />);
  });

  it('Renders as expected', () => {
    wrapper.find('div').at(0).hasClass('sidebar-menu-item').should.equal(true);
    wrapper.find('div').at(1).hasClass('inactive').should.equal(true);
    wrapper.find('div').at(2).hasClass('menu-item-content').should.equal(true);
    wrapper.find('i').first().hasClass('fas fa-angle-down').should.equal(true);
    wrapper.find('p').first().text().should.equal(props.text);
  });

  it('Handles click event', () => {
    wrapper.find('div').at(0).simulate('click');
    expect(props.handleClick).toHaveBeenCalledWith(props.name);
  });
});
