import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { AdminRoutes } from '@Common/AdminRoutes/AdminRoutes';

it('Renders correctly', () => {
  const wrapper = shallow(
    <AdminRoutes
      auth={{
        isAuthenticated: true,
        user: {
          type: 'staff',
        },
      }}
      component={{}}
    />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
