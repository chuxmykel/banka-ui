import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { AllAccountsTab } from '@Pages/Dashboard/Tabs/AllAccountsTab';

it('Renders correctly', () => {
  const wrapper = shallow(
    <AllAccountsTab
      active
      getUserAccounts={jest.fn()}
      editAccount={jest.fn()}
      deleteAcct={jest.fn()}
      accounts={[]}
      open={jest.fn()}
      loading={false}
      cashier={false}
    />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
