import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { ProfileTab } from '@Pages/Dashboard/Tabs/ProfileTab';

chai.should();

describe('<ProfileTab /> Component', () => {
  let wrapper, props, state, instance;

  beforeEach(() => {
    props = {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@test.com',
        type: 'staff',
        isAdmin: true,
      },
      active: true,
    };

    state = {
      active: props.active,
    };

    wrapper = shallow(<ProfileTab {...props} />);
    instance = wrapper.instance();
  });

  it('Renders as expected', () => {
    wrapper.find('.name-card').text().should.equal(`${props.user.firstName} ${props.user.lastName}`);
    state.should.deep.equal(wrapper.state());
  });

  it('Updates state according to the props', () => {
    const prevProps = {
      ...props,
      active: false,
    };

    instance.componentDidUpdate(prevProps);
    wrapper.state().active.should.equal(true);
  });

  it('Should render role details based on the user type', () => {
    wrapper.find('th').at(0).text().should.equal('ROLE');
    wrapper.find('td').at(0).text().should.equal('Admin');
  });

  it('Should not render role details for clients', () => {
    const newProps = {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@test.com',
        type: 'client',
        isAdmin: null,
      },
      active: true,
    };
    const newWrapper = shallow(<ProfileTab {...newProps} />);
    newWrapper.find('th').at(0).text().should.equal('BVN');
    newWrapper.find('td').at(0).text().should.equal('*******************');
  });
});
