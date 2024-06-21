import React, { Component } from 'react';
import UserChat from './UserChat';
import BotChat from './BotChat';
import SendMessage from './sendMessage';
import '../styles/MainContent_.css';

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="">
              {/* Truyền props username và content vào BotChat */}
              <BotChat nameBot="Tev" content=" .historyChat {
    position: sticky;
    top: 0; /* Đặt vị trí bắt đầu dính từ đầu trang */
    height: 100vh; /* Đặt chiều cao tối đa của Sidebar, 100% chiều cao của viewport */
    overflow-y: auto; /* Cho phép cuộn nếu nội dung vượt quá chiều cao */" />
              <BotChat nameBot="Tev" content="Hello, how are you?" />

              <BotChat nameBot="Tev" content="Hello, how are you?" />
              <BotChat nameBot="Tev" content="Hello, how are you?" />
              <BotChat nameBot="Tev" content="Hello, how are you?" />
              <UserChat username="Minh Toan" content="Xin chao ban"/>
              <BotChat nameBot="Tev" content="Hello, how are you?" />
              <UserChat username="Minh Toan" content="Xin chao ban"/>

              


            </div>
            <div className="col-md-4">
              {/* Truyền props username vào UserChat */}
              {/* <UserChat username="User B" /> */}
            </div>
          </div>
        </div>
        {/* SendMessage ở dưới cùng */}
        {/* <div className="send-message">
          <SendMessage />
        </div> */}
      </div>
    );
  }
}

export default MainContent;
