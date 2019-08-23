import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { DialogueBox } from '@Common/DialogueBox/DialogueBox';

chai.should();

describe('<DialogueBox /> Component', () => {
  it('Renders as expected', () => {
    const props = {
      open: true,
      children: <h1>Test Child</h1>,
      agree: jest.fn(),
      agreeText: 'agree',
      activeDialogue: true,
      loading: false,
      close: jest.fn(),
    };
    const wrapper = shallow(<DialogueBox {...props} />);

    wrapper.containsMatchingElement(props.children).should.equal(true);
  });
});
