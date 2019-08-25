import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import TitledText from '@Common/TitledText/TitledText';

chai.should();

describe('<TitledText /> Component', () => {
  let wrapper, props, button, header;

  beforeEach(() => {
    props = {
      title: 'Test title',
      text: 'Test text',
      cta: 'Test cta',
      open: jest.fn(),
    };
    wrapper = shallow(<TitledText {...props} />);
    button = wrapper.find('button');
    header = wrapper.find('h3');
  });

  it('Renders as expected', () => {
    button.text().should.equal(props.cta);
    header.text().should.equal(props.title);
    wrapper.containsMatchingElement(<h3>{props.title}</h3>).should.equal(true);
    wrapper.containsMatchingElement(<p>{props.text}</p>).should.equal(true);
    wrapper.containsMatchingElement(<button type="button">{props.cta}</button>).should.equal(true);
  });

  it('Calls the open function when the button is clicked', () => {
    button.simulate('click');
    expect(props.open).toHaveBeenCalled();
  });
});
