// ChatRoomsContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ChatRoomContext = createContext();

export const useChatRooms = () => useContext(ChatRoomContext);

export const ChatRoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]); // 이게 초기 상태

  const updateRoomsWithMessage = (roomId, message) => {
    // 채팅방 목록 업데이트 함수
    setRooms(prevRooms =>
      prevRooms.map(room =>
        room.id === roomId ? { ...room, lastMessage: message } : room
      )
    );
  };
  // setRooms(prevRooms => {
  //   const roomExists = prevRooms.find(room => room.id === roomId);
  //   if (roomExists) {
  //     return prevRooms.map(room =>
  //       room.id === roomId ? { ...room, lastMessage: message.text, timestamp: message.timestamp } : room
  //     );
  //   } else {
  //     // 존재하지 않는 방이라면 새로운 방을 추가
  //     return [...prevRooms, { id: roomId, name: `Room ${roomId}`, lastMessage: message.text, timestamp: message.timestamp }];
  //   }
  // });

  return (
    <ChatRoomContext.Provider value={{ rooms, updateRoomsWithMessage }}>
      {children}
    </ChatRoomContext.Provider>
  );
};
