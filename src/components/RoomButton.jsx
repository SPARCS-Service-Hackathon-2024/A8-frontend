import './RoomButton.css'; // 스타일 시트 임포트

// 방 버튼 컴포넌트 정의
const RoomButton = ({ roomName, participants, nickname, onClick }) => {
  return (
    <div className="room-button" onClick={onClick}>
      <div className="room-info">
        <h3 className="room-name">{roomName}</h3>
        <p className="room-participants">참가자 수: {participants}</p>
      </div>
      <div className="room-nickname">닉네임: {nickname}</div>
    </div>
  );
};

export default RoomButton;
