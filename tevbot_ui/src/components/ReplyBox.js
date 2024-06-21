import React, { Component } from 'react';

class ReplyBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyContent: ''
    };
  }

  handleChange = (e) => {
    this.setState({ replyContent: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle submission
    console.log('Reply submitted:', this.state.replyContent);
    // Clear input
    this.setState({ replyContent: '' });
  }

  render() {
    const { username } = this.props;
    const { replyContent } = this.state;

    return (
      <div className="reply-box">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{username}</h5>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Reply..."
                  value={replyContent}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Reply</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ReplyBox;
