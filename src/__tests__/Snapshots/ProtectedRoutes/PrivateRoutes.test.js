import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { PrivateRoutes } from '@Common/PrivateRoutes/PrivateRoutes';

it('Renders correctly', () => {
  const component = <h1>Test node</h1>;
  const wrapper = shallow(
    <PrivateRoutes
      auth={{
        isAuthenticated: true,
        user: {
          type: 'staff',
        },
      }}
      component={component}
    />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
