import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import RoomButton from './RoomButton';
import './MainPage.css';

function MainPage() {
  const [rooms, setRooms] = useState([]); // 현재 생성된 방 목록을 저장하는 상태
  const [roomId, setRoomId] = useState('');
  const navigateTo = useNavigate(); // useNavigate 훅을 사용

  useEffect(() => {
    // 페이지가 로드될 때 방 목록을 불러옴
    // fetch('/api/rooms')
    //   .then(res => res.json())
    //   .then(data => setRooms(data));
    setRooms([
      { id: '1', name: '방 1', participants: 1, nickname: '김철수' },
      { id: '2', name: '방 2', participants: 2, nickname: '이영희' },
      { id: '3', name: '방 3', participants: 2, nickname: '홍길동' },
    ]);
  }, []);

  const createRoom = () => {
    const newRoomId = uuidv4();
    const newRoom = { id: newRoomId, name: `방 ${newRoomId.substring(0, 8)}` };
    setRooms(prevRooms => [...prevRooms, newRoom]);
    // navigateTo(`/chatroom/${newRoomId}`); // 페이지 이동
  };

  const joinRoom = () => {
    navigateTo(`/chatroom/${roomId}`); // 페이지 이동
  };

  return (
    <div>
      <h1>메인 페이지</h1>
      <button onClick={createRoom}>방 생성</button>
      <input type="text" placeholder="방 ID 입력" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
      <button onClick={joinRoom}>방 참가</button>
      <h2>현재 생성된 방들</h2>
      <div className="room-list">
        {rooms.map(room => (
          <RoomButton
            key={room.id}
            roomName={room.name}
            participants={room.participants}
            nickname={room.nickname}
            onClick={() => navigateTo(`/chatroom/${room.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
