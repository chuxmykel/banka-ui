import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../components/Layout/Header/Header';
import Nav from '../components/Layout/Header/Nav/Nav';
import Footer from '../components/Layout/Footer/Footer';
import FooterGroup from '../components/Layout/Footer/FooterGroup/FooterGroup';
import LandingPage from '../components/Pages/LandingPage/LandingPage';
import TitledText from '../components/common/TitledText/TitledText';

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

describe('<Footer /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  })
});

describe('<FooterGroup /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<FooterGroup title="test" item={['test 1', 'test 2', 'test 3', 'test 4']}/>);
  })
});

describe('<LandingPage /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<LandingPage />);
  })
});

describe('<TitledText /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<TitledText title="test" text="test" cta="test"/>);
  })
});