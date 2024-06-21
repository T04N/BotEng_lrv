import React, { Component } from 'react';
import '../styles/botChat.css';

class BoxChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardWidth: 'auto' // Chiều rộng ban đầu được đặt là auto
    };
    this.updateCardWidth = this.updateCardWidth.bind(this);
  }

  componentDidMount() {
    this.updateCardWidth();
    window.addEventListener('resize', this.updateCardWidth); // Lắng nghe sự kiện resize của cửa sổ
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateCardWidth); // Xóa lắng nghe sự kiện khi component bị unmount
  }

  updateCardWidth() {
    // Lấy chiều rộng của nội dung text
    const cardBodyWidth = this.cardBodyRef.clientWidth;
    // Cập nhật state để thiết lập chiều rộng của card dựa trên chiều rộng nội dung text
    this.setState({ cardWidth: cardBodyWidth });
  }

  render() {
    const { nameBot, content } = this.props;
    const { cardWidth } = this.state;

    return (
      <div className="box-chat">
        <div className="card" style={{ width: cardWidth }}>
          <div className="card-body" ref={(ref) => (this.cardBodyRef = ref)}>
            <h5 className="card-title">{nameBot}</h5>
            <p className="card-text">{content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxChat;
