import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Header from '@Layout/Header/Header';

chai.should();

describe('<Header /> Component', () => {
  it('Renders as expected', () => {
    const wrapper = shallow(<Header />);
    const logo = wrapper.find('h3');
    const logoContainer = wrapper.find('div').at(0);
    const navContainer = wrapper.find('div').at(1);

    logo.hasClass('logo').should.equal(true);
    logo.text().should.equal('Banka');
    logoContainer.hasClass('logo-container').should.equal(true);
    navContainer.hasClass('nav-container').should.equal(true);
  });
});
