import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ChatRoom from './ChatRoom';
import io from 'socket.io-client';
import { NavBar } from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';
import './ChatRoomList.css';

let socket;

function ChatRoomList() {
  const [rooms, setRooms] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    // Socket 서버 연결
    socket = io('http://localhost:3000');

    // 채팅방 목록 받기
    socket.emit('get rooms');

    // 서버로부터 채팅방 목록 받음
    socket.on('rooms', (rooms) => {
      setRooms(rooms);
    });

    return () => {
        socket.off('rooms');
        socket.disconnect();
    };
  }, []);

  return (
    <div className="chat-room-container">
      <NavBar
        back={null}
        icon={<LeftOutline />}
        onBack={() => navigateTo('/')}
        style={{
          "--height": "50px",
          "--border-bottom": "1px #eee solid",
          "margin-bottom": "20px",
        }}
      >
        채팅방 목록
      </NavBar>
      
      <ul className="room-list">
        {rooms.map((room, index) => (
          <li key={index} className="room-item">
            <Link to={`/chatroom/${room.id}`} className="room-link">
              {room.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatRoomList;
