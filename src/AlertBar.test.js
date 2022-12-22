import React from 'react';
import AlertBar from './AlertBar';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('AlertBar tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<AlertBar />);
  });

  it('Wyświetla alert bar jeśli nie został kliknięty przycisk', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('NIE wyświetla alert bar jeśli przycisk został kliknięty', () => {
    const button = wrapper.find('button');

    button.simulate('click');

    expect(wrapper.find('div').exists()).toBe(false);
  });
});
