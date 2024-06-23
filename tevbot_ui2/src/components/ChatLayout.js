import React, { Component } from 'react';
import '../styles/ChatLayout.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

class ChatLayout extends Component {
  render() {
    return (
      <div className="chat dark-theme">
        <div className="conversation-board">
          {/* Tin nhắn từ Bot */}
          <BotMessage
            avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
            nickName="Monika Figi"
            messages={[
              'Somewhere stored deep, deep in my memory banks is the phrase "It really whips the llama\'s ass".'
            ]}
          />

          {/* Tin nhắn từ User */}
          <UserMessage
            avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
            nickName="Thomas Rogh"
            messages={['Think asduy that did the voice has a Twitter?']}
          />

          {/* Tin nhắn từ Bot */}
          <BotMessage
            avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
            nickName="Monika Figi"
            messages={['WE MUST FIND HIM!!', 'Wait ...']}
          />

          {/* Tin nhắn từ User */}
          <UserMessage
            avatarUrl="https://randomuser.me/api/portraits/men/9.jpg"
            nickName="Dennis Mikle"
            messages={["Winamp's still an essential."]}
            type="me" // Đánh dấu là tin nhắn từ User
          />

          {/* Duplicate UserMessage elements for testing (if intentional) */}
          <UserMessage
            avatarUrl="https://randomuser.me/api/portraits/men/9.jpg"
            nickName="Dennis Mikle"
            messages={["Winamp's still an essential."]}
            type="me" // Đánh dấu là tin nhắn từ User
          />
          <UserMessage
            avatarUrl="https://randomuser.me/api/portraits/men/9.jpg"
            nickName="Dennis Mikle"
            messages={["Winamp's still an essential."]}
            type="me" // Đánh dấu là tin nhắn từ User
          />
            <UserMessage
            avatarUrl="https://randomuser.me/api/portraits/men/9.jpg"
            nickName="Dennis Mikle"
            messages={["Winamp's still an essential."]}
            type="me" // Đánh dấu là tin nhắn từ User
          />
          
        </div>

        {/* Panel dưới */}
        <div className="conversation-panel">
          <div className="panel-container">
            <button className="panel-button add-file-button">
            <i className="fa-solid fa-file-audio"></i>
            </button>

            {/* Thanh input cho tin nhắn */}
            <input
              className="panel-input"
              type="text"
              placeholder="Type a message..."
            />

            <button className="panel-button send-message-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatLayout;
