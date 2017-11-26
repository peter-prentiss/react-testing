import { renderComponent , expect } from '../testHelper';
import App from '../../src/components/App';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
