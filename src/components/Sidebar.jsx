import React from 'react';
import { Link } from 'react-router-dom';
import { useChatRooms } from './ChatRoomsProvider'; // Adjust the import path as necessary

function Sidebar() {
  const { rooms } = useChatRooms(); // 전역 상태에서 채팅방 목록 가져옴

  return (
    <aside>
      <h2>Chat Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            {/* <Link to={`/chat/${room.id}`}>{room.name}</Link> */}
            {room.name}: {room.lastMessage || 'No messages'}
            <br />
            <small>{room.timestamp}</small>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
