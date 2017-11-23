import { renderComponent , expect } from '../testHelper';
import App from '../../src/components/App';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows the correct text', () => {
    expect(component).to.contain('React simple starter');
  });
});
