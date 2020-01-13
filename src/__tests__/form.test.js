import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';

test('check if it exist 2 persons in the list', () => {
  const persons =  shallow(<Form />);

  expect(persons.state())

})