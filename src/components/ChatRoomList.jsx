import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ChatRoom from './ChatRoom';
import io from 'socket.io-client';

let socket;

function ChatRoomList() {
  const [rooms, setRooms] = useState([]);

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
      socket.disconnect();
    };
  }, []);

  return (
    <Router>
      <div>
        <h1>채팅방 목록</h1>
        <ul>
          {rooms.map((room, index) => (
            <li key={index}>
              <Link to={`/chat/${room.id}`}>{room.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <Route path="/chat/:id" component={ChatRoom} /> */}
      <Route path="/chatroom/:id" component={ChatRoom} />
    </Router>
  );
}

export default ChatRoomList;
