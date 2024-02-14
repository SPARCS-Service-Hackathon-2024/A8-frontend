import { useState } from 'react';
import './CreateRoomModal.css'; // 스타일 시트 임포트

const CreateRoomModal = ({ isOpen, onClose }) => {
  const [roomName, setRoomName] = useState('');
  const [line, setLine] = useState('');
  const [meetingTime, setMeetingTime] = useState('');

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>방 생성</h2>
        <input
          type="text"
          placeholder="방 이름"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <select value={line} onChange={(e) => setLine(e.target.value)}>
          <option value="">노선 선택</option>
          <option value="1">노선 1</option>
          <option value="2">노선 2</option>
          {/* 노선 옵션 추가 */}
        </select>
        <input
          type="datetime-local"
          value={meetingTime}
          onChange={(e) => setMeetingTime(e.target.value)}
        />
        <button className="create-button" onClick={() => console.log({ roomName, line, meetingTime })}>방 생성</button>
      </div>
    </div>
  );
};

export default CreateRoomModal;
