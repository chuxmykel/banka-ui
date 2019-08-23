import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import FooterGroup from '@Layout/Footer/FooterGroup/FooterGroup';

chai.should();

describe('<FooterGroup /> Component', () => {
  it('Renders as expected', () => {
    const props = {
      item: ['test', 'array', 'items'],
      title: 'name',
    };
    const wrapper = shallow(<FooterGroup {...props} />);
    wrapper.find('h4').text().should.equal(props.title);
    wrapper.containsMatchingElement(<h4>{props.title}</h4>).should.equal(true);
    wrapper.containsMatchingElement(
      <ul>
        <li>{props.item[0]}</li>
        <li>{props.item[1]}</li>
        <li>{props.item[2]}</li>
      </ul>,
    ).should.equal(true);
  });
});
