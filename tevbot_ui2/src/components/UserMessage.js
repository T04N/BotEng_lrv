import React from 'react';
import '../styles/ChatLayout.css';
class UserMessage extends React.Component {
  render() {
    const { avatarUrl, nickName, messages } = this.props;
    return (
      <div className="chat__conversation-board__message-container">
        <div className="chat__conversation-board__message__person">
          <div className="chat__conversation-board__message__person__avatar">
            <img src={avatarUrl} alt={nickName} />
          </div>
          <span className="chat__conversation-board__message__person__nickname">{nickName}</span>
        </div>
        <div className="chat__conversation-board__message__context">
          {messages.map((message, index) => (
            <div key={index} className="chat__conversation-board__message__bubble">
              <span>{message}</span>
            </div>
          ))}
        </div>
        <div className="chat__conversation-board__message__options">
          {/* Options buttons here */}
        </div>
      </div>
    );
  }
}

export default UserMessage;
