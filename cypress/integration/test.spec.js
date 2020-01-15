
describe('Post Resource', function() {
  it('Creating a New Post', function() {
    cy.visit('/')     // 1.

    cy.get('input') // 2.
      .type('My First Post')   // 3.

    cy.get('input.post-body')  // 4.
      .type('Hello, world!')   // 5.

    cy.contains('Submit')      // 6.
      .click()                 // 7.

    cy.url()                   // 8.
      .should('include', '/posts/my-first-post')

    cy.get('h1')               // 9.
      .should('contain', 'My First Post')
  })
}







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