import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { AccountTab } from '@Pages/Dashboard/Tabs/AccountsTab';

it('Renders correctly', () => {
  const wrapper = shallow(
    <AccountTab
      active
      getUserAccounts={jest.fn()}
      accounts={[{
        id: 1,
        accountNumber: 1234567890,
        type: 'current',
        status: 'active',
        balance: 25000,
      }]}
      transactions={[]}
      getTransactions={jest.fn()}
      open={jest.fn()}
      loading={false}
    />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
