import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import RoomButton from "./RoomButton";
import "./MainPage.css";
import CreateRoomModal from "./CreateRoomModal";

function MainPage() {
  const [rooms, setRooms] = useState([]); // 현재 생성된 방 목록을 저장하는 상태
  const [roomId, setRoomId] = useState("");
  const navigateTo = useNavigate(); // useNavigate 훅을 사용

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // 페이지가 로드될 때 방 목록을 불러옴
    // fetch('/api/rooms')
    //   .then(res => res.json())
    //   .then(data => setRooms(data));
    setRooms([
      { id: "1", name: "퇴근 후 커피", date: new Date(), route: "1호선" },
      { id: "2", name: "닭갈비", date: new Date(), route: "2호선" },
      { id: "3", name: "산책", date: new Date(), route: "3호선" },
    ]);
  }, []);

  const createRoom = ({ name, date, route }) => {
    const newRoomId = uuidv4();
    const newRoom = {
      id: newRoomId,
      name: name ?? `방 ${newRoomId.substring(0, 4)}`,
      date,
      route,
    };
    setRooms((prevRooms) => [...prevRooms, newRoom]);
    // navigateTo(`/chatroom/${newRoomId}`); // 페이지 이동
  };

  const joinRoom = () => {
    navigateTo(`/chatroom/${roomId}`); // 페이지 이동
  };

  return (
    <div className="main-page">
      <CreateRoomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        createRoom={createRoom}
      />
      <h1>메인 페이지</h1>
      <button onClick={openModal}>방 생성</button>
      <input
        type="text"
        placeholder="방 ID 입력"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={joinRoom}>방 참가</button>
      <h2>현재 생성된 방들</h2>
      <div className="room-list">
        {rooms.map((room) => (
          <RoomButton
            key={room.id}
            roomName={room.name}
            date={room.date}
            route={room.route}
            onClick={() => navigateTo(`/chatroom/${room.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
