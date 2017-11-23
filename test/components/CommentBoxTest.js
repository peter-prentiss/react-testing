import { renderComponent, expect } from '../testHelper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () => {

    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });
});