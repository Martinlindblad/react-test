import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App.js';
import Table from '../table'
import Enzyme from 'enzyme';
import { Simulate } from 'react-dom/test-utils';

test('call the submit characters', () => {
  const fauxRemove = jest.fn();
  const person = [{ name: 'kalle', job: 'ingenjör' }, { name: 'jonas', job: 'lärare' }];
  const deleteBtn = '.btn--delete';
  const wrapper = mount(<Table characterData={person} removeCharacter={fauxRemove} />);
  expect(wrapper.find(deleteBtn).exists()).toEqual(true);
  expect(wrapper.find(deleteBtn)).toHaveLength(2);
  // wrapper.setProps(person);
  wrapper.find(deleteBtn).first().simulate('click');

});