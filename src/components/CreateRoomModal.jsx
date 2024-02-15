import { useState } from "react";
import "./CreateRoomModal.css"; // 스타일 시트 임포트

import { CloseOutline } from "antd-mobile-icons"; // 아이콘 임포트

const CreateRoomModal = ({ isOpen, onClose, createRoom }) => {
  const [roomName, setRoomName] = useState("");
  const [route, setRoute] = useState("");
  const [meetingTime, setMeetingTime] = useState("");

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 제출 이벤트 방지
    // 방 생성 로직 실행
    createRoom({ name: roomName, date: new Date(meetingTime), route });
    onClose(); // 모달 닫기
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <CloseOutline className="close-button" onClick={onClose} />
        <h2>방 생성</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="방 이름"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            required // 필수 입력 필드
          />
          <select
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            required
          >
            <option value="">노선 선택</option>
            <option value="1호선">노선 1</option>
            <option value="2호선">노선 2</option>
            {/* 노선 옵션 추가 */}
          </select>
          <input
            type="datetime-local"
            value={meetingTime}
            onChange={(e) => setMeetingTime(e.target.value)}
            required // 필수 입력 필드
          />
          <button type="submit" className="create-button">
            방 생성
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRoomModal;
