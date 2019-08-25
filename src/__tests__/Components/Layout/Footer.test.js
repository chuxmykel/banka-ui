import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Footer from '@Layout/Footer/Footer';

chai.should();

describe('<Footer /> Component', () => {
  it('Renders as expected', () => {
    const wrapper = shallow(<Footer />);
    wrapper.find('h4').at(0).text().should.equal('STAY CONNECTED');
    wrapper.find('h4').at(1).text().should.equal('SUBSCRIBE TO OUR MONTHLY NEWSLETTER');
    wrapper.find('form').hasClass('news-letter').should.equal(true);
    wrapper.containsMatchingElement(<h4>STAY CONNECTED</h4>).should.equal(true);
    wrapper.containsMatchingElement(<h4>SUBSCRIBE TO OUR MONTHLY NEWSLETTER</h4>)
      .should.equal(true);
  });
});
