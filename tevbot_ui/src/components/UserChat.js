import React, { Component } from 'react';
import '../styles/botChat.css'; // Đảm bảo import đúng file CSS đã cập nhật

class UserChat extends Component {
  render() {
    const { username, content } = this.props;

    return (
      <div className="user-chat">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{username}</h5>
            <p className="card-text">{content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserChat;
