import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '@Reducers/';
import App from '@App/App';
import Header from '@Layout/Header/Header';
import Nav from '@Layout/Header/Nav/Nav';
import Footer from '@Layout/Footer/Footer';
import FooterGroup from '@Layout/Footer/FooterGroup/FooterGroup';
import LandingPage from '@Pages/LandingPage/LandingPage';
import TitledText from '@Common/TitledText/TitledText';

const store = createStore(rootReducer, {});

describe('<App /> Component', () => {
  it('Renders without crashing', () => {
    mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});

describe('<Header /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });
});

describe('<Nav /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<Nav />);
  });
});

describe('<Footer /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
});

describe('<FooterGroup /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<FooterGroup title="test" item={['test 1', 'test 2', 'test 3', 'test 4']} />);
  });
});

describe('<LandingPage /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<LandingPage />);
  });
});

describe('<TitledText /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<TitledText title="test" text="test" cta="test" />);
  });
});
