import {App} from './app'

// test suite
describe('App', () => {
  it('should have a defined title', () => {
    const component = new App();
    expect(component.title).toBeDefined();
  })
})