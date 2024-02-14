import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function MainPage() {
  const [roomId, setRoomId] = useState('');
  const navigateTo = useNavigate();

  const createRoom = () => {
    const id = uuidv4();
    navigateTo(`/chatroom/${id}`);
  };

  const joinRoom = () => {
    navigateTo(`/chatroom/${roomId}`);
  };

  return (
    <div>
      <h1>메인 페이지</h1>
      <button onClick={createRoom}>방 생성</button>
      <input type="text" placeholder="방 ID 입력" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
      <button onClick={joinRoom}>방 참가</button>
    </div>
  );
}

export default MainPage;
