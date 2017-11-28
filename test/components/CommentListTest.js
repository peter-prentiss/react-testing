import { renderComponent, expect } from '../testHelper';
import CommentList from '../../src/components/CommentList';

describe('CommentList', () => {

    let component;

    beforeEach(() => {
        const props = { comments: ['asdf', 'comment'] }
        component = renderComponent(CommentList, null, props);
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {
        expect(component).to.contain('asdf');
        expect(component).to.contain('comment');
    });

});