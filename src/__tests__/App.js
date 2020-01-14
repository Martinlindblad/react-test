import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App.js';
import Enzyme from 'enzyme';
import { Simulate } from 'react-dom/test-utils';
test('should render <App /> without character', () => {
  const wrapper = mount(<App />)
  expect(wrapper.state().characters).toStrictEqual([])
  
});
test('did app render?', () => {
  const wrapper = shallow(<App user="" />);
  expect(wrapper.find('.App').exists()).toBe(true);
});




// test('call the submit characters', () => {
//   const persons = {
//     name: 'kalle',
//     job: 'ingengör' 
//   };
//   const wrapper = mount(<App />);
//   wrapper.setState({characters: persons})
//   expect(wrapper.state('characters')).toBe(persons)
//   wrapper.instance().handleSubmit();
//   expect(wrapper.state().characters).toBeFalsy();
// });




// test('Rendering a new Character', () => {
//     const hitlist = shallow(<App />);
  
//     hitlist.find('form').simulate('change', {
//         target: { value: 'New value' }
//       });
    
//       expect(inputBox.state('inputValue')).toMatch('New value');
//      });
    
    
    
    
    
    
    // describe('<App />', () => {
      // let wrapper;
      // wrapper = Enzyme.mount(<App />);
      //   wrapper.setState()
      // });
      
      
      // test('state with a character', () => {
      //   const wrapper = mount(<App />)
      //   wrapper.setState();
      //   expect(wrapper.state().characters).toBe("kalle");
      // });











// test('check if it exist 2 persons in the list', () => {
//   const persons = [
//     {
//     name: 'kalle',
//     title: 'ingengör' 
//   },
//     {
//     name: 'adel',
//     title: 'kassör' 
//   }
// ]
//   const form =  shallow(<Form />);
//   expect(form.state())

// })

// test('should render <App /> without character', () => { 
//   const wrapper = mount(<App characters="" />);
//   expect(wrapper.find("btn--delete").exists()).toBeFalsy();
// });

// test('check if state have an object', () => { 
//   const wrapper = mount(<Form includedProp="Success!" excludedProp="I'm not included" />);
//   expect(wrapper.props().includedProp).to.equal('Success!');
// })