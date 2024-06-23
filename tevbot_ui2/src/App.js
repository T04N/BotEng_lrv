import React from 'react';
// import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import SendMessage from './components/sendMessage';
// import UserChat from './components/UserChat';

import HeaderContent from './components/headerContent'; // Đảm bảo import đúng tên component và đúng đường dẫn
import ChatLayout from './components/ChatLayout';
// import MainContent from './components/MainContent_';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <div className="">
        <div className="row">
          <div className="col-3 historyChat">
            <Sidebar />
          </div>
          <div className="col-9 mainChat">
          <HeaderContent /> 
          <ChatLayout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
