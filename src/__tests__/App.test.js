import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '@App/App';
import Header from '@Layout/Header/Header';
import Nav from '@Layout/Header/Nav/Nav';
import Footer from '@Layout/Footer/Footer';
import FooterGroup from '@Layout/Footer/FooterGroup/FooterGroup';
import TitledText from '@Common/TitledText/TitledText';
import rootReducer from '@Reducers/';

const store = createStore(rootReducer, {});

describe('<App /> Component', () => {
  it('Renders without crashing', () => {
    mount(
      <Provider store={store}>
        <App />
      </Provider>,
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
    mount(
      <Provider store={store}>
        <Nav />
      </Provider>,
    );
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

describe('<TitledText /> Component', () => {
  it('Renders without crashing', () => {
    shallow(<TitledText title="test" text="test" cta="test" />);
  });
});
