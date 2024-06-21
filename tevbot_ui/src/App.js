import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SendMessage from './components/sendMessage';
import UserChat from './components/UserChat';
import HeaderContent from './components/headerContent'; // Đảm bảo import đúng tên component và đúng đường dẫn
import MainContent from './components/MainContent_';
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
            <HeaderContent /> {/* Sử dụng component HeaderContent */}
            <MainContent />
            <div className="send-message">
              <SendMessage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
