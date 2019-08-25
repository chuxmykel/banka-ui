/* eslint-disable react/button-has-type */
import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Button from '@Common/Button/Button';

chai.should();

describe('<Button /> Component', () => {
  it('Renders as expected', () => {
    const props = {
      type: 'button',
      handleClick: jest.fn(),
      className: 'btn',
      text: 'junior',
      disabled: false,
    };
    const wrapper = shallow(<Button {...props} />);

    wrapper.text().should.equal(props.text);
    wrapper.hasClass('btn').should.equal(true);
    wrapper.containsMatchingElement(<button>{props.text}</button>).should.equal(true);
  });
});
