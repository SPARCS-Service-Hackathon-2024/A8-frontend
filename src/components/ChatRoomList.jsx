import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ChatRoom from "./ChatRoom";
import io from "socket.io-client";
import { NavBar, List } from "antd-mobile";
import { LeftOutline } from "antd-mobile-icons";
import "./ChatRoomList.css";

let socket;

function ChatRoomList() {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "퇴근 후 커피",
      lastMessage: "유성구는 좋은 곳이에요",
      imageUrl: "https://picsum.photos/60/60?img=1",
    },
    {
      id: 2,
      name: "대전 좋아",
      lastMessage: "장소는 이미 정해졌나요?",
      imageUrl: "https://picsum.photos/60/60?img=2",
    },
    {
      id: 3,
      name: "친구 구함",
      lastMessage: "취미가 어떻게 되세요?",
      imageUrl: "https://picsum.photos/60/60?img=3",
    },
  ]);
  const navigateTo = useNavigate();

  useEffect(() => {
    // Socket 서버 연결
    socket = io("http://localhost:3000");

    // 채팅방 목록 받기
    socket.emit("get rooms");

    // 서버로부터 채팅방 목록 받음
    socket.on("rooms", (rooms) => {
      setRooms(rooms);
    });

    return () => {
      socket.off("rooms");
      socket.disconnect();
    };
  }, []);

  return (
    <div className="chat-room-container">
      <NavBar
        icon={<LeftOutline />}
        backArrow={false}
        style={{
          "--height": "50px",
          "--border-bottom": "1px #eee solid",
          marginBottom: "20px",
        }}
      >
        <h1>채팅방 목록</h1>
      </NavBar>

      <List className="chatroom-list">
        {rooms.map((room) => (
          <List.Item
            key={room.id}
            prefix={
              <img
                src={room.imageUrl}
                width={"60px"}
                height={"60px"}
                alt="Room"
                className="chatroom-image"
              />
            }
            description={room.lastMessage}
            onClick={() => navigateTo(`/chatroom/${room.id}`)}
          >
            {room.name}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default ChatRoomList;
