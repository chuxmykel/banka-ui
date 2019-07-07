import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../components/Layout/Header/Header';
import Nav from '../components/Layout/Header/Nav/Nav';

describe('<App /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  })
});


describe('<Header /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  })
});

describe('<Nav /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<Nav />);
  })
});
