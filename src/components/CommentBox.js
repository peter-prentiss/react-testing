import React, { Component } from 'react';

class CommentBox extends Component {
    render() {
        return (
            <div className="comment-box">
                <label>Write a comment...</label>
                <textarea />
                <button>Submit Comment</button>
            </div>
        )
    }
}

export default CommentBox;