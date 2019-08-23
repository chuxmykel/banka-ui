import React from 'react';
import { shallow } from 'enzyme';
import { App } from '@App/App';

describe('<App /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<App modalOpen />);
  });
});
