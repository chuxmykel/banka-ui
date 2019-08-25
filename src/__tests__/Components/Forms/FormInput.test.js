import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import FormInput from '@Components/Forms/FormInput/FormInput';

chai.should();

describe('<FormInput /> Component', () => {
  let wrapper, props, input;

  beforeEach(() => {
    props = {
      name: 'name',
      value: 'john',
      handleChange: jest.fn(),
      type: 'text',
      placeholder: 'sample text',
      error: 'error',
      title: 'name',
      children: null,
    };
    wrapper = shallow(<FormInput {...props} />);
    input = wrapper.find('input');
  });

  it('Renders as expected', () => {
    wrapper.find('.title-div').text().should.equal(props.title);
    wrapper.containsMatchingElement(<input type={props.type} />).should.equal(true);
  });

  it('Should call the onChange method on change', () => {
    input.simulate('change', {
      target: {
        value: 'doe',
        name: 'name',
      },
    });
    expect(props.handleChange).toHaveBeenCalled();
  });
});

describe('<FormInput /> Component type select', () => {
  let wrapper, props, input;

  beforeEach(() => {
    props = {
      name: 'type',
      value: 'debit',
      handleChange: jest.fn(),
      type: 'select',
      placeholder: '',
      error: 'error',
      title: 'type',
      children: <option value="credit">Credit</option>,
    };
    wrapper = shallow(<FormInput {...props} />);
    input = wrapper.find('select');
  });

  it('Renders as expected', () => {
    wrapper.find('.title-div').text().should.equal(props.title);
    wrapper.containsMatchingElement(<select>{props.children}</select>).should.equal(true);
  });

  it('Should call the onChange method on change', () => {
    input.simulate('change', {
      target: {
        value: 'credit',
        name: 'type',
      },
    });
    expect(props.handleChange).toHaveBeenCalled();
  });
});
