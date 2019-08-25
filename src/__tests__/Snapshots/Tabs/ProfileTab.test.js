import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ProfileTab } from '@Pages/Dashboard/Tabs/ProfileTab';

it('Renders correctly', () => {
  const wrapper = shallow(
    <ProfileTab
      active
      user={{
        firstName: 'john',
        lastName: 'doe',
        email: 'john.doe@test.com',
        type: 'staff',
        isAdmin: false,
      }}
    />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
