import React from 'react';
import { mount, shallow } from 'enzyme';
import Form from '../form.js';
import Enzyme from 'enzyme';
import { Simulate } from 'react-dom/test-utils';

// test('call the submit characters', () => {
//   const persons = {
//     name: 'kalle',
//     title: 'ingengör' 
//   };
//     const wrapper = mount(<Form />);
//     wrapper.setState(persons);
//     expect(wrapper.state).toHavelength(2);
// });



describe('did form render?', () => {
    test('did input name render?', () => {
        const wrapper = mount(<Form />);
        expect(wrapper.find('input')).toHaveLength(3);
    });
    test('Does submit button exist?', () => {
        const wrapper = mount(<Form />);
        expect(wrapper.find('form').exists()).toBe(true);
    });
    test('dose input boxes work, can I submit?', () => {
        const persons = {
            name: 'kalle',
            title: 'ingengör' 
          };
        
        const fn = jest.fn();
        const wrapper = mount(<Form handleSubmit={fn} />);
        wrapper.find('input').at(0).simulate('change', { target: { name: 'name', value: persons.name } });
        wrapper.find('input').at(1).simulate('change', { target: { name: 'job', value: persons.title } });
        expect(wrapper.find('input').at(0).prop('value')).toEqual(persons.name);
        expect(wrapper.find('input').at(1).prop('value')).toEqual(persons.title);
        wrapper.find('input').at(2).simulate('click');
        expect(fn).toBeCalled();
    });
});
